import "./App.css";
//import React, { useState, useEffect } from "react";

import AutocompleteChips from "./AutocompleteChips.jsx"

//const [initialItems] = useState(['Pranav Raj', 'Aman Mishra', 'Sameer Ranjan','Vedant']);
function App() {
  
  return (
    <>
      <div className="search"></div>
      <h1>Chip</h1>
      <AutocompleteChips/>
      
    </>
  );
}

export default App;
