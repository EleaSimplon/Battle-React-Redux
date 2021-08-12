export function hitMonster(payload) {
    return { type: "HIT_MONSTER", payload }
};

export function hitBack(payload) {
    return { type: "HIT_BACK", payload }
};

export function increment(payload) {
    return { type: "INCREMENT", payload }
};

export function resetPlayed(payload) {
    return { type: "RESET_COUNT", payload }
};

export function hyperHit(payload) {
    return { type: "HYPER_HIT", payload }
};

export function ManaReload(payload) {
    return { type: "MANA_RELOAD", payload }
};

// payload contiendra ici les valeurs de notre action,
// ça peut être une valeur simple ou un array ou un objet JS.