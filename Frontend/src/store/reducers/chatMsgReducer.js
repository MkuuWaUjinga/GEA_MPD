
const initState = {
    
        chatRoomId: 'OkpVwXgZ4CM5MHVIR6q0NvSey4uN2Dn4',
        chatMessages: [
            {
            chatMessageId: '2020-01-06:17:40:11#E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN',
            userId: 'E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN',
            message: 'Hi John'
            },
            {
            chatMessageId: '2020-01-06:17:40:11#E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN',
            userId: 'E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN',
            message: 'Hi Vet, how are you?'
            },
        ]

}


const chatMsgReducer = (state = initState, action) => {
            return state;
        
}

export default chatMsgReducer