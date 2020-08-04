import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import {signIn} from "../api"

function Signin({signIn, history, userData: {loading, user, error}}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const user = {email, password}
        signIn(user, history)
        setEmail('')
        setPassword('')
    }

    const handleClick = () => (
        <Link to='/dashboard'/>
    )

    return (
        <div className='text-center bg-dark'>
            <div className="container">
                <div className="row justify-content-center" style={{height: '100vh'}}>
                    <div className="col-sm-5">
                        <div className="card login-card">
                            <div className="card-body">
                                <p>Signin as Admin</p>
                                <form onSubmit={handleSubmit}>
                                    <input type="email" className="form-control" placeholder='Email' name='email'
                                           value={email} onChange={e => setEmail(e.target.value)}/>
                                    <br/>
                                    <input type="password" className="form-control" placeholder='Password'
                                           value={password} name='password'
                                           onChange={e => setPassword(e.target.value)}/>
                                    <br/>
                                    <button type='submit' className="btn btn-success form-control"
                                            onClick={handleClick} disabled={loading}>Signin
                                    </button>
                                    {loading && (
                                        <div className='spinner-border text-center m-2' role='status'/>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.userData
})

const mapActionsToProps = dispatch => ({
    signIn: (user, history) => dispatch(signIn(user, history))
})

export default connect(mapStateToProps, mapActionsToProps)(Signin)
