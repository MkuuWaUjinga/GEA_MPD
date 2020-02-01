export const ADD_TASK = "ADD_CHAT_MESSAGE";

export const addChatMessage = (newMessage) => {
    return {
        type: 'ADD_CHAT_MESSAGE',
        payload: newMessage
    }
}