import React from 'react';
import { useParams } from 'react-router-dom';
// store
import { useSelector } from 'react-redux';
// css
import './index.scss';
// comps
import HistoryCtrl from './components/HistoryCtrl';
import HistorySection from './components/HistorySection';

// single history page
function History() {
  // get current history id
  const { historyID } = useParams();
  // get data of this id
  const allHistory = useSelector((state) => state.getIn(['test', 'history']).toJS());
  let history;
  allHistory.forEach((val) => {
    // fix: different type (string, number)
    if (val.historyID === +historyID) {
      history = val;
    }
  });
  // get questions
  let fillBlankQuestions = [];
  let judgeQuestions = [];
  let selectQuestions = [];
  if (history) {
    fillBlankQuestions = history.historyQuestions.fillBlankQuestions;
    judgeQuestions = history.historyQuestions.judgeQuestions;
    selectQuestions = history.historyQuestions.selectQuestions;
  }

  return (
    <div className="history">
      <div className="history-wrapper">
        {fillBlankQuestions.length > 0 && (
          <HistorySection questions={fillBlankQuestions} questionType="fillBlank" />
        )}
        {judgeQuestions.length > 0 && (
          <HistorySection questions={judgeQuestions} questionType="judge" />
        )}
        {selectQuestions.length > 0 && (
          <HistorySection questions={selectQuestions} questionType="select" />
        )}
      </div>
      <HistoryCtrl historyID={+historyID} />
    </div>
  );
}

export default History;
