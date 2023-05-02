import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/profile" element={<Profile/>}/>
                      <Route path="/dialogs" element={<Dialogs/>}/>
                      {/*<Route path="/news" element={<News/>}/>*/}
                      {/*<Route path="/music" element={<Music/>}/>*/}
                      {/*<Route path="/setting" element={<Setting/>}/>*/}
                  </Routes>
              </div>
          </div>);
      </BrowserRouter>
  )
}

export default App;