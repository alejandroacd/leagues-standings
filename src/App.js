import React from 'react'

import '../src/App.css'
import { BrowserRouter, Route, Routes,Router } from 'react-router-dom'
import LeagueInfo from './components/LeagueInfo/LeagueInfo'
import Main from '../../leagues-standings/src/components/Main/Main'
function App() {


  return (


    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element= {<Main/>} />
    <Route exact path="/leagueinfo/:id"  element={<LeagueInfo />} />


    </Routes>
  
    
     </BrowserRouter>
    </div>


  );
}

export default App;
