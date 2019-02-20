import React from 'react';

export default function authenticate(App, Login) {
    return class Authenticate extends React.Component {
        // logIn = () => {
        //     localStorage.setItem('isAuthed', 'true');
        //     this.setState({ isAuthed: true });
        // }

        // logOut = () => {
        //     localStorage.clear('isAuthed');
        //     this.setState({ isAuthed: false });
        // }

        // componentDidMount() {
        //     const isAuthed = !!localStorage.getItem('isAuthed');
        //     this.setState({ isAuthed });
        // }

        // componentDidUpdate() {
        //     const isAuthed = !!localStorage.getItem('isAuthed');
        //     if (this.state.isAuthed !== isAuthed) {
        //         this.setState({ isAuthed });
        //     }
        // }

        render() {
            if (localStorage.getItem('userName') && localStorage.getItem('password')) {
                return <App />;
            }
            return <Login />;
        }
    };
}
