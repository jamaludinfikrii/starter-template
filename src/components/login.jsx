import React from 'react'
import { Link , Redirect} from 'react-router-dom'
import Axios from 'axios';
import {connect} from 'react-redux'
import { LoginAction } from './../2.actions/authAction'


class Login extends React.Component{
    onBtnLoginClick = () => {
    
        // var username = this.refs.username.value
        // var password = this.refs.password.value
        // var obj = {
        //     username,password
        // }
        Axios.post('http://localhost:5000/auth/login', {
            username : this.refs.username.value,
            password : this.refs.password.value
        })
        .then((res) => {
            this.props.LoginAction(res.data[0].username)
        })
        .catch((err) => console.log(err))
    }
    render(){
        if(this.props.username){
            return(
                <Redirect to='/' />
            ) 
        }
        return(
            <div className="container myBody" style={{minHeight:"600px"}}>
                <div className="row justify-content-sm-center ml-auto mr-auto mt-3" >
                    
                    <form className="border mb-3" style={{padding:"20px", borderRadius:"5%"}} ref="formLogin">
                        <fieldset>
                            
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Username</label>
                                <div className="col-sm-9">
                                <input type="text" ref="username" className="form-control" id="inputEmail" placeholder="Username" required autoFocus/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" onKeyPress={this.renderOnKeyPress} required />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="col-12">
                                 <button type="button" className="btn btn-primary" onClick={this.onBtnLoginClick} style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
                                </div>
                                    
                            </div>
                            <div className="btn my-auto"><p>Don't have Account? <Link to="/register" className="border-bottom">Sign Up!</Link></p></div>
                        </fieldset>
                    </form>
                    
                </div>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username : state.auth.username
    }
}
export default connect(mapStateToProps,{LoginAction})(Login)