import React from "react";
import Login from "./login";
import Main from "./main";
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
return(
<Router>
<div className='App'>
<Routes>
<Route exact path='/' element={<Main/>}></Route>
<Route exact path='/login' element={<Login />}></Route>
<Route exact path='/search' element={<Search />}></Route>
</Routes>
</div>
</Router>
     
  )
}

export default App;