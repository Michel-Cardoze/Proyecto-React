import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import FormLugar from './components/FormLugar/FormLugar';
import { Lugares } from './components/Lugares';
import { Lugar } from './components/Lugar';
import { createContext, useState} from 'react';
import { Article } from './components/Article';
import { Footer } from './components/Footer';
import  CounterES6 from './components/CounterES6';

export const MyContext = createContext({})


const App = () => {

  const [showed, setShowed] = useState(false)

  const [data, setData] = useState([])

  const showHandler = () => setShowed(!showed)

  const [selectedLugares, setSelectedLugares] = useState([])

  const addRemoveLugares= (added, lugar) => {
    if (added){
      setSelectedLugares([...selectedLugares, lugar])
    } 
    else {
      const filteredLugares = selectedLugares.filter(l => l.id !== lugar.id)
      setSelectedLugares(filteredLugares)
    }
  }

  return (

    <MyContext.Provider value={
      {
        selectedLugares, addRemoveLugares
      }
    }>


      <div className='App'>
      <Routes>
        <Route element={<Navbar data={data} setData={setData} showHandler={showHandler} showed={showed} />} >   
          <Route path='/lugares' element={<Lugares data={data} setData={setData} />} />
          <Route path='/lugares/:id' element={<Lugar />} />
          <Route path='/FormLugar' element={<FormLugar />} />
          <Route path='/FormLugar' element={<FormLugar />} />
          <Route path='*' element={<Article />} />


        </Route>
      </Routes>
      <CounterES6 />
      <Footer />
    </div>
    </MyContext.Provider>
  );
}

export default App;
