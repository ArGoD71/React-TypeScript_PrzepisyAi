import type {JSX} from 'react'

export default function SearchRecipe({ingArrProp, setRecipeProp}:{ingArrProp:string[], setRecipeProp:React.Dispatch<React.SetStateAction<string>>}):JSX.Element {

    async function generateRecipe() {
        const ingredientsStr = ingArrProp.join(", ")

        const response = await fetch('http://localhost:5000/ai-generate', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ itemName: ingredientsStr })
        }
        )
    
        const data = await response.json()

        setRecipeProp(data.description)

    }
        return (
            <button onClick={generateRecipe} className="searchReciepiesBtn" >Szukaj przepisu</button>

        )

    
}

