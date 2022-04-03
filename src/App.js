import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import OrderPage from './components/OrderPage/OrderPage';
import SuccessPage from './components/SuccessPage/SuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/success' element={<SuccessPage />} />
        </Routes>
        <Footer path='/contacts' />
      </div>
    </Router>
  );
}

export default App;
