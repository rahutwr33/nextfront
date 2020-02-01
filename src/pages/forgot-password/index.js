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

import COLORS from "../../style/colors";

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
class ForgotPassword extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  login = () => {
    let isValid = this.validate();
  };

  validate = () => {
    let errors = {};

    if (validators.isEmptyString(this.state.email)) {
      errors.email = "Campo obbligatorio";
    }else if (!validators.isValidEmail(this.state.email)) {
      errors.email = "Invalid email";
    }

    if (validators.isEmptyString(this.state.password)) {
      errors.password = "Invalid password";
    }

    this.setState({ errors: errors });
    return Object.keys(errors).length === 0;
  };

  handleChange = (event, fieldName) => {
    let errors = this.state.errors;
    delete errors[fieldName];
    this.setState({ [fieldName]: event.target.value, errors: errors });
  };

  handleChangeEmail = e => {
    this.handleChange(e, "email");
  };

  handleChangePassword = e => {
    this.handleChange(e, "password");
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout title="Forgot Password"  description="Reset Password there">
        <div className={classes.loginContainer}>
       <Paper style={{ padding: "20px", maxWidth: "400px",backgroundColor: '#dddddd', }} elevation={0}>
          <div className={classes.loginHeader}>itTaxi Resellers</div>
          <form className={classes.container}>
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="email">
                      Email
                  </InputLabel>
                  <Input 
                  id="email" 
                  type="email" 
                  label="Email" 
                  placeholder="Email" 
                  onChange={this.handleChangeEmail} 
                  
                  />
              </FormControl>
          </form>
          <Button raised="true" className={classes.loginButton} onClick={this.login}>
          <i className="fa fa-lock" />
          &nbsp;&nbsp;&nbsp;Reset PasswordZ
          </Button>
          <div>
              <Link href="/login"><a href="/register">Login</a></Link>
          </div>
      </Paper>
      </div>
    </Layout>
    );
  }
}
ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(ForgotPassword);