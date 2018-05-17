import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios"

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }



    render() {
        return(
            <div>
                {this.state.users.length < 1 ? (
                    alert("Access Denied")
                ) : (
                    <div>
                        {this.state.users.map(user => {
                            <div>{user}</div>
                        })}
                    </div>
                )}
            </div>
        )
    }
}

export default Users