import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import OfficeInfo from './components/office-info';
import Equipment from './components/equipment';

function App() {
  return (
    <div className="App">
      <Header/>
      <Equipment/>
      <OfficeInfo/>
      <Footer/>
    </div>
  );
}

export default App;
