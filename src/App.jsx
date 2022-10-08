// React Router Dom components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Custom components
import { HomeContainer, ProductDetailContainer } from './components/index';
// Styles
import './App.css';

//
// Component start
//
function App() {
  return (
    <div className="App">
      <header>imHeader</header>
      <main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomeContainer />} />
              <Route path='/ProductDetail/:id' element={ <ProductDetailContainer /> } />
            </Routes>
          </BrowserRouter>
      </main>
      <footer>imFooter</footer>
    </div>
  );
}

export default App;