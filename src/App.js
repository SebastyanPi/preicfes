import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Method } from './components/Method';
import { Plains } from './components/Plains';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Method />
      <Plains />
      <Footer />
    </div>
  );
}

export default App;
