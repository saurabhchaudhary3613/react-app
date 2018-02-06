import React from "react";
import PropTypes from "prop-types";
import Modal from '../common/modal';
import _ from "lodash"
import QuizTemplate from "./QuizTemplate"



export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.submitQuestionData = this.submitQuestionData.bind(this);
    }
    
    componentDidMount() {
        this.props.actions.getDataRequest();
    }

    onCloseModal() {
        const { actions } = this.props;
        actions.closeModal();
    }

    submitQuestionData() {
        const { actions } = this.props;
        let payloadObj = {
            answer: [
            ]
        }
        actions.submitDataRequest(payloadObj);
    }

    render() {
        const {
            actions, 
            quiz,
            isModalOpen
        } = this.props

        return (
                
            <div className="container-fluid">
                    <header className="quiz-header"><div className="text">General Knowledge</div></header>
                    <main className="main-container">
                        {quiz.length > 0 && 
                            _.map(quiz, (item, index) => (
                                <QuizTemplate 
                                    key={ index + '_2' } 
                                    actions={ actions }
                                    questionItem={ item }
                                    onClose={ this.onClose }
                                />
                            ))
                        }
                        <div className="submit-btn-container">
                            <button type='submit' className='btn btn-primary' onClick={ this.submitQuestionData }>Submit</button>
                        </div>
                    </main>
                    <Modal isOpen={ isModalOpen } onClose={ this.onCloseModal } />
                </div>
            
        )
    }
} 

Quiz.propTypes = {
    actions: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
};