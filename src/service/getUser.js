import user from '../data/user.js'


export const getUser = async () => {
    try {
        return user
    } catch (error) {
        return error
    }
}