import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
