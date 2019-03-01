export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const EDIT_WORD = 'EDIT_WORD';
export const SIGNAL_CORRECT_ANSWER = 'SIGNAL_CORRECT_ANSWER';
export const SIGNAL_WRONG_ANSWER = 'SIGNAL_WRONG_ANSWER';

export interface FluxStandardAction {
    type: string,
    payload?: object
}

function createStandardAction(type: string, payload?: object): FluxStandardAction {
    let action = {
        type: type
    };
    if (payload) {
        action = Object.assign(action, {
            payload: payload
        });
    }
    return action;
}

export function addWord(word: string, image: string) {
    return createStandardAction(ADD_WORD, {
        word: word,
        image: image
    });
}

export function removeWord(word: string) {
    return createStandardAction(REMOVE_WORD, {
        word: word
    });
}

export function editWord(word: string, newWord: string, img: string) {
    return createStandardAction(EDIT_WORD, {
        word: word,
        newWord: newWord,
        img: img
    });
}

export function signalCorrectAnswer() {
    return createStandardAction(SIGNAL_CORRECT_ANSWER);
}

export function signalWrongAnswer() {
    return createStandardAction(SIGNAL_WRONG_ANSWER);
}