import * as _ from 'lodash'

export const selectIsLoggedIn = state => {
    return !_.isEmpty(state.profile)
};

export const selectUserId = state => {
    return _.get(state, 'profile.userId')
}

export const selectUsersTeamId = state => {
    return _.get(state, 'profile.team.teamId')
}