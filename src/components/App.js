import { Route, Switch } from 'react-router-dom';
import '../App.css';
import AddActivity from './AddActivity';
import NavBar from './NavBar';
import React,{useState, useEffect} from 'react';
import HomePage from './HomePage';

function App() {
  const[todo, setTodo]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/Todo')
    .then(ress=>ress.json())
    .then(data=>{
      console.log(data)
    })
  })

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/addtodo">
          <AddActivity/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
