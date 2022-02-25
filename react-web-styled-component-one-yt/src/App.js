import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyles';
import Home from './pages/HomePage/Home';
import { Navbar } from './components';
import { Footer } from './components';
import Service from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop';


function App() {
    
    return ( 
        <Router>
            <GlobalStyle/>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
               <Route path='/' exact element={<Home/>}/>
               <Route path='/service' exact element={<Service/>}/>
               <Route path='/products' exact element={<Products/>}/>
               <Route path='/sign-up' exact element={<SignUp/>}/>
            </Routes>
            <Footer/>
         </Router>
    );
}

export default App;
