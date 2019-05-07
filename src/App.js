import React from 'react';
import './scss/App.scss';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </div>
      </Router>
    </div>
  );
}

export default App;
