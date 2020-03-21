import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import Footer from './Footer';
import s from './ErrorFooter.css';

function ErrorFooter() {
  useStyles(s);
  return <Footer extraClass={s.container} />;
}

export default ErrorFooter;
