import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import About from "./Components/About /About";
import Education from "./Components/Education/Education";
function App() {
  return (
    <div className="wrapper_app">
            <Router>
                <div className="left">
                    <Header/>
                </div>
                <div className="right">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/education" element={<Education/>}/>
                </Routes>
                </div>
            </Router>
    </div>
  );
}

export default App;
