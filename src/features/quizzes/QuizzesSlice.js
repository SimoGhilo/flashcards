import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
}

const quizzes = {
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state = initialState, action) => {
            state.quizzes[action.payload.id] = action.payload;

        },


    }

}

const quizSlice = createSlice(quizzes);

export const selectQuiz = state => { return state.quizzes.quizzes };

export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer;

////Point 12:


export const createQuiz = (dispatch, payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        //second dispatch?
        // async function ?
    }
}