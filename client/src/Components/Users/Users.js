import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Users extends React.Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => <li key={user._id}> {user.username}</li>)}
        </ul>
        <div>
          <Link to='/'>
            <button OnClick={this.signout}>Sign Out</button>
          </Link>
        </div>
      </div>
    );
  }

  componentDidMount = event => {
    const token = localStorage.getItem("token");
    const authToken = `${token}`;
    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };
    axios
      .get("http://localhost:5000/api/users", requestOptions)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        // console.log("wheres ma token");
        this.props.history.push("/");
      });
  };
}

export default Users;
