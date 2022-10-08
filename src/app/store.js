import { configureStore } from "@reduxjs/toolkit";

import topicsSliceReducer from "../features/topics/topicSlice";
import quizzesSliceReducer from "../features/quizzes/QuizzesSlice";
import cardsSliceReducer from "../features/cards/CardSlice";

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSliceReducer,
    cards: cardsSliceReducer,
  }

});
