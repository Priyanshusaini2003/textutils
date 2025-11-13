// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// let name = "Saini";
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
     setAlert({
        msg: message,
        type: type
     })
     setTimeout(() => {
        setAlert(null);
     }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  // const toggleMode = () =>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#400101';

  //     const buttons = document.querySelectorAll('button');
  //     buttons.forEach(button => {
  //       button.style.backgroundColor = 'yellow';
  //     });

  //     showAlert("Dark mode has been enabled","success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';

  //     const buttons = document.querySelectorAll('button');
  //     buttons.forEach(button => {
  //       button.style.backgroundColor = '';
  //     });

  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" aboutUtils = "About Utilis" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes> 
          {/* /users --> component1
          /users/home --> component2 */}
          <Route exact path="/about" element={<About mode={mode}/>} />
          {/* <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} /> */}
          <Route exact path="/" element={<TextForm heading="Test TextUtils - Word Counter, Character Counter" showAlert={showAlert} mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
