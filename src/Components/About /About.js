import './About.css'
export default function About(){
    const textStyle = {'color' : 'white', 'margin' : '0 10px'}
    return(
        <div>
            <div className="wrapper">
                <div className="text">
                    <h1 style={{'color': 'white', 'fontSize' : '50px', 'padding': '10px'}}>Who I am??</h1>
                    <h3 style={textStyle}>Artur Neurov<br/>
                      Žiju a studuju v Praze už skoro rok <br/>
                      O počítače se zajímám od svých 3 let <br/>
                      Vyznám se v počítačových komponentách, mám zkušenosti s montáží a demontáží PC komponentu, v případě fyzických poruch PC se zorientuju a mohl bych problému odstranít <br/>
                      Začátek mé cesty v programování byl před 2 lety a začal s python + django (mám nějaké znalosti Python a SQL)
                      <br/>
                      Opravdu bych se rád vyzkoušel jako front-end vývojář ve vaší společnosti a byl užitečným zaměstnancem <br/>
                      Doufám, že se mi ozvete a budu součástí vašeho týmu <br/>
                      V tomto životopisu jsem použil REACT a prokázal základní dovednosti a použil různé techniky včetně SPA
                 </h3>
                </div>
            </div>
        </div>
    )
}