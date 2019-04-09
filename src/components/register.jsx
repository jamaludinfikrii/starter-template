import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Register extends React.Component{
    state = {error : ''}
    onBtnRegister = () => {
        if(this.refs.username.value && this.refs.password.value && this.refs.email.value){
            var newData = {
                username : this.refs.username.value,
                password : this.refs.password.value,
                email : this.refs.email.value,
            }
            alert('masuk')
            axios.post('http://localhost:5000/auth/register',newData)
            .then((res) => 
                {
                    if(res.data.error)
                    {
                        this.setState({error : res.data.msg })
                    }
                    else
                    {
                        alert(res.data)
                    }
                }   
            )
            .catch((err) => console.log(err))

        }else{
            this.setState({error : 'semua form harus diisi'})
        }
      

        
    }

    render(){
        return(
            <div className="container myBody " style={{minHeight:"600px"}}>
                    <div className="row justify-content-sm-center ml-auto mr-auto mt-3">
                        
                        <form className="border mb-3" style={{padding:"20px", borderRadius:"5%"}} ref="formLogin">
                            <fieldset>
                                
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Username</label>
                                    <div className="col-sm-9">
                                    <input type="text" ref="username" className="form-control" id="inputUsername" placeholder="Username" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                    <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                    <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email@mail.com" required />
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <div className="col-12">
                                    <button type="button"  onClick={this.onBtnRegister}   className="btn btn-primary" style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Sign Up!</button>
                                   { this.state.error ?  <div class="alert alert-danger mt-3" role="alert">
                                     {this.state.error}
                                    </div>   : null    }
                                    </div>
                                        
                                </div>
                                <div className="btn my-auto"><p>Already have Account? <Link to="/login" className="border-bottom">Login</Link></p></div>
                                
                            </fieldset>
                        </form>
                        
                    </div>                
                </div>
        )
    }
}

export default Register