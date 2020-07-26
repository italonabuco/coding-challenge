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
    } else {
      this.setState({ errors: {}, isFormInvalid: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validate();
  };

  handleInputChange = (name, value) => this.setState({ [name]: value });

  render() {
    const { isSignIn } = this.props;
    const { errors, name, user, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="custom-form w-100">
        {!isSignIn && (
          <CustomInput
            type="text"
            label="Full Name"
            value={name}
            onChange={(event) => this.handleInputChange('name', event.target.value)}
            className=""
            invalid={errors.name}
          />
        )}
        <CustomInput
          type="text"
          label="Users name or Email"
          value={user}
          onChange={(event) => this.handleInputChange('user', event.target.value)}
          className=""
          invalid={errors.user || errors.email}
          invalidText={errors.email && 'Enter valid email address'}
        />
        <CustomInput
          type="password"
          label={isSignIn ? 'Password' : 'Create Password'}
          value={password}
          onChange={(event) => this.handleInputChange('password', event.target.value)}
          className=""
          invalid={errors.password}
        />
        {isSignIn && (
          <div className="d-flex justify-content-end">
            <div className="in-form-link mb-4">Forgot password?</div>
          </div>
        )}

        <div className="d-flex justify-content-center">
          <input type="submit" value={isSignIn ? ' Sign in' : 'Sign up'} />
        </div>
      </form>
    );
  }
}

export default CustomForm;
