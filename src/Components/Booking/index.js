import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { getData } from './../../services';
import * as CSS from './Booking.module.scss';
import Dates from "./../../Components/Dates"

const Hotels = ({ hotelId }) => {
    const [process, setProcessState] = useState({ processDone: null });
    const [details, changeDetails] = useState({});
    const [blockedDates, fillBlockedDates] = useState({});

    const readBooking = () => {
        const { fetch, collectKey } = getData();
        const handleStatusChange = (result) => {
            fillBlockedDates(result);
        };

        fetch(collectKey.readBooking, { type: "GET" }, null, { key: 'hotelId', val: hotelId }).then(
            (resp) => {
                const respData = resp && resp.result;
                if (respData) {
                    handleStatusChange(respData)
                }

            },
            (error) => {
                console.log(error);
            }
        );
    }
    useEffect(() => {
        readBooking();
    }, []);
    const bookIt = () => {
        const formData = {
            hotelId,
            ...details
        };
        const { fetch, collectKey } = getData();
        console.log(details);
        fetch(collectKey.insertBooking, { type: "POST" }, formData).then(
            (resp) => {
                const respData = resp && resp.result;
                if (respData) {
                    if (respData.isInserted === true) {
                        setProcessState({ processDone: true, error: false, msg: respData.msg });
                        readBooking();
                    } else if (respData.isInserted === false) {
                        setProcessState({ processDone: true, error: true, msg: respData.msg });
                        console.log(respData.exactError);

                    }

                } else {
                    setProcessState({ processDone: true, error: true, msg: 'Please try again some error happened' });
                }

            },
            (error) => {
                setProcessState({ processDone: false, msg: 'Please try again some error happened during connect to server' });
                console.log(error);
            }
        );
    };
    const changeDetailsHanlder = (et) => {
        changeDetails({ ...details, [et.target.name]: et.target.value });
    }
    const fomControl = (name) => <Form.Control name={name} placeholder={name} onChange={changeDetailsHanlder} />;
    const showAlert = ({ error, msg }) => <Alert key={1} variant={error ? 'danger' : 'success'}>
        {msg}
    </Alert>;

    return <div className={CSS.Booking}>
        {process && process.processDone && showAlert(process)}
        <Form>
            <Form.Row>
                <Col>
                    <Dates blockedDates={blockedDates} setDates={({ startDate, endDate }) => changeDetails({ ...details, startDate, endDate })} />
                </Col>
                <Col>
                    {fomControl("FirstName")}
                </Col>
                <Col>
                    {fomControl("LastName")}
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    {fomControl("Nationality")}
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    {fomControl("PassportNumber")}
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    {fomControl("PhoneNumber")}
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    {fomControl("Address")}
                </Col>
            </Form.Row>
            <Form.Row className="float-right button-holder">
                <Button variant="outline-primary" type="button" onClick={bookIt}>Book It</Button>
            </Form.Row>
        </Form>

    </div>
};

export default Hotels;