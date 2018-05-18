import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios"
import "../Users/Users.css"
class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount = event => {
        const token = localStorage.getItem('token');
        const authtoken = `${token}`;

        const requestOptions = {
            headers: {
                Authorization: authtoken,
            }
        }

        axios.get("http://localhost:5000/api/users", requestOptions)
        .then(response => {
            console.log("users", response)
            this.setState({
                users: response.data
            });
        }).catch(err => {
            this.props.history.push('/login')
        })
    }



    render() {
        return(
            <div>
                {this.state.users.length < 1 ? (
                    <h1>access denied</h1>
                ) : (
                    <ul>
                        {this.state.users.map(user => <li key={user._id}>{user.username}</li>)}
                    </ul>
                )}
            </div>
        )
    }
}

export default Users