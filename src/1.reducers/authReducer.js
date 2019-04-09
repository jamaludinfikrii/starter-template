const INITIAL_STATE = {username : '', email : '', password : ''}

export default (state=INITIAL_STATE , action) => {
    // switch(action.type){
    //     case 'LOGIN_SUCCESS' :
    //         var {username,email,password} = action.payload
    //         return {...INITIAL_STATE , username,email,password}
    //     default :
    //         return state
    // }

    if(action.type == 'LOGIN_SUCCESS'){
        var {username,email,password} = action.payload
        return {...INITIAL_STATE , username,email,password}
    }else if(action.type == 'LOGIN_SUCCESS_USERNAME'){
        return {...INITIAL_STATE , username: action.payload}
    }
    else{
        return state
    }
}