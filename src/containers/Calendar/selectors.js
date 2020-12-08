import { createStructuredSelector } from "reselect";
import { selectActivities } from "../../store/selectors/activities";


export default createStructuredSelector({
    activities: selectActivities
})