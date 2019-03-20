import { FluxStandardAction, ADD_WORD } from "./actions";

const initialState = {
    streak: 0,
    words: [
        {
            word: "tapa",
            img: "tapa.png"
        }
    ]
}

// const initialState = {
//     streak: 0,
//     words: []
// }

export default function stateReducer(state = initialState, action: FluxStandardAction) {
    switch (action.type) {
        case ADD_WORD:
            const words = state.words.map(v => v);
            words.push({
                word: action.payload.word,
                img: action.payload.img
            });
            
            return Object.assign({}, state, {
                words: words
            });
    }
    
    return state;
}