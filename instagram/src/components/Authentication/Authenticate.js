import React from 'react';

export default function authenticate(App, Login) {
    return class Authenticate extends React.Component {
        state = {
            isLoggedin: false
        }
        
        logIn = (userName, password) => {
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            this.setState({ isLoggedin: true })
        }

        logOut = () => {
            localStorage.clear();
            this.setState({ isLoggedin: false })
        }

        componentDidUpdate() { // runs every time the state HERE updates
            console.log('start of compontent did update')
            const checkIfLoggedIn = !!localStorage.getItem('userName') && !!localStorage.getItem('password');
            if (checkIfLoggedIn !== this.state.isLoggedin) {
                this.setState({ isLoggedin: checkIfLoggedIn })
            }
        }

        componentDidMount() { // runs the first time it mounts to the page. Either App or Login mounts on update.
            console.log('start of compontent did mount')
            const checkIfLoggedIn = !!localStorage.getItem('userName') && !!localStorage.getItem('password');
            this.setState({ isLoggedin: checkIfLoggedIn })
        }

        render() {
            if (localStorage.getItem('userName') && localStorage.getItem('password')) {
                return <App logout={this.logOut} />;
            }
            return <Login login={this.logIn} />;

        }
    };
}
