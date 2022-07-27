import './App.css';
import Navbar from './componenets/Navbar'
import Alert from './componenets/Alert'
import About from './componenets/About'
import Form from './componenets/Form'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(30 29 48)';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - dark mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - light mode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Form showAlert={showAlert} mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
   );
}

export default App;