import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route 
        path='/' 
        element={<Home/>} 
      />
      <Route 
        path='/*'
        element={<h1 className=''>Under  Construction!</h1>}
      />
    </Routes>
    <Footer/>
</Router>
  );
}

export default App;
