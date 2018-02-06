import React from 'react';
import _ from 'lodash'

const QuizTemplate = (props) => {

  return (
        <article>
            <div className="que-container">
                <div>
                    <section className="que-number">{props.questionItem.qNo}</section>
                    <section className="que-text">{props.questionItem.question}</section>
                </div>
            </div>
            <div className="que-options">
                <ul>
                    {
                        _.map(props.questionItem.answers, (answer, index) => (
                            <li key={ index+'_3'}>
                                <input type="radio" /><span>{answer}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
            
  );

}

export default QuizTemplate;