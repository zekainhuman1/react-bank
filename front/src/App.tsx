import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { welcomePage } from "./page/welcomePage";
import { signIn } from "./page/signIn";
import { signUp } from "./page/signUp";


function App() {
 
  return (
  <BrowserRouter>
    <Routes>
      <Route index Component={welcomePage} />
      <Route path="/signin" Component={signIn} />
      <Route path="/signup" Component={signUp} />
      {/* <Route path="/signup" Component={signUp} />
      <Route path="/signup" Component={signUp} />
      <Route path="/signup" Component={signUp} />
      <Route path="/signup" Component={signUp} /> */}

    
    </Routes>
    </BrowserRouter>
    );
};

export default App;
