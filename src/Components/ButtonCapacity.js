import React from 'react';
import { connect } from 'react-redux';
import { hitMonster, hitBack } from '../actions';
import { Icon, Button } from 'semantic-ui-react';

const mapDispatchToProps = (dispatch) => {
    return {
       hitMonsters: (payload) => dispatch (hitMonster(payload)), //DISPATCH TO KEEP IMMUALIBILITE (= NE CHANGE PAS)
       hitBacks: (payload) => dispatch (hitBack(payload))
    };
}
 
const ButtonCapacityConnect = ({hitMonsters, hitBacks, props, monster }) => { 
    const combat = () => {
        hitMonsters(-10)
        hitBacks({degat:-5, id:props.player.id})
      console.log('aie !')
    }

    if ((props.player.pv === 0) || (monster.pv <= 0)) {
        return (
            <button disabled={true} type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                hit
                <i className="fas fa-bomb"></i> 5
                <i className="fas fa-fire-alt"></i> - 5
            </button>
        )
    } 
    
    else {
        return (
            <button type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                hit
                <i className="fas fa-bomb"></i> 5
                <i className="fas fa-fire-alt"></i> - 5
            </button>
        )
    }  
}


const mapStateToProps = (state, props) => {
    return {
        props : props,
        monster : state.monster
    }
};

// UNE PARENTHESE POUR PROPS + UNE STATE

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCapacityConnect);