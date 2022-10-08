import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}


const topics = {
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state = initialState, action) => {

            state.topics[action.payload.id] = action.payload;

        },
        addQuizId: (state = initialState, action) => {
            ///Point 11 ????

            action.quizIds.push(state.topics[action.payload.id]);
        }
    }

}

const topicsSlice = createSlice(topics)

export const selectTopic = state => {
    // console.log(state)
    return state.topics.topics
};

export const { addTopic, addQuizId } = topicsSlice.actions;


export default topicsSlice.reducer;