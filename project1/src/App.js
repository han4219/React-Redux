import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductList />}></Route>
        <Route path='/product/:productId' element={<ProductDetail />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
