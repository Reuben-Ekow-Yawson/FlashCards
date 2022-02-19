import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdToTopic } from '../topics/topicsSlice';

const initialState = {
  quizzes: {
   
  }
};

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz(state, action) {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

//thunk action creators
export const createNewQuiz = (payload) => {
  const { name, id, topicId, cardIds } = payload;

  return (dispatch) => {
    dispatch(
      addQuiz({
        name,
        id,
        topicId,
        cardIds
      })
    );

    dispatch(
      addQuizIdToTopic({
        topicId,
        quizId: id // payload id here is the quiz id
      })
    );
  };
};

//export selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

//export actions
export const { addQuiz } = quizzesSlice.actions;

//export reducer
export default quizzesSlice.reducer;
