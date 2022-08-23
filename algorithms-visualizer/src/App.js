import './App.css';
import Navbar from './components/Navbar';
import ColumnGraph from './components/ColumnGraph';
import { useState } from 'react';
import RangeSlider from './components/RangeSlider';

function App() {
  const [data,setData] = useState([
    ["", "", { role: "style" }],
    ["", 1, '#4d4d4d'], // RGB value
    ["", 10, '#4d4d4d'], // English color name
    ["", 20, '#4d4d4d'],
    ["", 30, '#4d4d4d'], // CSS-style declaration
    ["", 40, '#4d4d4d'], // RGB value
    ["", 45, '#4d4d4d'], // English color name
    ["", 50, '#4d4d4d'],
    ["", 50, '#4d4d4d'],
    ["", 50, '#4d4d4d'],
    ["", 50, '#4d4d4d'] // CSS-style declaration
  ]);

  return ( 
    <>
    <Navbar/>
    <ColumnGraph data={data} setData = {setData}/>
    <RangeSlider data={data} setData = {setData}/>
    </> 
  );
}

export default App; 
