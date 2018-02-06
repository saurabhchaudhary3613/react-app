
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import QuizComponent from "../components/quiz/Quiz";
import * as stateActions from "../actions/action";

const mapStateToProps = (state) => {
    return {
        errorMessage:state.mainReducer.errorMessage,
        isFetching:state.mainReducer.isFetching,
        quiz: state.mainReducer.quiz,
        isModalOpen: state.mainReducer.isModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(stateActions, dispatch),
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (QuizComponent)