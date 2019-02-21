import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';


const StyledLogoImage = styled.img`
    height: 50px;
`;


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleLogIn = e => {
        e.preventDefault();
        this.props.login(this.state.userName, this.state.password)
    }

    onUserNameChange = e => this.setState({ userName: e.target.value })

    onPasswordChange = e => this.setState({ password: e.target.value })

    render() {
        return (
            <div>
                <StyledLogoImage alt="instagram logo" src={IGLogo} />

                <form onSubmit={this.handleLogIn} >
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

            </div>
        );
    }
}

export default Login;