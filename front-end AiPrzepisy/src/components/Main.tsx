import Ingredients from "./Ingredients.tsx"
import RecipesDisplay from "./RecipesDisplay"
import SearchRecipe from "./SearchRecipe.tsx"

import type {JSX} from 'react'

import { useState } from "react"


export default function Main():JSX.Element {

    const [ingredientsArr, setIngredientsArr] = useState<string[]>([])

    const [recipes, setRecipes] = useState<string>("")

    
    function handleAddIngredient (formData: FormData) {

        const ingredient = formData.get("ingredientInput")

        if (typeof ingredient !== "string") return

        if (ingredient.trim() === "") return

        if (ingredientsArr.includes(ingredient)) return
        
        setIngredientsArr(prevArr => [...prevArr, ingredient])

    }


    function resetIngriedients () {
        setIngredientsArr([])
    }

    function removeIngredient(ing:string) {
        setIngredientsArr(prevArr => prevArr.filter(item => item !== ing))
    }
    
    return (

        <div className="main">
            <h2>Jakie masz składniki ? </h2>


            <form action={handleAddIngredient}>
                <label className="addIngredientLabel">
                    <input name="ingredientInput" placeholder="jajka" className="textInputBox"/>

                    <button type="submit" className="addIngBtn">+ Dodaj</button>
                </label>
            </form>

                {ingredientsArr[0] && <Ingredients 
                ingArr = {ingredientsArr}
                handleReset = {resetIngriedients}
                handleRemove = {removeIngredient}
                />}

                {ingredientsArr[0] && <SearchRecipe
                ingArrProp = {ingredientsArr}
                setRecipeProp = {setRecipes}
                />}

                {recipes && <RecipesDisplay recipProp = {recipes}/> }

        </div>

    )   
}