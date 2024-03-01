import './App.css';
import Footer from './components/general/Footer';
import FiltresHautPageHome from './components/home/FiltresHautPageHome';
import ListItemHome from './components/home/ListItemHome';



function App() {
  return (
    <div className="App flex flex-col items-center">
      <FiltresHautPageHome />
      <ListItemHome title="9ème Challenge" cat="Carnassiers en Bateau" place="Nort/Erdre" price="50€" places="20" />
      <ListItemHome title="9ème Challenge" cat="Carnassiers en Bateau" place="Nort/Erdre" price="50€" places="20" />
      <ListItemHome title="9ème Challenge" cat="Carnassiers en Bateau" place="Nort/Erdre" price="50€" places="20" />
      <ListItemHome title="9ème Challenge" cat="Carnassiers en Bateau" place="Nort/Erdre" price="50€" places="20" />
      <Footer />
    </div>
  );
}

export default App;
