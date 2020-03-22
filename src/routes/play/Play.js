import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import { Container, Row, Col } from 'reactstrap';
import StickyFooter from 'components/Footers/StickyFooter.js';

import s from './Play.css';

function Play({}) {
  useStyles(s);
  return (
    <>
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col className={s.leftCol} xs="2">
            COl1
          </Col>
          <Col xs="8">Col2 </Col>
          <Col className={s.rightCol} xs="2">
            Col3
          </Col>
        </Row>
      </Container>
      <StickyFooter />
    </>
  );
}

export default Play;
