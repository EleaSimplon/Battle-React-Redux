import React from 'react';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return { monster: state.monster };
};

const MonsterConnect = ({ monster }) => (
	<section>
		<div className="container">
			<div className="row">
				<div className="card-monstre col-sm-12">
					<div id="monsterCard">
						<div className="text-center">
							<div className="row">
								<div className="col-sm-2 offset-sm-3">
									<span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
									<img className="img-fluid" src="hamza.jpg" alt='monster' />
								</div>
								<p className="monsterName">{monster.name}</p>
								<div id="comboOnMonster" className="col-sm-6">

								</div>
							</div>
						</div>

						<ProgressBar name={monster.name}  pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />

					</div>
				</div>
			</div>
		</div>
		{ monster.pv <= 0 &&
		alert("LE BIG BOSS EST MORT !!!")
		}
	</section>
)

const Monster = connect(mapStateToProps)(MonsterConnect);

export default Monster;