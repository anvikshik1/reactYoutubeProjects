import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyles';
import Home from './pages/HomePage/Home';
import { Navbar } from './components';
import { Footer } from './components';


function App() {
    
    return ( 
        <Router>
            <GlobalStyle/>
            <Navbar/>
            <Routes>
               <Route path='/' exact element={<Home/>}/>
            </Routes>
            <Footer/>
         </Router>
    );
}

export default App;
