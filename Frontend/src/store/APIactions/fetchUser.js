export const FETCH_USER = "FETCH_USER";

export const fetchUser = () => {
    return (dispatch) => {
        fetch(`https://3f4bvj6fub.execute-api.eu-central-1.amazonaws.com/dev/users/E6XrsXoB7oQhwlnL97VrlbECk9iaIXMN`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_USER,
                    spocs: res.user.spocs,
                    notifications: res.user.notifications,
                    firstName: res.user.firstName,
                    lastName: res.user.lastName,
                    userId: res.user.userId,
                    email: res.user.email,
                    number: res.user.number
                })
            })
    }
}