/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Row, Container } from 'reactstrap';

function Footer({ extraClass }) {
  return (
    <footer className={`footer footer-black footer-white ${extraClass}`}>
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
              <li>
                <a href="/contact" target="_blank">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">© {new Date().getFullYear()}</span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
