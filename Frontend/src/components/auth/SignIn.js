import React, {Component} from 'react';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }


    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value //we have 2 fields that use handleChange method, thats why we need to differentiate by asking for the id (either we update email or password state) -> save value of input in state variable
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault(); //if eg users presses enter, we dont want that
        console.log(this.state);
    }




    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Sign In </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;