import { React, useEffect, useState } from 'react';

import Skeleton from './Skeleton'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Img01 from '../assets/event_01.jpg'
import Img02 from '../assets/event_02.jpg'
import Img03 from '../assets/event_03.jpg'
import Img04 from '../assets/event_04.jpg'
import Img05 from '../assets/event_05.jpg'
import Img06 from '../assets/event_06.jpg'
import Img07 from '../assets/event_07.jpg'
import Img08 from '../assets/event_08.jpg'
import Img09 from '../assets/event_09.jpg'
import Img10 from '../assets/event_10.jpg'

const axios = require('axios').default;

let HomeEvents = () => {
    
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    let updateLocationKey = (data) => {
        let arrayData = JSON.stringify(data);
        let updatedData = arrayData.replace(/"event-location":/g, "\"eventlocation\":");
        let jsonData = JSON.parse(updatedData);
        setData(jsonData);
        setLoading(false);
        console.log(data);
        console.log(Date(Date.now()))
    }

    useEffect(() => {
        axios.get("https://i-vent-api.herokuapp.com/getEvents")
        .then((r) => {
            updateLocationKey(r.data['@graph']);
            })
        .catch((e) => {
            setData(e);
            setLoading(false)
            })
    }, []);

    let randomPicture = () => {
        let pictureArray = [Img01,Img02,Img03,Img04,Img05,Img06,Img07,Img08,Img09,Img10]
        return pictureArray[Math.floor(Math.random() * (pictureArray.length))]
    }

    let filterFreeItems = () => {
        let filteredData = data.filter(i => i.free === 1)
        setData(filteredData)
    }

    let filterTodayItems = () => {
        let year = Date(Date.now()).slice(11,15)
        let month = Date(Date.now()).slice(4,7)
        let day = Date(Date.now()).slice(8,10)

        switch (month) {
            case 'Jan':
                month = '01'
                break;
            case 'Feb':
                month = '02'
                break;
            case 'Mar':
                month = '03'
                break;
            case 'Apr':
                month = '04'
                break;
            case 'May':
                month = '05'
                break;
            case 'Jun':
                month = '06'
                break;
            case 'Jul':
                month = '07'
                break;
            case 'Aug':
                month = '08'
                break;
            case 'Sep':
                month = '09'
                break;
            case 'Oct':
                month = '10'
                break;
            case 'Nov':
                month = '11'
                break;
            case 'Dec':
                month = '12'
                break;   
            default:
                break;
        }

        let formattedDate = year+'-'+month+'-'+day
        let filteredData = data.filter(i => i.dtstart.startsWith(formattedDate))
        setData(filteredData)
    }

    let filterThisMonthItems = () => {
        let year = Date(Date.now()).slice(11,15)
        let month = Date(Date.now()).slice(4,7)

        switch (month) {
            case 'Jan':
                month = '01'
                break;
            case 'Feb':
                month = '02'
                break;
            case 'Mar':
                month = '03'
                break;
            case 'Apr':
                month = '04'
                break;
            case 'May':
                month = '05'
                break;
            case 'Jun':
                month = '06'
                break;
            case 'Jul':
                month = '07'
                break;
            case 'Aug':
                month = '08'
                break;
            case 'Sep':
                month = '09'
                break;
            case 'Oct':
                month = '10'
                break;
            case 'Nov':
                month = '11'
                break;
            case 'Dec':
                month = '12'
                break;   
            default:
                break;
        }

        let formattedDate = year+'-'+month
        let filteredData = data.filter(i => i.dtstart.startsWith(formattedDate))
        setData(filteredData)
    }

    let getAllItems = () => {
        setLoading(true)
        axios.get("https://i-vent-api.herokuapp.com/getEvents")
        .then((r) => {
            updateLocationKey(r.data['@graph']);
            })
        .catch((e) => {
            setData(e);
            setLoading(false)
            })
    }

    let filterSearchItems = (e) => {
        if (e.target.value.length === 0) {
            getAllItems()
        } else {
            let filteredData = data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filteredData)
        }
    }

    return(
        <>
        { (loading) 
            ? (<Skeleton />) 
            : ( <div className="m-4">
                    <InputGroup className="mb-4 align-content-start flex-wrap justify-content-around">
                        <FormControl
                        placeholder="Find events"
                        aria-label="Find events"
                        className="input--searchbox"
                        onChange={filterSearchItems}
                        />
                        <Button variant="outline-secondary" className="btn--menu" onClick={filterTodayItems}>Today</Button>
                        <Button variant="outline-secondary" className="btn--menu" onClick={filterThisMonthItems}>This month</Button>
                        <Button variant="outline-secondary" className="btn--menu" onClick={filterFreeItems}>Free</Button>
                        <Button variant="outline-secondary" className="btn--menu" onClick={getAllItems}>All</Button>
                    </InputGroup>
                    <CardColumns>
                    { data.map(i =>
                            <Card className="eventCard" key={i.uid}>
                                <a href={i.link} target="_blank" rel="noreferrer" className="link--card">
                                <Card.Img variant="top" src={randomPicture()} />
                                <Card.Body>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>{i.description.substring(0,256)}</Card.Text>
                                </Card.Body>
                                </a>
                                { (i.eventlocation.length === 0) ? "" :
                                <Card.Body className="card--location">
                                    <Card.Text><a href={'https://www.google.es/maps?q='+i.location.latitude+','+i.location.longitude} target="_blank" rel="noreferrer" className="card--link"><i className="fas fa-map-marker-alt"></i> {i.eventlocation}</a></Card.Text>
                                </Card.Body>
                                }
                                <Card.Footer className="items--flex">
                                <small className="text-muted">{i.dtstart.substring(8,10)}/{i.dtstart.substring(5,7)}/{i.dtstart.substring(0,4)} {i.time} </small>
                                { (i.free === 1) ? <Badge variant="success">Free</Badge> : <div className="price"><Badge variant="warning">Price info</Badge><span className="price--text">{ (i.price.length > 2) ? (i.price) : 'No info'}</span></div>}
                                </Card.Footer>
                            </Card>
                    )
                    }
                    </CardColumns>
                </div>
            ) 
        }
    </>
    )
}

export default HomeEvents
 