import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import TextField, { HelperText, Input } from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    if (typeof window !== 'undefined') {
      window.initAccountkit = this.init;
      if (AccountKit && AccountKit.init) {
        console.log('AccountKit already loaded');
        this.init();
      }
    }
  }
  init() {
    AccountKit.init({
      appId: '244894879524435',
      version: 'v1.3',
      state: 'test',
      debug: true,
    });
  }
  handleLogin() {
    AccountKit.login('EMAIL', { emailAddress: this.state.email }, res => {
      console.log(res);
    });
  }
  render() {
    return (
      <Layout>
        <Content>
          <h1>Login</h1>
          <TextField
            label="Email"
            style={{ maxWidth: 360, width: '100%' }}
            helperText={
              <HelperText>What email do you want to login with?</HelperText>
            }>
            <Input
              type="email"
              style={{ maxWidth: 360, width: '100%' }}
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </TextField>
          <div>
            <Button unelevated onClick={() => this.handleLogin()}>
              Login
            </Button>
          </div>
        </Content>
        <Head>
          <script src="https://sdk.accountkit.com/en_US/sdk.js" />
        </Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            AccountKit_OnInteractive = window.initAccountkit

            `,
          }}
        />
      </Layout>
    );
  }
}
