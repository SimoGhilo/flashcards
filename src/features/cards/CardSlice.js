import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cards: {}
}

const cards = {
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state = initialState, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }

}

const cardsSlice = createSlice(cards);

export const selectCards = state => {

    return state.cards.cards

}

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;