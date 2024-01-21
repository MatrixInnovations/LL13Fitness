import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Heart from './assets/Heart.mp4';
import Hero from './components/hero/hero';
import Button from './components/button/button';

// Create pages for each route
import Home from './pages/Home';
import PersonalizedProgram from './pages/PersonalizedProgram';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="video-background">
        <Navbar />
        <Hero />
        <Button />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personalized-program" exact component={PersonalizedProgram} />
          <Route path="/1-1-coaching" exact component={Coaching} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
        <video id="background-video" loop autoPlay className="background-tint" muted>
          <source src={Heart} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Router>
  );
}

export default App;
