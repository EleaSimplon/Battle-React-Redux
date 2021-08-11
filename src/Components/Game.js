import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { Grid } from 'semantic-ui-react';

const Game = () => (
	<div className="App">
	  <Monster />
	  <br></br>
	  <section className="container-fluid">
		<PlayerList />
	  </section>
	</div>
  )


export default Game;