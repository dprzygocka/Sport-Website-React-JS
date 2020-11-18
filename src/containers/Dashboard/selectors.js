import { createStructuredSelector } from "reselect";
import * as _ from 'lodash'
import { selectTeams } from "../../store/selectors/teams";


export default createStructuredSelector({
    teams: selectTeams
})