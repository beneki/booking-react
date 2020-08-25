import React, { useState, useEffect } from "react";
import Card from './../../Components/Card';
import Search from './../../Search';
import { Row, Col } from 'react-bootstrap';
import { getData } from './../../services';
import { useHistory } from 'react-router';
import * as CSS from './Hotels.module.scss';

const Hotels = () => {
    const [wholeHotels, fillHotels] = useState([]);
    const [hotels, changeHotels] = useState([]);
    const browserHistory = useHistory();

    const searchCallBack = (key, factor) => changeHotels(key ? hotels.filter(hotel => hotel[factor].toLowerCase().includes(key.toLowerCase())) : wholeHotels);
    const CardClick = (id) => browserHistory.push({ pathname: '/Item', state: { id } });
    const renderHotels = () => hotels.map((itm, ix) => <Col key={ix}><a onClick={() => CardClick(itm.id)}><Card {...itm} /></a></Col >);

    useEffect(() => {
        const handleStatusChange = (result) => {
            fillHotels(result);
            changeHotels(result);
        };
        const { fetch, collectKey } = getData();

        fetch(collectKey.hotels).then(
            (resp) => {
                handleStatusChange(resp.result);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return <React.Fragment>
        <Row>
            <Col>
                <Search searchCallBack={searchCallBack} />
            </Col>
        </Row>
        <Row className={CSS.Hotels}>
            {renderHotels()}
        </Row>
    </React.Fragment>
};

export default Hotels;