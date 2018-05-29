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

    // handleKeyPress = (e) => {
    //     if(e.key === 'Enter' || e.charCode === 13 || e.keyCode === 13){
    //         this.handleFormSubmit();
    //     }
    //   }


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
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        if(user.username.length < 1 || user.password
        .length < 1) {
            alert('Please fill out both username and password');
            return;
        }

        axios.post("https://noteslambda.herokuapp.com/users/login", user)
        .then(response => {
            alert("Logging in")
            this.props.history.push('/home')
        }).catch(err => {
            console.log(err);
            alert('No user exists'); 
            this.props.history.push('/signup')
        })
    }



    render() {
        return(
            <div className="body">
                <div className="container">
                    <div className="register--header">
                        <h2>Login</h2>
                    </div>

                    <div className="form">
                        <form onSubmit={this.handleFormSubmit}>
                            <input onChange={this.handleInputChange}  type="text" name="username" placeholder="Username:"/>
                            <input onChange={this.handleInputChange} onClick={this.handleKeyPress}  type={this.state.type} name="password" placeholder="Password:"/>

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