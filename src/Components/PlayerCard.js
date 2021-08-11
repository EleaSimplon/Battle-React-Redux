import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';




const mapStateToProps = (state, ownProps) => {
    return { 
        players: state.players,
        props: ownProps
    };
  };

const PlayerCardConnect = ({players, props}) => {
    return (

            <div key={props.player.id} className="col-sm-3 card center" id={`joueur${props.player.id}`}>

                <div className="card-body text-center">
                <img className="imgPlayer" src={props.player.photo} />
                    <h5 className="card-title">{props.player.name}</h5>
                    <ProgressBar className="playerPv" pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar className="playerMana" pv={props.player.mana} pvMax={props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row ">
                        <div >
                            <ButtonCapacity player={props.player} />
                        </div>
                    </div >
                </div >
            </div >
)};


const PlayerCard = connect(mapStateToProps)(PlayerCardConnect);

export default PlayerCard;