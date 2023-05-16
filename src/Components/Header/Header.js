import './Header.css'
import logo from "./img/photo_2023-04-28_20-45-07.jpg"
import {Link} from "react-router-dom";
export default function Header(){
        const myInfo= [
            'Artur Neurov',
            'Front-End Developer',
            'Ukraine Lviv',
            'Prague'
        ]
        return(
        <div className="header_comp">
            <div className="mylogo">
                <img src={logo} alt="" className="mylogo_img"/>
            </div>
            {myInfo.map((el)=>(
                <h1 className="dev">{el}</h1>
            ))}
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/education">Education</Link></li>
                </ul>
            </nav>
        </div>
    )
}



