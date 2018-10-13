import React from 'react';
import Layout from '../components/Layout';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

export default () => (
  <Layout>
    <TopAppBar
      title="Copenhagen.Community"
      navigationIcon={
        <MaterialIcon icon="menu" onClick={() => console.log('click')} />
      }
      actionItems={[<MaterialIcon key="item" icon="bookmark" />]}
    />
  </Layout>
);
