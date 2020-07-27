import React from 'react';
import CustomInput from '../../../CustomInput';
import './CustomForm.scss';

class CustomForm extends React.Component {
  state = {
    name: '',
    user: '',
    password: '',
    errors: {},
    isFormInvalid: false,
  };

  resetForm = () =>
    this.setState({
      name: '',
      user: '',
      password: '',
      errors: {},
      isFormInvalid: false,
    });

  validate = () => {
    const { isSignIn } = this.props;
    const { user } = this.state;
    const newErrors = {};
    const checkEmpty = (...fieldsName) => {
      for (let field of fieldsName) {
        if (!this.state[field]) newErrors[field] = true;
      }
    };

    const validateEmail = (text) => {
      // regular expression to validate email
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(text).toLowerCase());
    };
    if (isSignIn) {
      checkEmpty('user', 'password');
    } else {
      checkEmpty('name', 'user', 'password');
    }

    if (!newErrors['user'] && user.includes('@')) {
      if (!validateEmail(user)) {
        newErrors.email = true;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      this.setState({ errors: newErrors, isFormInvalid: true });
      return false;
    } else {
      this.setState({ errors: {}, isFormInvalid: false });
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      if (this.props.isSignIn) {
        alert('Execute: Sign In');
      } else {
        alert('Execute: Sign up');
      }
    }
  };

  handleInputChange = (name, value) => this.setState({ [name]: value });

  render() {
    const { isSignIn } = this.props;
    const { errors, name, user, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="custom-form w-100">
        <CustomInput
          id="input-name"
          type="text"
          label="Full Name"
          value={name}
          onChange={(event) =>
            this.handleInputChange('name', event.target.value)
          }
          className="input-sign-up"
          invalid={errors.name}
        />
        <CustomInput
          id="input-user"
          type="text"
          label="Users name or Email"
          value={user}
          onChange={(event) =>
            this.handleInputChange('user', event.target.value)
          }
          className=""
          invalid={errors.user || errors.email}
          invalidText={errors.email && 'Enter valid email address'}
        />
        <CustomInput
          id="input-password"
          type="password"
          label={isSignIn ? 'Password' : 'Create Password'}
          value={password}
          onChange={(event) =>
            this.handleInputChange('password', event.target.value)
          }
          className=""
          invalid={errors.password}
        />
        <div className="d-flex justify-content-end exclusive-sign-in">
          <div
            className="in-form-link"
            onClick={() => alert('Forgot Password?')}
          >
            Forgot password?
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3 mt-md-4">
          <input type="submit" value={isSignIn ? ' Sign in' : 'Sign up'} />
        </div>
      </form>
    );
  }
}

export default CustomForm;
