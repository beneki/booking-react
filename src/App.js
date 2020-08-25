import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Hotels from './Routes/Hotels';
import Item from './Routes/Item';
import NotFound from './Routes/NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return <React.Fragment>
        <Navbar />
        <Container>
            <Router>
                <Switch>
                    <Route path="/AirAsia">
                        <Hotels />
                    </Route>
                    <Route path="/Hotels">
                        <Hotels />
                    </Route>
                    <Route path="/Item">
                        <Item />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>

        </Container>
    </React.Fragment>;
};

export default App;