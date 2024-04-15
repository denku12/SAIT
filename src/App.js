import logo from './logo.svg';
import './styles/text.scss'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GaleryPage from './pages/goods';
import HomePage from './pages/home';
import CostPage from './pages/cost';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import { HeaderPage } from './pages/header';
import Footer from './pages/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage/>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/> 
            <Route path={'/goods'} element={<GaleryPage/>}/>
            <Route path={'/cost'} element={<CostPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/contact'} element={<ContactPage/>}/>
        </Routes>
        <Footer/>
    
      </BrowserRouter>
      
    </div>
  );
}

export default App;