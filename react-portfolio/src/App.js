import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;
