import React from 'react';
import { connect } from 'react-redux';
import { increment, resetPlayed, ManaReload } from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
       resetPlayersTurn: (payload) => dispatch(resetPlayed(payload)),
       ManaReloads: (payload) => dispatch(ManaReload(payload)),
       CounterIncrement: () => dispatch(increment())
    };
}
 
const ManaConnect = ({players, countPlayerTurn, CounterIncrement, resetPlayersTurn, props, monster, ManaReloads }) => { 

    const combat = () => {
        ManaReloads({mana : +10, id:props.player.id})
        CounterIncrement();
        console.log('aie !')
    }

    if (countPlayerTurn === Object.keys(players).length) {
        Object.keys(players).map((key) => {
            resetPlayersTurn({ id: key })
        })
    }

    function displayButton () {
        if ((props.player.played) || (props.player.pv === 0) || (monster.pv <= 0) || (props.player.mana === 30)) {
            return (
                <button disabled={true} type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main">
                <i className="fas fa-bomb"></i> MANA MAX
                <i className="fas fa-fire-alt"></i>
            </button>
            )
        } 
    
        else {
            return (
                 <button type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                 <i className="fas fa-bomb"></i> RELOAD MANA
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

export default connect(mapStateToProps, mapDispatchToProps)(ManaConnect);