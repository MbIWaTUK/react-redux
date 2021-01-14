
import { connect } from "react-redux"
import { compose } from "redux"
import Dialogs from "./Dialogs"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"


let mapStateToProps = (state) =>{
    return {

    }
}

export default compose(
    connect(mapStateToProps),
    WithAuthRedirect
)(Dialogs)