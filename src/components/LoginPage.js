import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/loginActions';

class LoginPage extends Component {

    constructor(context,props) {
        super(context,props);
        this.state = {
            username: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
        this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);

    }

    onChange(event) {
        event.preventDefault();
        if (event.target.name === 'username') {
            this.setState({ username: event.target.value });
        }
        if (event.target.name === 'password') {
            this.setState({ password: event.target.value });
        }
    }

    onLoginButtonClick(event) {
       event.preventDefault();
       this.props.actions.doLogin(this.state.username,this.state.password);
    }
    onRegisterButtonClick(event) {
        event.preventDefault();
        this.props.actions.registerUser(this.state.username,this.state.password);
    }

    render() {
        return (
            <div>
                {this.props.user}
            <label>Who are you:</label>
            <input type="text"  name="username" value={this.state.username} onChange={this.onChange} />
            <label>Password:</label>
            <input type="text"  name="password" value={this.state.password} onChange={this.onChange} />
            <button onClick={this.onLoginButtonClick}> Login </button>
            <button onClick={this.onRegisterButtonClick}> Register </button>

            </div>
        )
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object,
    user: PropTypes.string,
}

function mapStateToProps(state) {
    return {
      user: state.loggedUser
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);
  