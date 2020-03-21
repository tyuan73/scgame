import React from 'react';
// import Layout from '../../components/Layout';
import Home from './Home';

const title = 'Steal & Challenge';
// const isAdmin = false;

function action() {
  //   if (!isAdmin) {
  //     return { redirect: '/login' };
  //   }

  return {
    chunks: ['home'],
    title,
    component: <Home />,
  };
}

export default action;
