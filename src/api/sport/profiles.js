import request from "../../utils/request"

export const getProfile = user_email => {
    return request(`${process.env.REACT_APP_SERVER}/profiles/user/${user_email}`, {
        method: 'get'
    }
    )
}