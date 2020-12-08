import request from "../../utils/request"

export const getActivities = () => {
    return request('http://localhost:8181/api/activities/teamActivities/1', 
    {
        method: 'get'
    })
}