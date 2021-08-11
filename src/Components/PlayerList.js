import React from 'react';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { players: state.players };
};

const PlayerListConnect = ({players}) => {

	function displayPlayers () {
		return Object.keys(players).map(key => (
			<PlayerCard key={players[key].id} player={players[key]} />
		));
	}

	return (
		<div className='row'>
			{displayPlayers()}
		</div>
	);
	
}

const PlayerList = connect(mapStateToProps)(PlayerListConnect);

export default PlayerList;