'use client'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import openaiService from './openaiService';
import ReactLoading from 'react-loading';
import { listImages } from './const';

const Home = () => {
  const [html, setHtml] = useState<string>('<h1>Hola, mundo!</h1>');
  const [css, setCss] = useState<string>('h1 { color: red; }');
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const generatedCode = await openaiService.generateInterface(input, [...listImages]);
      console.log(generatedCode);
      const generatedHtml = generatedCode.html;
      const generatedCss = generatedCode.css;
      setHtml(generatedHtml);
      setCss(generatedCss);
    } catch (error) {
      console.error('Error generating interface:', error);
    }
    setIsLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', p: 2, bgcolor: '#1e1e1e' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe aquí"
          fullWidth
          sx={{ mr: 2, bgcolor: '#333', color: '#fff', borderRadius: 1, input: { padding: '15px', color: '#fff' } }}
        />
        <Button
          variant="contained"
          onClick={handleGenerate}
          color='secondary'
          size='large'
          style={{ color: '#fff', backgroundColor: '#5D3FD3', borderRadius: '10px', height: '90%', width: '15%' }}
        >Generar</Button>
      </Box>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <AceEditor
          value={html}
          onChange={setHtml}
          name="HTML_EDITOR"
          mode="html"
          theme="monokai"
          editorProps={{ $blockScrolling: true }}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          style={{ width: '33%', height: '100%', marginRight: '1%', border: '1px solid #333', borderRadius: '3px' }}
        />
        <AceEditor
          value={css}
          onChange={setCss}
          name="CSS_EDITOR"
          mode="css"
          theme="monokai"
          editorProps={{ $blockScrolling: true }}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          style={{ width: '33%', height: '100%', marginRight: '1%', border: '1px solid #333', borderRadius: '3px' }}
        />
        <Paper
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#fff',
            borderRadius: 2,
            p: 2,
          }}
        >
          {isLoading ? (
            <ReactLoading type={"spin"} color={"#5D3FD3"} />
          ) : (
            <iframe
              srcDoc={`<style>${css}</style>${html}`}
              title="Preview"
              style={{ width: '100%', height: '100%', borderRadius: '10px' }}
            />
          )}
        </Paper>

      </Box>
    </Box>
  );
}

export default Home;


