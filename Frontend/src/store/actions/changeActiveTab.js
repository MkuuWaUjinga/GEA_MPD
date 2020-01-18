export const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB";

export const changeActiveTab = (newTab) => {
    return {
        type: 'CHANGE_ACTIVE_TAB',
        payload: newTab
    }
}