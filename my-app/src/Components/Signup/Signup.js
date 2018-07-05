import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios"
import "../Signup/Signup.css"
class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            type: "password"
        }
    }

    showPassword() {
        if(this.state.type === "password") {
            this.setState({
                type: "text"
            })
        } else {
            this.setState({
                type: "password"
            })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        if(newUser.username.length < 1 || newUser.password
        .length < 1) {
            alert('Please fill out both username and password');
            return;
        }

        axios.post("http://localhost:5000/api/register", newUser)
        .then(success => {
            console.log("signup", success)
            alert("User posted");
            this.props.history.push('/login')

        }).catch(err => {
            console.log(err);
            alert('failed to make new user'); 
            this.props.history.push('/signup')
        })
    }



    render() {
        return(
            <div className="body">
                <div className="container">
                    <div className="register--header">
                        <h2>Fill out the form below</h2>
                    </div>

                    <div className="form">
                        <form onSubmit={this.handleFormSubmit}>
                            <input onChange={this.handleInputChange}  type="text" name="username" placeholder="Username:"/>
                            <input onChange={this.handleInputChange}  type={this.state.type} name="password" placeholder="Password:"/>

                            <div className="register--checkbox">
                                <input onClick={() => {
                                    this.showPassword()
                                }} type="checkbox"/>
                                <p>Show password</p>
                            </div>
                            
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup