import React from "react";
import "./SignUp.css"


function Form(props) {
    return (
        <form onSubmit = {props.createUser}>
          <fieldset className="signUp">
            <legend>Create an Account</legend>
            <label >
                First Name: 
                <input
                    type="text" placeHolder="firstname"
                    id="firstName"
                />
                 
            </label><br /> <br />
            <label>
                Last Name:
                <input
                    type="text"
                    placeHolder="lastname"
                    id="lastName"
                />

            </label> <br /> <br />
             <label >
                Email:
                <input
                    type="text"
                    placeHolder="email"
                    id="email"
                />

            </label> <br /><br />
            <label >
                Age:
                 <input
                    type="text"
                    placeHolder="Age"
                    id="age"
                />
                </label> <br /><br />
                <button type= "Submit" id= "button">Sign Up</button>
            </fieldset>
        </form>
    )
}


export default Form;

