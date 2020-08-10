import React from 'react';
import './App.css';
import Game from './components/game/Game';
import Blockerlogo from './assets/images/Lebron-blockers.jpeg';
import Stealerlogo from './assets/images/CP3-Stealers.jpg';
import Shooterlogo from './assets/images/Steph-Shooters.jpg';
import Dunkerlogo from './assets/images/MJ-Dunkers.jpg';



function App(props) {
  const blockers = {
      name: 'Strong Blockers',
      logoSrc: Blockerlogo
  }

  const stealers = {
      name: 'Smooth Stealers',
      logoSrc: Stealerlogo
  }

  const shooters = {
      name: 'Lethal Shooters',
      logoSrc: Shooterlogo
  }

  const dunkers = {
      name: 'High Jumpers',
      logoSrc: Dunkerlogo
      // Images from google.com

  }
  return (
      <div className="App">
      
          <Game
              venue="Hardwood War"
              homeTeam={stealers}
              awayTeam={blockers}
          />

          <Game
              venue="Mamba Arena"
              homeTeam={shooters}
              awayTeam={dunkers}
          />
      </div>
  )
}




export default App;
