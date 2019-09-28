import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeHandler = event => {
        
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <input name="email" type="text" placeholder="email" />
                        <input name="password" type="password" placeholder="password" />
                    </div>
                </div>
            </div>
        )
    }
}
