import React from 'react';
import { connect } from 'react-redux';
import { hitMonster, increment, resetPlayed, hyperHit } from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
       hitMonsters: (payload) => dispatch (hitMonster(payload)), //DISPATCH TO KEEP IMMUALIBILITE (= NE CHANGE PAS)
       resetPlayersTurn: (payload) => dispatch(resetPlayed(payload)),
       hyperHits: (payload) => dispatch(hyperHit(payload)),
       CounterIncrement: () => dispatch(increment())
    };
}
 
const PowerConnect = ({players, countPlayerTurn, CounterIncrement, resetPlayersTurn, hitMonsters, props, monster, hyperHits }) => { 

    const combat = () => {
        hitMonsters(-30)
        hyperHits({mana : -10, id:props.player.id})
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
                 <i className="fas fa-bomb"></i> HYPER POWER
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

export default connect(mapStateToProps, mapDispatchToProps)(PowerConnect);