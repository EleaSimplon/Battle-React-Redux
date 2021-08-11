export function hitMonster(payload) {
    return { type: "HIT_MONSTER", payload }
};

export function hitBack(payload) {
    return { type: "HIT_BACK", payload }
};

// TO DO HIT BACK !!!

// payload contiendra ici les valeurs de notre action,
// ça peut être une valeur simple ou un array ou un objet JS.