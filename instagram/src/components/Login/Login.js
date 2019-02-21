import React from 'react';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        };
    }

    logIn = () => {
        localStorage.setItem('userName', this.state.userName);
        this.setState({ userName: '' });
        localStorage.setItem('password', this.state.password);
        this.setState({ password: '' });
    }

    onUserNameChange = e => this.setState({ userName: e.target.value })

    onPasswordChange = e => this.setState({ password: e.target.value })

    render() {
        return (
            <form onSubmit={this.logIn} >
                <input
                    onChange={this.onUserNameChange}
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    placeholder="Username... "
                />
                <input
                    onChange={this.onPasswordChange}
                    type="text"
                    name="password"
                    value={this.state.password}
                    placeholder="Password... "
                />
                <input
                    type="submit"
                    value="Login"
                />
            </form>
        );
    }
}

export default Login;