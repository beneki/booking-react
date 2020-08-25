require('es6-promise').polyfill();
require('fetch-everywhere');

const getData = () => {
    const endPoint = "http://127.0.0.1:5000";
    const collection = {
        hotels: "hotels",
        hotel: "hotel",
        insertBooking: "insertBooking",
        readBooking: "readBooking"
    }
    return {
        collectKey: collection,
        fetch: (cKey, { type } = { type: "GET" }, data, queryStr = "") => {
            const queryString = queryStr ? `/${queryStr.val}` : '';
            return fetch(`${endPoint}/${collection[cKey]}${queryString}`,
                {
                    method: type, // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    ...(type === "POST" && data && { body: JSON.stringify(data) }) // body data type must match "Content-Type" header
                }).then(res => res.json())
        }
    }


    //return [
    // {
    //     "id": 1,
    //     "name": "Hotel KLcc",
    //     "country": "Malaysia",
    //     "city": "Kuala Lumpur",
    //     "desc": "This Hotel is located in KL",
    //     "img": "hotel1.jpg"
    // },
    // {
    //     "id": 2,
    //     "name": "Hotel Cyberjaya",
    //     "country": "Malaysia",
    //     "city": "Kuala Lumpur",
    //     "desc": "This Hotel is located in Cyberjaya",
    //     "img": "hotel2.jpg"
    // },
    // {
    //     "id": 3,
    //     "name": "Hotel Damansara",
    //     "country": "Malaysia",
    //     "city": "Malaka",
    //     "desc": "This Hotel is located in Damansara",
    //     "img": "hotel3.jpg"
    // },
    // {
    //     "id": 4,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "Malaysia",
    //     "city": "Penang",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // },
    // {
    //     "id": 5,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "Malaysia",
    //     "city": "Kuala Lumpur",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // },
    // {
    //     "id": 6,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "Malaysia",
    //     "city": "Kuala Lumpur",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // },
    // {
    //     "id": 7,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "Germany",
    //     "city": "Munich",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // },
    // {
    //     "id": 8,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "Germany",
    //     "city": "Berlin",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // },
    // {
    //     "id": 9,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "USA",
    //     "city": "Florida",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // },
    // {
    //     "id": 10,
    //     "name": "Hotel Petaling Jaya",
    //     "country": "Germany",
    //     "city": "New York",
    //     "desc": "This Hotel is located in Petaling Jaya",
    //     "img": "hotel4.jpg"
    // }
    //];
}

export { getData };