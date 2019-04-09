import React from 'react'
import queryString from 'query-string'
import Axios from 'axios';


class Verify extends React.Component{
    componentDidMount(){
        this.verification()
    }

    verification = () => {
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        Axios.put('http://localhost:5000/auth/verify' , 
        {
            username : params.username,
            password : params.password
        })
        .then((res) => alert(res.data))
        .catch((err) => console.log(err))
        // Get data username dan password dari URL
        // Jalanin axios.post menuju link api verifikasi
        
    }
    render(){
        return(
            <div className="container">
               Email Berhasil di verifikasi, silahkan login kembali
            </div>
        )
    }
}

export default Verify