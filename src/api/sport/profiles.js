import request from "../../utils/request"

export const getProfile = user_email => {
    return request(`http://localhost:8181/api/profiles/user/${user_email}`, {
        method: 'get'
    }
    )
}