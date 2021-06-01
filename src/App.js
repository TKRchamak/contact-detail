import './App.css';
import Contact from './Components/Contacts/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <div className="container">
        <div className="py-3">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
