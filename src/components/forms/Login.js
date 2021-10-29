import Button from '../buttons/Button';
import Input from '../Inputs/Input';
import Panel from '../Panel/Panel';
import { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <Panel>
        <div>
          <Input
            placeholder="Username"
            onChange={v => {
              console.log('LoginForm - changed username to', v);
            }}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            onChange={v => {
              console.log('LoginForm - changed password to', v);
            }}
          />
        </div>
        <div style={{ padding: 6 }}>
          <Button
            text="Log In"
            onClick={() => {
              console.log('LoginForm - clicked log in');
            }}
          />
        </div>
      </Panel>
    );
  }
}

export default LoginForm;