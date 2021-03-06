// update all questions
export const UPDATE_ALL_QUESTIONS = 'UPDATE_ALL_QUESTIONS';
export const actionAllQuestions = (value) => {
  return {
    type: UPDATE_ALL_QUESTIONS,
    value,
  };
};

// update fill blank questions
export const UPDATE_FILL_BLANK_QUESTIONS = 'UPDATE_FILL_BLANK_QUESTIONS';
export const actionFillBlankQuestions = (value) => {
  return {
    type: UPDATE_FILL_BLANK_QUESTIONS,
    value,
  };
};

// update judge questions
export const UPDATE_JUDGE_QUESTIONS = 'UPDATE_JUDGE_QUESTIONS';
export const actionJudgeQuestions = (value) => {
  return {
    type: UPDATE_JUDGE_QUESTIONS,
    value,
  };
};

// update select questions
export const UPDATE_SELECT_QUESTIONS = 'UPDATE_SELECT_QUESTIONS';
export const actionSelectQuestions = (value) => {
  return {
    type: UPDATE_SELECT_QUESTIONS,
    value,
  };
};

// save and check questions
export const SAVE_ALL_QUESTIONS = 'SAVE_ALL_QUESTIONS';
export const actionSaveAllQuestion = () => {
  return {
    type: SAVE_ALL_QUESTIONS,
  };
};

// remove a history
export const REMOVE_HISTORY = 'REMOVE_HISTORY';
export const actionRemoveHistory = (value) => {
  return {
    type: REMOVE_HISTORY,
    value,
  };
};

// load history (from file)
export const LOAD_HISTORY = 'LOAD_HISTORY';
export const actionLoadHistory = (value) => {
  return {
    type: LOAD_HISTORY,
    value,
  };
};

// clean cache
export const CLEAN_HISTORY_CACHE = 'CLEAN_HISTORY_CACHE';
export const actionCleanHistoryCache = () => ({
  type: CLEAN_HISTORY_CACHE,
});
