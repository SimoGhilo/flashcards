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

            var topic = state.topics[action.payload.topicId];
            topic.quizIds.push(action.payload.quizId);
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