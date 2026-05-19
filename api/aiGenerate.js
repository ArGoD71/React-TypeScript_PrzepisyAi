import { OpenAI } from "openai"
import dotenv from "dotenv"
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests
a recipe they could make with some or all of those ingredients. You don't need to use every ingredient
they mention in your recipe. The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export const aiGenerate = async (req, res) => {
    const { itemName } = req.body
    const prompt = `Podaj przykładowy przepis z ${itemName}`
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
        {role: "system", content: SYSTEM_PROMPT}, 
        {role: "user", content: prompt}
        ],
    })

    res.json({description: response.choices[0].message.content })
}