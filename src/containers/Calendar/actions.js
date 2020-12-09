import { ACTIVITIES } from "../../store/actions/action";

export const onInit = () => {
    return {
        type: ACTIVITIES.INIT
    }
}

export const createActivity = data => {
    return {
        type: ACTIVITIES.ADD,
        payload: data
    }
}