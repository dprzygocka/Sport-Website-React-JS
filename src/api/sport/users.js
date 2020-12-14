import request from "../../utils/request"

const getHeaders = () => {
    return {
        "Access-Control-Allow-Origin": "*"
    }
};

export const getUser = user_id => {
    return request(`${process.env.REACT_APP_SERVER}/profiles/user/${user_id}`, {
        method: 'get',
        headers: getHeaders()
    }
    )
}