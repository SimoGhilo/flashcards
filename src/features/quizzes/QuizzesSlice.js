import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicSlice";

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



export const createQuiz = (payload) => {
    return (dispatch, getState) => {
        console.log(payload)
        dispatch(addQuiz(payload));

        dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId }));
        //second dispatch?
        ///Am i supposed to dispatch the actions from here or from the handleSubmit function in the quiz form ? (points 12/14)
    }
}