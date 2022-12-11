import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)

export default async function generate(req, res) {
    let imageUrl;
    if (req.method === 'POST') {
        const { prompt, size } = req.body
        const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
        try {
            const response = await openai.createImage({
                prompt,
                n: 1,
                size: imageSize
            })
            imageUrl = response.data.data[0].url

        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
        }
    }
    res.status(200).json({ image: imageUrl })
}