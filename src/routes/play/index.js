import React from 'react';
import Play from './Play';

const title = 'Steal & Challenge';

function action() {
  return {
    chunks: ['play'],
    title,
    component: <Play />,
  };
}

export default action;
