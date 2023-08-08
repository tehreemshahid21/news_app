import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Homepage from "./Components/Homepage/Homepage";
import Detailpage from "./Components/Detailpage/Detailpage";
import Categorypage from "./Components/CategoryPage/Categorypage";
import { fetchData } from "./FeatureSlice/NewSlice";
import { useDispatch } from "react-redux";


function App() {

  //  const dispatch = useDispatch()
  // useEffect(() =>{
  //   dispatch(fetchData ());
  // } ,[dispatch])

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
