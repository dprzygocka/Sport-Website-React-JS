import request from "../../utils/request"

export const getActivities = teamId => {
    return request(`http://localhost:8181/api/activities/teamActivities/${teamId}`, 
    {
        method: 'get'
    })
}

export const createActivity = payload => {
    return request('http://localhost:8181/api/activities/',
    {
        method: 'post',
        data: payload
    })
}