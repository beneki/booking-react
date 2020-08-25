import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as CSS from './css/Container.module.scss';

const ContainerComponent = ({ children }) => <Container className={CSS.container} fluid>
    {children}
</Container>;

export default ContainerComponent;