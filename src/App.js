import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipe/:id" element={<Recipe />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
