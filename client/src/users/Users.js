import React from 'react';
import axios from 'axios';
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    };
    componentDidMount = () => {
        const token = localStorage.getItem('token');

        const options = {
            headers: {
                Authorization: token,
            },
        };
        axios
            .get('http://localhost:5000/api/users', options)
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => {
                console.log('Error fetching users', err);
                this.props.history.push('/signin');
            })
    }

    render() {
        return (
            <div>
                {/* <h2>Welcome to the Users Home Page</h2> */}
                {this.state.users.map((user, i) => <li key={user + i}>{user.username}</li>)}
            </div>
        )
    }
};

export default Users;