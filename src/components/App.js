import { Route, Switch } from 'react-router-dom';
import '../App.css';
import AddActivity from './AddActivity';
import NavBar from './NavBar';
import React,{useState, useEffect} from 'react';
import HomePage from './HomePage';

function App() {
  const[todo, setTodo]=useState([])
  const[addNewTodo, setAddNewTodo]=useState(false)
  useEffect(()=>{
    fetch('http://localhost:3000/Todo')
    .then(ress=>ress.json())
    .then(data=>{
      console.log(data)
      setTodo(data)
    })
  },[addNewTodo
  ])
  function addTodo(){
    setAddNewTodo(addNewTodo=>!addNewTodo)

  }
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/addtodo">
          <AddActivity addTodo={addTodo}/>
        </Route>
        <Route exact path="/">
          <HomePage todo={todo}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
