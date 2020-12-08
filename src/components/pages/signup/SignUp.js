import React from "react"
import Form from "./Form"
import "./SignUp.css"

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            users: [
                {
                    firstName: [],
                    lastName: [],
                    email: [],
                    age: []
                }

            ]
        }
    }

    createUser = event => {
        event.preventDefault();
        let newUser = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            age: event.target.age.value
        }
        let currentUsers = this.state.users;
        currentUsers.push(newUser);
        this.setState({
            users: currentUsers
        })
    }
    render() {
        return (
            <div>
                <Form createUser={this.createUser} /> {
                    this.state.users.map((user) =>  {
                    return(
                <h2 key={user.index}>
                            firstName: {user.fristName}
                            lastName: {user.lastName}
                       </h2>
            
                
                    )
                    })
                }
        
        
            </div>
            
            
            
        )
    }
}

export default SignUp;