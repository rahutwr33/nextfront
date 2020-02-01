import React from 'react'
import Head from './head'
import Nav from './nav'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {connect} from 'react-redux'
import * as auth from '../store/actions/auth'

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state={
      metas:{}
    }
  }
  
 
  render() {
    return (
      <React.Fragment >
        <Nav {...this.props}/>
        {this.props.children}
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  const { login,isloggedin } = state.auth
  return { ...login ,...isloggedin }
}
// Layout.getInitialProps(){
//   const response = await this.props.getmetaData();
//   console.log(response)
//  return {
//   metas : response['data']
//  }
// }

export default connect(mapStateToProps,auth)(Layout)


