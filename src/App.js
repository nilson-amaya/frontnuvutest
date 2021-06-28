import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import CreateClient from "./components/CreateClient";
import Consult from "./components/Consult";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST FOR NUVU</h1>
      </header>
      <div className="container">
        <Menu />
        <Router>
          <Switch>
            <Route exact path="/">
              <div class="alert alert-dark mt-3" role="alert">
                <h3>Selecciona una de las opciones en la parte superior.</h3>
              </div>
            </Route>
            <Route path="/create">
              <CreateClient />
            </Route>
            <Route path="/consult">
              <Consult />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
