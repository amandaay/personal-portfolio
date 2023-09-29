import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
// import { HireMe } from './components/HireMe';
// import { Contact } from './components/Contact';
import { Partners } from './components/Partners';

import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      {/* <HireMe /> */}
      <Partners />
      {/* <Contact /> */}

      <Footer />
    </div>
  );
}

export default App;
