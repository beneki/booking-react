// import React, { useState } from "react";
// import { Container, Row, Col } from 'react-bootstrap';


// const Booking = () => {
//     const [duration, changeDuration] = useState({ startDate: 'Start Time', startDate: 'End Time' });
//     const setDateDuration = (startDate, endDate) => changeDuration({ startDate, endDate })


//     return <Container fluid>
//         <Row>
//             <Col>
//                 <RangePicker
//                     locale="en-us" // default is en-us
//                     show={false} // default is false
//                     disabled={false} // default is false
//                     allowPageClickToClose={true} // default is true
//                     onConfirm={res => setDateDuration(res[0], res[1])}
//                     onClose={() => console.log('onClose')}
//                     onClear={() => console.log('onClear')}
//                     style={{ width: '300px', margin: '0 auto' }}
//                     placeholder={[duration.startDate, duration.startDate]}

//                 ////////////////////
//                 // IMPORTANT DESC //
//                 ////////////////////
//                 // defaultDates={[year + '-' + month + '-' + date, year + '-' + month + '-' + date]}
//                 // ['YYYY-MM-DD', 'YYYY-MM-DD']
//                 // This is the value you choosed every time.
//                 // defaultTimes={[hour + ':' + minute, hour + ':' + minute]}
//                 // ['hh:mm', 'hh:mm']
//                 // This is the value you choosed every time.
//                 // initialDates={[year + '-' + month + '-' + date, year + '-' + month + '-' + date]}
//                 // ['YYYY-MM-DD', 'YYYY-MM-DD']
//                 // This is the initial dates.
//                 // If provied, input will be reset to this value when the clear icon hits,
//                 // otherwise input will be display placeholder
//                 // initialTimes={[hour + ':' + minute, hour + ':' + minute]}
//                 // ['hh:mm', 'hh:mm']
//                 // This is the initial times.
//                 // If provied, input will be reset to this value when the clear icon hits,
//                 // otherwise input will be display placeholder
//                 />

//             </Col>
//         </Row>
//     </Container>
// }

// export default Booking;