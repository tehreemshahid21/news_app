import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Homepage from "./Components/Homepage/Homepage";
import Detailpage from "./Components/Detailpage/Detailpage";
import Categorypage from "./Components/CategoryPage/Categorypage";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/details" element={<Detailpage/>}/>
      <Route path="/category" element={<Categorypage/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
