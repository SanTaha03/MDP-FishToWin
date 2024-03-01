import logo from './logo.svg';
import './App.css';
import Footer from './components/general/Footer';
import Header from './components/general/Header';

function App() {
  return (
    <div className="App">
      <Header title="Profil" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
