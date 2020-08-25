import React, { useState, useEffect } from "react";
import { Row, Col, Image, Accordion, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { getData } from './../../services';
import * as CSS from './Item.module.scss';
import Booking from "./../../Components/Booking";

const Hotels = () => {
    const useLocationHistory = useLocation();
    const [Hotel, fillHotel] = useState(null);

    useEffect(() => {
        const handleStatusChange = (result) => {
            fillHotel(result);
        };
        const { fetch, collectKey } = getData();

        fetch(collectKey.hotel, { type: "POST" }, { id: useLocationHistory.state.id.replace("b'", "").replace("'", "") }).then(
            (resp) => {
                const respData = resp && resp.result;
                if (respData) {
                    handleStatusChange(respData);
                } else {
                    handleStatusChange('Try again some problem happend during fetching the data')
                }

            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    return Hotel && <div className={CSS.Item}>
        <Row>
            <Col xs={8} className={CSS.imgHolder}>
                <Image title={Hotel.name} src={Hotel.img ? process.env.PUBLIC_URL + `/imgs/hotels/${Hotel.img}` : "holder.js/100px180"} />
            </Col>

        </Row>
        <Row style={{ marginTop: "-50px" }}>
            <Col xs={8}>
                <Row className={CSS.hotelName}>
                    <Col xs={2} className={CSS.label}>
                        Hotel Name :
                    </Col>
                    <Col>
                        {Hotel.name}
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs={8} className={CSS.hotelDetails}>
                <Row>
                    <Col xs={2}>
                        Location :
                        </Col>

                </Row>
                <Row>
                    <Col xs={2}>
                        Country :
                        </Col>
                    <Col>
                        {Hotel.country}
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        City :
                        </Col>
                    <Col>
                        {Hotel.city}
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        Facilities :
                        </Col>
                    <Col>
                        {Hotel.facilities && Hotel.facilities.map((itm, key) => <p key={key}>{itm}</p>)}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Book it For me
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Booking hotelId={useLocationHistory.state.id.replace("b'", "").replace("'", "")} />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div> || 'Loading';
};

export default Hotels;