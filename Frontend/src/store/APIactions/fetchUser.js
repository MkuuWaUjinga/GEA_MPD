export const FETCH_USER = "FETCH_USER";

export const fetchUser = () => {
    return (dispatch) => {
        fetch(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/users/E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN`)
            .then(res => res.json())
            .then(user => {
                dispatch({
                    type: FETCH_USER,
                    spocs: user.user.spocs,
                    notifications: user.user.notifications,
                    firstName: user.user.firstName,
                    lastName: user.user.lastName,
                    userId: user.user.userId,
                    email: user.user.email,
                    number: user.user.number
                })
            })
    }
}