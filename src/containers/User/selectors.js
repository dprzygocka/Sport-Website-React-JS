import { createStructuredSelector } from "reselect";
import * as _ from 'lodash'
import { selectUser } from "../../store/selectors/user";


export default createStructuredSelector({
    user: selectUser
})