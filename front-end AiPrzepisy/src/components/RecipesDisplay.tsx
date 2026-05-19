import type {JSX} from 'react'

import ReactMarkdown from 'react-markdown'

export default function RecipesDisplay({recipProp}:{recipProp:string}):JSX.Element {
    return (
        <div className="RecipesSection">
            <h2>Przepis dla ciebie:</h2>
            {<ReactMarkdown>{recipProp}</ReactMarkdown>}
        </div>
    )
}