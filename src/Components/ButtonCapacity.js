import React from 'react';
import { connect } from 'react-redux';
import { hitMonster, hitBack, increment, resetPlayed} from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
       hitMonsters: (payload) => dispatch (hitMonster(payload)), //DISPATCH TO KEEP IMMUALIBILITE (= NE CHANGE PAS)
       hitBacks: (payload) => dispatch (hitBack(payload)),
       resetPlayersTurn: (payload) => dispatch(resetPlayed(payload)),
       CounterIncrement: () => dispatch(increment())
    };
}
 
const ButtonCapacityConnect = ({players, countPlayerTurn, CounterIncrement,     resetPlayersTurn, hitMonsters, hitBacks, props, monster}) => { 
    const combat = () => {
        hitMonsters(-10)
        hitBacks({degat:-15, id:props.player.id})
        CounterIncrement();

        console.log('aie !')
    }

    if (countPlayerTurn === Object.keys(players).length) {
        Object.keys(players).map((key) => {
            resetPlayersTurn({ id: key })
        })
    }

    function displayButton () {
        if ((props.player.played) || (props.player.pv === 0) || (monster.pv <= 0)) {
            return (
                <button disabled={true} type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main">
                    <i className="fas fa-bomb"></i> RELOAD
                    <i className="fas fa-fire-alt"></i>
                </button>
            )
        } 
    
        else {
            return (
                <button type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                    <i className="fas fa-bomb"></i> HIT THE BOSS
                    <i className="fas fa-fire-alt"></i>
                </button>
            )
        }
    }
    return (displayButton())
}


const mapStateToProps = (state, props) => {
    return {
        props : props,
        monster : state.monster,
        players : state.players,
        countPlayerTurn : state.countPlayerTurn
    }
};

// UNE PARENTHESE POUR PROPS + UNE STATE

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCapacityConnect);