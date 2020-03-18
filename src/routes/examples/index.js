import React from 'react';
// import Layout from '../../components/Layout';
import Examples from './Examples';

const title = 'Examples Page';
// const isAdmin = false;

function action() {
  //   if (!isAdmin) {
  //     return { redirect: '/login' };
  //   }

  return {
    chunks: ['examples'],
    title,
    styles: ['test1.css', 'test2.css'],
    component: <Examples />,
  };
}

export default action;
