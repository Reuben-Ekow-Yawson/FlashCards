import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {
   
  }
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    },
    addQuizIdToTopic(state, action) {
      
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

//export selectors
export const selectTopics = (state) => state.topics.topics;

//export actions
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;

//export reducers
export default topicsSlice.reducer;
