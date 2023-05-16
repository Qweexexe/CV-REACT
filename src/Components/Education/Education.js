import './Education.css'
import {useState} from "react";


export default function Education() {
    const knowledges = {
        English: 'B2',
        Czech: 'B2',
        Ukrainian: 'Native speaker',
        Study: 'VŠE / ČZU :)))',
        Languages: ' HTML, CSS, JAVASCRIPT, REACT, SQL, GIT, AXIOS',
        Courses: 'SoftServe React Practical || ItGid React Course'
    }
    const [state, setState] = useState('Please click the button')
    const knowledgesKey = Object.keys(knowledges)
    const knowledgeValue = Object.values(knowledges)
    const elStyle = {
        'color': 'white',
        'padding': '10px',
        'border': '2px solid white',
        'borderRadius': '20px',
        'margin': '10px'
    }
    const text = 'Přistoupil jsem k tomu poměrně originálně a doufám, že jsem své znalosti prokázal a své znalosti mohu ještě lépe ukázat na interview'

    const handleClick = () => {
        setState(text)
    }

    return (
        <div>
            <div className="wrap">
                <div className="know">
                    {knowledgesKey.map(el => (
                        <h1 style={elStyle} className="know_li">{el}</h1>
                    ))}
                </div>
                <div className="know">
                    {knowledgeValue.map(el => (
                        <h1 style={elStyle} className="know_li">{el}</h1>
                    ))}
                </div>
            </div>
            <button className="button" onClick={handleClick}>Click</button>
            <p className="footer">{state}</p>
        </div>
    )
}