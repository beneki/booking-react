import React, { useState, useContext } from "react";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { DateRangePicker, START_DATE, END_DATE } from 'react-dates';

const moment = extendMoment(Moment); /* extending moment to use range functionality */
const Dates = ({ blockedDates = [], setDates }) => {
    const DISPLAY_FORMAT = "YYYY-MM-DD";
    const [dates, changeDates] = useState({ startDate: null, endDate: null });
    const [focusedInput, changeFocused] = useState(START_DATE);

    const formatter = (day) => moment(day).format(DISPLAY_FORMAT);
    const dateChecker = (dateFrom, dateTo, dateCheck) => {
        const seperator = '-';
        const d1 = dateFrom.split(seperator);
        const d2 = dateTo.split(seperator);
        const c = dateCheck.split(seperator);

        const from = new Date(d1[0], parseInt(d1[1]) - 1, d1[2]);  // -1 because months are from 0 to 11
        const to = new Date(d2[0], parseInt(d2[1]) - 1, d2[2]);
        const check = new Date(c[0], parseInt(c[1]) - 1, c[2]);

        return (check > from && check < to) || [from.valueOf(), to.valueOf()].includes(check.valueOf());
    }
    const blockDatesChecker = (day) => blockedDates.find(({ startDate, endDate }) => dateChecker(startDate, endDate, formatter(day)));

    const preChangeDates = (startDate, endDate) => {
        const _changeDates = () => {
            setDates({ startDate: startDate && startDate.format(DISPLAY_FORMAT), endDate: endDate && endDate.format(DISPLAY_FORMAT) });
            changeDates({ startDate, endDate });
        }

        if (startDate && endDate) {
            const range = moment().range(startDate, endDate);
            if (!blockedDates.find(date => range.contains(moment(date)))) {
                _changeDates();
            }

        } else {
            _changeDates();
        }

    }

    return <DateRangePicker
        startDate={dates.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        displayFormat={DISPLAY_FORMAT}
        endDate={dates.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => preChangeDates(startDate, endDate)} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={newFocus => changeFocused(newFocus)} // PropTypes.func.isRequired,
        isDayBlocked={day => blockDatesChecker(day)}
    />
}

export default Dates;

