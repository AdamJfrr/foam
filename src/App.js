import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import Shop from './pages/Shop';
import Grid from './components/grid/Grid';
import ItemPage from './pages/ItemPage';
import About from './pages/About';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/item/:itemNumber' element={<ItemPage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}
export default App;
