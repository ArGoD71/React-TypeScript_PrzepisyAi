import type {JSX} from 'react'

export default function Ingredients({ingArr, handleReset, handleRemove}:{ingArr:string[], handleReset:() => void, handleRemove:(ing:string) => void}):JSX.Element {

    

    return (
        <>
        <div className="ingListEl">
            <h3>Masz w domu: </h3>
            <div className="ingButtonsEl">{ingArr.map((ingredient:string) => <button className="ingBtn" key={ingredient} onClick={() =>handleRemove(ingredient)}>{ingredient}</button>)}</div>
        </div>
        <button type="button" onClick={handleReset} className="resetBtn">Zresetuj Składniki</button>
        </>
    )
}