import React from 'react'
import { connect } from 'react-redux'


class Home extends React.Component{
    render(){
        return(
            <div className="container">
               Ini Home, {this.props.username}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username : state.auth.username
    }
}

export default connect(mapStateToProps)(Home)