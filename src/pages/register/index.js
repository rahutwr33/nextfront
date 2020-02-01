import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import {Input, InputLabel } from "@material-ui/core";
import { FormControl, FormHelperText } from "@material-ui/core";
import Link from 'next/link'
import Layout from '../../components/Layout';
import validators from '../../utils/validators';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import COLORS from "../../style/colors";
import * as auth from '../../store/actions/auth'
import { toast } from 'react-toastify';
import Router from 'next/router'

const styles = theme => ({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "20px",
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  container: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: '25px',
      marginBottom: '25px'
    },
    textField: {
      width: "100%"
    },
    formControl: {
      width: "100%",
      margin: "10px 0px"
    },
    
    loginHeader: {
      color: "#fff",
      fontSize: "34px",
      fontWeight: "bold",
      padding: "50px 0",
      textAlign: "center",
      backgroundColor: COLORS.lightBlue,
      margin: "-20px"
    },
    loginHead: {
      display: "block",
      backgroundColor: COLORS.lightBlue,
      borderRadius: "50%",
      color: "#FFF",
      width: "80px",
      height: "80px",
      fontSize: "50px",
      margin: "0 auto",
      border: "6px solid #ddd"
    },
    loginButton: {
      width: "100%",
      color: "#FFF",
      backgroundColor: COLORS.lightBlue,
      "&:hover": {
        backgroundColor: "#299bf1"
      }
    },
    inputLabelFocused: {
      color: COLORS.lightBlue
    },
    inputInkbar: {
      "&:after": {
        backgroundColor: COLORS.lightBlue
      }
    },
    inputInkbarError: {
      "&:after": {
        backgroundColor: COLORS.red
      }
    }
});

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fullname:'',
      email: "",
      password: "",
      errors: {}
    };
  }
  getInitialProps = async ({ Component, ctx })=> {
    // await handleAuthSSR(ctx)
    console.log(999999999)
    return {}
  }


  _register=()=>{
    let obj={
      fullname:this.state.fullname,
      email: this.state.email,
      password: this.state.password,
    }
    this.props.register(obj).then(res=>{
      if(res){
        toast(res['message']);
        Router.push('/login')
      }
    }).catch(err=>{
      toast('Something went wrong!');
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout title="Register" >
        <div className={classes.loginContainer}>
       <Paper style={{ padding: "20px", maxWidth: "400px",backgroundColor: '#dddddd', }} elevation={0}>
          <div className={classes.loginHeader}>itTaxi Resellers</div>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="fullname">
                  Full Name
                  </InputLabel>
                  <Input 
                  id="fullname" 
                  type="text" 
                  label="Full Name" 
                  placeholder="Full Name" 
                  onChange={(e)=>this.setState({fullname:e.target.value})} 
                  
                  />
              </FormControl>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="email">
                      Email
                  </InputLabel>
                  <Input 
                  id="email" 
                  type="email" 
                  label="Email" 
                  placeholder="Email" 
                  onChange={(e)=>this.setState({email:e.target.value})} 
                  
                  />
              </FormControl>
              <FormControl className={classes.formControl} error={this.state.errors.password !=null}>
                  <InputLabel htmlFor="password">
                      Password
                  </InputLabel>
                  <Input 
                      id="password" 
                      type="password" 
                      label="Password" 
                      onChange={(e)=>this.setState({password:e.target.value})} 
                      placeholder="Password" 
                      className={classes.inputInkbar}
                      />
                      {this.state.errors.email && (
                      <FormHelperText id="password-error-text">
                        {this.state.errors.password}
                      </FormHelperText>
                    )}
              </FormControl>
          </form>
          <Button onClick={()=>this._register()}  raised="true" className={classes.loginButton} >
          <i className="fa fa-lock" />
          &nbsp;&nbsp;&nbsp;Authentication
          </Button>
          <br />
          <br />
          <div>
            Already have an account?
              <Link href="/login"><a  href="/login">Login</a></Link>
          </div>
      </Paper>
      </div>
    </Layout>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps (state) {
  const { register } = state.auth
  return { register }
}

export default connect(mapStateToProps,auth)(withStyles(styles)(Register))
