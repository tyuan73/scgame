import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
// import s1 from 'assets/css/bootstrap.min.css';
// import s2 from 'assets/scss/paper-kit.scss';
// import s3 from 'assets/demo/demo.css';

// pages
import { IndexNavbar } from 'components/Navbars/Navbars';
import IndexHeader from 'components/Headers/IndexHeader';
import Footer from 'components/Footers/Footer';

// others

export default function Home() {
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <Footer />
    </>
  );
}
