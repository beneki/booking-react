import React, { useState } from "react";
import { DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';
import * as CSS from './Search.module.scss';

const btnTitle = "Search";
const filterOptions = [
    "name",
    "city"
];

const Cardainer = ({ searchCallBack }) => {
    const [filterFactor, changeFactor] = useState(filterOptions[0])
    return <React.Fragment>
        <Form inline className={CSS.Search}>
            <DropdownButton id="dropdown-basic-button" title="Filter the hotels By" onSelect={(evt) => changeFactor(evt.replace('#/val-', ''))}>
                {filterOptions.map((fOption, ix) => <Dropdown.Item key={ix} href={`#/val-${fOption}`}>{fOption}</Dropdown.Item>)}
            </DropdownButton>
            <input type="text" placeholder="Search" className={CSS.srchTxt} onChange={({ target }) => searchCallBack(target.value, filterFactor)} />
            <Button className={CSS.btn} variant="primary">{btnTitle}</Button>
        </Form>
    </React.Fragment>
}

export default Cardainer;

