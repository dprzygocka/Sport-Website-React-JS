import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import selectors from './selectors'
import './login.css'
import Button from '../../components/Button'

class Login extends React.Component {
    state = {
        email: ''
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div className='container'>
                <div className='login-container'>
                    <h2 className='title h2'>Login</h2>
                    <input className='input' type='email' value={this.state.email} onChange={e => this.handleChange(e)}></input>
                    <Button typeof='submit' placeholder='Submit' onClick={() => this.props.login(this.state.email)} style={{ marginTop: '15px' }} />
                </div>
            </div>
        )
    }
}

export default connect(selectors, actions)(Login)