import request from "../../utils/request"

const getHeaders = () => {
    return {
        "Access-Control-Allow-Origin": "*"
    }
};

export const getUser = user_id => {
    return request(`http://localhost:8181/api/profiles/user/${user_id}`, {
        method: 'get',
        headers: getHeaders()
    }
    )
}