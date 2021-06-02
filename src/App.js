import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import Contact from './Components/Contacts/Contact';
import EditContact from "./Components/EditContact/EditContact";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/"><Contact></Contact></Route>
              <Route path="/addContact"><AddContact></AddContact></Route>
              <Route path="/editContact/:id"><EditContact></EditContact> </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
