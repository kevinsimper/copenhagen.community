import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Content from '../components/Content';

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
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  render() {
    return (
      <Layout>
        <Content>
          <h1>Login</h1>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.value}
              onChange={e => this.onChangeEmail(e)}
            />
          </label>
          <div>
            <button onClick={() => this.handleLogin()}>Login</button>
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
