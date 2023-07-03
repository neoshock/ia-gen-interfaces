import axios from 'axios';

const openaiService = {
    generateInterface: async (userPrompt: string, imageUrls: Array<string>) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant that generates HTML and CSS code.' },
                        { role: 'system', content: 'You are a helpful assistant that generates a visually appealing interface.' },
                        { role: 'system', content: `Here are some images you can use: ${imageUrls.join(', ')}` },
                        { role: 'user', content: `${userPrompt}. Please provide the HTML and CSS code separately. The HTML code should only contain a single div element that contains all the specified content. Also, make the interface visually appealing. If you need to use images, please use the ones provided in the list.` },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`
                    },
                }
            );
            const stringResponse = response.data.choices[0].message.content;
            const htmlCode = extractHtml(stringResponse);
            const cssCode = extractCss(stringResponse);
            return { html: htmlCode, css: cssCode };
        } catch (error) {
            console.log('Error calling OpenAI API:', error);
            throw error;
        }
    },
};

function extractHtml(code: string) {
    const htmlStart = code.indexOf('<div');
    const htmlEnd = code.lastIndexOf('</div>') + 6;
    const htmlCode = code.slice(htmlStart, htmlEnd);
    return htmlCode;
}

function extractCss(code: string) {
    const cssStart = code.indexOf('```css\n') + 7;
    const cssEnd = code.lastIndexOf('```') - 1;
    const cssCode = code.slice(cssStart, cssEnd);
    return cssCode;
}

export default openaiService;
