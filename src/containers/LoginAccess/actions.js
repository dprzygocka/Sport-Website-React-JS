import { LOGIN } from "../../store/actions/action"

export const login = payload => {
    return {
        type: LOGIN.SUBMIT,
        payload: payload
    }
}