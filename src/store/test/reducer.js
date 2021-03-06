import { fromJS } from 'immutable';
import {
  SAVE_ALL_QUESTIONS,
  UPDATE_ALL_QUESTIONS,
  UPDATE_FILL_BLANK_QUESTIONS,
  UPDATE_JUDGE_QUESTIONS,
  UPDATE_SELECT_QUESTIONS,
  REMOVE_HISTORY,
  LOAD_HISTORY,
  CLEAN_HISTORY_CACHE,
} from './actions';
// dayjs
import * as dayjs from 'dayjs';
// ls
import LocalStorage from '../../plugins/LocalStorage';
const ls = new LocalStorage();

const defaultState = fromJS({
  fillBlankQuestions: [],
  judgeQuestions: [],
  selectQuestions: [],
  history: [],
});

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update all questions
    case UPDATE_ALL_QUESTIONS: {
      if (action.value) {
        return prevState
          .set('fillBlankQuestions', fromJS(action.value.fillBlankQuestions))
          .set('judgeQuestions', fromJS(action.value.judgeQuestions))
          .set('selectQuestions', fromJS(action.value.selectQuestions));
      } else {
        // reset but not history
        return prevState
          .set('fillBlankQuestions', fromJS([]))
          .set('judgeQuestions', fromJS([]))
          .set('selectQuestions', fromJS([]));
      }
    }
    // update fill blank questions { index, answer }
    case UPDATE_FILL_BLANK_QUESTIONS: {
      const { index, answer } = action.value;
      const oldList = prevState.get('fillBlankQuestions');
      const newList = oldList.set(index, oldList.get(index).set('userAns', answer));
      return prevState.set('fillBlankQuestions', newList);
    }
    // update judge questions { index, answer }
    case UPDATE_JUDGE_QUESTIONS: {
      const { index, answer } = action.value;
      const oldList = prevState.get('judgeQuestions');
      const newList = oldList.set(index, oldList.get(index).set('userAns', answer));
      return prevState.set('judgeQuestions', newList);
    }
    // update select questions { index, answer }
    case UPDATE_SELECT_QUESTIONS: {
      const { index, answer } = action.value;
      const oldList = prevState.get('selectQuestions');
      const newList = oldList.set(index, oldList.get(index).set('userAns', answer));
      return prevState.set('selectQuestions', newList);
    }
    case SAVE_ALL_QUESTIONS: {
      const oldList = prevState.get('history');
      // gen new history, generate a id
      let maxID = 0;
      if (oldList.toJS().length > 0) {
        oldList.forEach((val) => {
          val.get('historyID') > maxID && (maxID = val.get('historyID'));
        });
      } else {
        maxID = -1;
      }
      const newHistory = {
        historyID: maxID + 1,
        historyQuestions: {
          fillBlankQuestions: prevState.get('fillBlankQuestions').toJS(),
          judgeQuestions: prevState.get('judgeQuestions').toJS(),
          selectQuestions: prevState.get('selectQuestions').toJS(),
        },
        date: dayjs().toJSON(),
        correctRate: '',
      };
      // check answers
      let allQuestions = 0;
      let correctQuestions = 0;
      Object.keys(newHistory.historyQuestions).forEach((key) => {
        newHistory.historyQuestions[key].forEach((question) => {
          allQuestions++;
          question.status = question.ans === question.userAns;
          question.status && correctQuestions++;
        });
      });
      newHistory.correctRate = ((correctQuestions / allQuestions) * 100).toFixed(0) + '%';
      // add a history
      const newList = oldList.push(fromJS(newHistory));
      ls.save('history', newList.toJS());
      return prevState.set('history', newList);
    }
    // remove a history p: historyID
    case REMOVE_HISTORY: {
      const oldList = prevState.get('history').toJS();
      // find history id's index
      let index = -1;
      oldList.forEach((val, i) => {
        if (action.value === val.historyID) {
          index = i;
        }
      });
      if (index >= 0) {
        oldList.splice(index, 1);
        const newList = fromJS(oldList);
        ls.save('history', newList.toJS());
        return prevState.set('history', newList);
      } else {
        return prevState;
      }
    }
    case LOAD_HISTORY: {
      const newList = fromJS(action.value);
      ls.save('history', newList.toJS());
      return prevState.set('history', newList);
    }
    case CLEAN_HISTORY_CACHE: {
      ls.save('history', null);
      return defaultState;
    }
    // first init
    default: {
      const newState = prevState;
      const lsHistory = ls.load('history');
      if (lsHistory) {
        // load from storage
        return newState.set('history', fromJS(lsHistory));
      } else {
        // init data
        return newState;
      }
    }
  }
};

export default reducer;
