import React, { Component } from 'react'
import Router from 'next/router'

class Auth extends Component {
  constructor(props){
    super(props);
  }
  static getDerivedStateFromProps =(props, state) =>{
    console.log(props)
     if(props && !props.isloggedin){
      // Router.push('/')
        // props.router.push('/')
     }
    return null
  }  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Auth
