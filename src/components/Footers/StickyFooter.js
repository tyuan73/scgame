import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import Footer from './Footer';
import s from './StickyFooter.css';

function StickyFooter() {
  useStyles(s);
  return <Footer extraClass={s.container} />;
}

export default StickyFooter;
