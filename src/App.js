import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/CardList';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />
    </div>
  );
}

export default App;
