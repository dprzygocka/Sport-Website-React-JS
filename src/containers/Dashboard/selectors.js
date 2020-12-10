import { createStructuredSelector } from "reselect";
import * as _ from 'lodash'
//import { getActivities } from "../../store/selectors/activities";
import { getActivities } from "../../api/sport/activities";

export default createStructuredSelector({
    activities: getActivities
})