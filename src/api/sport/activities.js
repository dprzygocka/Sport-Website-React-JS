import request from "../../utils/request"

export const getActivities = teamId => {
    return request(`${process.env.REACT_APP_SERVER}/activities/teamActivities/${teamId}`, 
    {
        method: 'get'
    })
}

export const createActivity = payload => {
    return request(`${process.env.REACT_APP_SERVER}/activities/`,
    {
        method: 'post',
        data: payload
    })
}