import { FluxStandardAction, ADD_WORD } from "./actions";

const stateExample = {
    streak: 0,
    words: [
        {
            word: "tapa",
            img: "tapa.png"
        }
    ]
}

const initialState = {
    streak: 0,
    words: []
}

export default function stateReducer(state = initialState, action: FluxStandardAction) {
    switch (action.type) {
        case ADD_WORD:
            return Object.assign({}, state, {
                word: action.payload.word,
                img: action.payload.img
            });
    }
    return state;
}