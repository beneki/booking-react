import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';

const btnTitle = "Book It";
const Cardainer = ({ id, name, desc, img, onClick }) => {
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img ? require(process.env.PUBLIC_URL + `/Front/public/imgs/hotels/${img}`) : "holder.js/100px180"} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {desc}
            </Card.Text>
            <Button variant="primary" onClick={() => onClick(id)}>{btnTitle}</Button>
        </Card.Body>
    </Card>
}

export default Cardainer;

