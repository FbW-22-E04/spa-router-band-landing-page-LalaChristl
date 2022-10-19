
import './App.css';
import Header from './components/Header';
import QTip from './components/QTip';
import PhifeDawg from './components/PhifeDawg';
import AliShaheedMuhammad from './components/AliShaheedMuhammad';
import JarobiWhite from './components/JarobiWhite';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='q-tip' element={<QTip/>}></Route>
          <Route path='phife-dawg' element={<PhifeDawg/>}></Route>
          <Route path='ali-shaheed' element={<AliShaheedMuhammad/>}></Route>
          <Route path='jarobi-white' element={<JarobiWhite/>}></Route>
        </Routes>



      </BrowserRouter>

    </div>
  );
}

export default App;
