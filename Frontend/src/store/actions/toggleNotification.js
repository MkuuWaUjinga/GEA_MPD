export const TOGGLE_NOTIFICATION = "TOGGLE_NOTIFICATION";

export const toggleNotification = (boolean) => {
    return {
        type: 'TOGGLE_NOTIFICATION',
        payload: boolean
    }
}