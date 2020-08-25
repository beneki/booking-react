import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import * as CSS from './css/Card.module.scss';

const btnTitle = "Book It";
const Cardainer = ({ name, desc, img }) => {
    return <Card className={CSS.card}>
        <Card.Img variant="top" src={img ? require(process.env.PUBLIC_URL + `/booking-react/public/imgs/hotels/${img}`) : "holder.js/100px180"} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {desc}
            </Card.Text>
            <Button variant="outline-primary" className={CSS.btn}>{btnTitle}</Button>
        </Card.Body>
    </Card>
}

export default Cardainer;

