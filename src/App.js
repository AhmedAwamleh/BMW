
import './App.css';
import CarType from './components/cartype';
import Footer from './components/footer';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />

      <CarType />
      <Footer />
    </div>
  );
}

export default App;
