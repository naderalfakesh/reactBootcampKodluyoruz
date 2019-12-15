import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Homepage from './Hompage'

// added in order for reducx to work
import {Provider} from "react-redux";
import {Switch,Route} from "react-router-dom";



import {CoinFlipper,BurgerBuilder,TodoList,store,PetsApp} from './Projects'

function App() {
  return (
    <div className="App">
      

    <div className="wrapper">
      <Sidebar />
   
    <div id="content">
      <Switch>
        <Route path="/coinflipper">
          <CoinFlipper />
        </Route>
        <Route path="/burgerbuilder">
        <BurgerBuilder />
        </Route>
        <Route path="/todolist">
        <Provider store={store}>  <TodoList /> </Provider>
        </Route>
        <Route path="/petsapp">
        <PetsApp />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>

    </div>

</div>



    </div>
  );
}

export default App;
