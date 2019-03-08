import React from 'react';
import './RegistrationForm.scss';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password1: '',
      password2: '',
    };

    this.checkForm = this.checkForm.bind(this);
    this.cleanUp = this.cleanUp.bind(this);
  }

  checkForm() {



    this.props.onClickPrimary({
      email: this.state.email,
      password: this.state.password1,
    });
  }

  cleanUp() {
    this.setState({
      email: '',
      password1: '',
      password2: '',      
    });

    this.props.onClickSecondary();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h2>Register as a forest guard!</h2>
          <div className="form-group registerformgroup">
            <label for="regemail">Email address</label>
            <input type="text" id="regemail" className="form-control" placeholder="email@example.com" onChange={e => this.setState({ email: e.target.value })} />
          </div>
          <div className="form-group registerformgroup">
            <label for="regpassword">Password</label>
            <input id="regpassword" type="password" className="form-control" placeholder="password" onChange={e => this.setState({ password1: e.target.value })} />
            <input type="password" className="form-control" placeholder="repeat password" onChange={e => this.setState({ password2: e.target.value })} />
          </div>
        <button className="btn btn-secondary" onClick={() => this.cleanUp()}>Cancel</button>
        <button className="btn btn-primary" onClick={() => this.checkForm()}>Send</button>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;