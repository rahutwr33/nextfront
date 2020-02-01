import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as auth from '../../store/actions/auth'
import { toast } from 'react-toastify'
import dynamic from 'next/dynamic'
import cookies from 'js-cookie'
import Router from 'next/router'
// import Auth from '../../authmiddleware'
import Layout from '../../components/Layout'
 class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
       data : {},
       errors: {},
       metas:{}
    };
  }
  
    componentDidMount(){
        this._getprofile()
    }

   

    _getprofile=()=>{
        this.props.checkauth().then(res=>{
          if(res['data']){
             this.setState({data : res['data']['data']}) 
          }else{
            toast.error('Something went wrong!')
          }
        })
      }
    logout = ()=>{
        cookies.remove('token');
        this.props.logout().then(()=>{
          Router.push('/')
        })
    }
    render() {
      console.log(this.props)
        return (
          <Layout title="Descriptions" {...this.props} >
              <div>
                <h3>Dashboard</h3><span>User:-{this.state.data.email || ''}</span>
                <button onClick={()=>this.logout()}>Logout</button>
                
              </div>
          </Layout>
        )
    }
}

Dashboard.getInitialProps = async ({ Component, ctx })=> {
  let pageProps = {};
  if (Component.getInitialProps)
    pageProps = await Component.getInitialProps(ctx);
  return { pageProps };
}
function mapStateToProps (state) {
  const { isloggedin } = state.auth
  return { isloggedin }
}


export default connect(mapStateToProps,auth)(Dashboard)
