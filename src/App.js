import React from "react";
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Timeline} from './components/Timeline'
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
      <Skills/>
      <Timeline/>
    </div>
  );
}

export default App;
