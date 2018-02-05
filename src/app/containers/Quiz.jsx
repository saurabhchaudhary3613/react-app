
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import QuizComponent from "../components/Quiz";
//import * as authActions from "../auth/Actions";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (QuizComponent)