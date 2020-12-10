import request from "../../utils/request"

//Needed to create a call, 
//Otherwise there is a security error
//We need to introduce spring security to allow call only with a token
const getHeaders = () => {
    return {
        "Access-Control-Allow-Origin": "*"
    }
};

export const getActivities = (page, size, sort) => {
    return request(`http://localhost:8181/api/activities?page=${page}&size=${size}&sort=${sort}`, {
        method: 'get',
        headers: getHeaders()
    }
    )
}