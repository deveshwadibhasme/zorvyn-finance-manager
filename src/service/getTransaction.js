import transaction from '../data/transaction.js'

export const getTransaction = async () => {
    // if we are dealing with backend api we obvios use axios or fetch
    try {
        return transaction
    } catch (error) {
        return error
    }
}