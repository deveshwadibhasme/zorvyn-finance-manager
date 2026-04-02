import user from '../data/user.js'


export const getUser = async () => {
    // if we are dealing with backend api we obvios use axios or fetch
    try {
        return user
    } catch (error) {
        return error
    }
}