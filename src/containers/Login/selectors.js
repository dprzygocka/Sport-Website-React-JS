import { createStructuredSelector } from "reselect";
import { selectIsLoggedIn } from "../../store/selectors/auth";


export default createStructuredSelector({
    isLoggedIn: selectIsLoggedIn
})