import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Aside from "./components/Aside/Aside";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Aside />
            <Main />
        </BrowserRouter>
    </div>
  );
}

export default App;
