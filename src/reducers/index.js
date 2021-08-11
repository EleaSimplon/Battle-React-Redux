const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { name: "Elea", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, photo: "./elea.jpg"},
        2: { name: "Jean", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, photo: "./jean.jpg" },
        3: { name: "Julien", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, photo: "./julien.jpg" },
        4: { name: "Basile", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, photo: "./basile.jpg" },
        5: { name: "Maxime", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 5 , photo: "./maxime.jpg"}
    },
    monster: {
        name: "Hamza (boss)", pv: 300, pvMax: 500
	},
     
};

// '...' =  spread operator pour conserver l'état immuable du store.
   
function rootReducer(state = initialState, action) {

	let newState;

	if (action.type === 'HIT_MONSTER' ) {
		// NEWSTATE = A UNE COPIE DE INITIALSTATE. '...' = COPIE DE 
		newState = {
			...state,
			monster : {...state.monster, pv:state.monster.pv + action.payload } // + AJOUTER L'ACTION
		}
		console.log(newState);
		return newState;
	}
	if (action.type === 'HIT_BACK' ) {
		
		newState = {
			...state,
			players : {
				...state.players,
				[action.payload.id]: {
					...state.players [action.payload.id],
					pv:state.players [action.payload.id].pv + action.payload.degat
				}
			}
		}
		console.log(newState);
		return newState;
	}
	return state;

};

   
export default rootReducer;