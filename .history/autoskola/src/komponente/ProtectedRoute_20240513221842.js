import React from 'react'

function ProtectedRoute(props){

    if(localStorage.getItem('token')){
        return props.children
    }
}

export default ProtectedRoute