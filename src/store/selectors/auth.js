import * as _ from 'lodash'

export const selectIsLoggedIn = state => {
    return !_.isEmpty(state.profile)
};