import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// antd
import { Table, Input, Radio, Button } from 'antd';
import { CheckOutlined, CloseOutlined, RedoOutlined, LoginOutlined } from '@ant-design/icons';
// css
import './index.scss';
// exp gens
import ExpGen from '../../plugins/ExpGen';
import genQuestions from '../../plugins/genQuestions';
// store
import {
  actionAllQuestions,
  actionFillBlankQuestions,
  actionJudgeQuestions,
  actionSelectQuestions,
} from './store/actions';

// exp generator
const expGen = new ExpGen();

function Test() {
  const dispatch = useDispatch();
  // get settings data
  const { fillBlank, judge, select } = useSelector((state) =>
    state.getIn(['start', 'questionTypes']).toJS()
  );
  const questionSettings = useSelector((state) =>
    state.getIn(['start', 'questionSettings']).toJS()
  );
  // get questions
  const { fillBlankQuestions, judgeQuestions, selectQuestions } = useSelector((state) => {
    return state.get('test').toJS();
  });

  const questionsAreEmpty = !(
    fillBlankQuestions.length > 0 ||
    judgeQuestions.length > 0 ||
    selectQuestions.length > 0
  );

  // update questions when data changed
  // and if currentQuestions been reset to {}
  // it will run again to gen new questions
  useEffect(() => {
    // if question arrays are empty
    if (questionsAreEmpty) {
      (async () => {
        const rawExps = await expGen.getExpressions(fillBlank + judge + select, questionSettings);
        const questions = genQuestions(rawExps, fillBlank, judge, select, questionSettings);
        dispatch(actionAllQuestions(questions));
      })();
    }
  }, [dispatch, fillBlank, judge, questionSettings, questionsAreEmpty, select]);

  return (
    <div className="test">
      <div className="test-wrapper">
        <div className="test-section">
          <Table
            dataSource={fillBlankQuestions}
            rowKey={(record) => record.index}
            pagination={false}
            size="middle"
            tableLayout="fixed"
          >
            <Table.Column title="题目" dataIndex="exp" key="exp" align="right" width="60%" />
            <Table.Column
              title="填空"
              key="userAns"
              render={(record) => (
                <Input
                  value={record.userAns}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(actionFillBlankQuestions({ index: record.index, answer: value }));
                  }}
                />
              )}
            />
          </Table>
        </div>
        <div className="test-section">
          <Table
            dataSource={judgeQuestions}
            rowKey={(record) => record.index}
            pagination={false}
            size="middle"
            tableLayout="fixed"
          >
            <Table.Column title="题目" dataIndex="exp" key="exp" align="right" width="60%" />
            <Table.Column
              title="判断"
              key="userAns"
              render={(record) => (
                <Radio.Group
                  className="radio-group-judge"
                  optionType="button"
                  options={[
                    {
                      label: <CheckOutlined />,
                      value: true,
                    },
                    {
                      label: <CloseOutlined />,
                      value: false,
                    },
                  ]}
                  value={record.userAns}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(actionJudgeQuestions({ index: record.index, answer: value }));
                  }}
                />
              )}
            />
          </Table>
        </div>
        <div className="test-section">
          <Table
            dataSource={selectQuestions}
            rowKey={(record) => record.index}
            pagination={false}
            size="middle"
            tableLayout="fixed"
          >
            <Table.Column title="题目" dataIndex="exp" key="exp" align="right" width="60%" />
            <Table.Column
              title="选择"
              key="userAns"
              render={(record) => (
                <Radio.Group
                  options={[
                    { label: record.selections[0], value: 0 },
                    { label: record.selections[1], value: 1 },
                    { label: record.selections[2], value: 2 },
                  ]}
                  value={record.userAns}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(actionSelectQuestions({ index: record.index, answer: value }));
                  }}
                />
              )}
            />
          </Table>
        </div>
      </div>
      <div className="test-ctrl">
        <div className="crtl-wrapper">
          <Button
            size="large"
            icon={<RedoOutlined />}
            danger={true}
            onClick={() =>
              dispatch(
                actionAllQuestions({
                  fillBlankQuestions: [],
                  judgeQuestions: [],
                  selectQuestions: [],
                })
              )
            }
          />
          <Button type="primary" size="large" icon={<LoginOutlined />} />
        </div>
      </div>
    </div>
  );
}

export default Test;
