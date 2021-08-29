import { React, useEffect, useState } from 'react';

import Skeleton from './Skeleton'

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

let Favs = () => {
    
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [favorites, setFavorites] = useState([]);

    let updateLocationKey = (tempData) => {
          let arrayData = JSON.stringify(tempData);
          let updatedData = arrayData.replace(/"event-location":/g, "\"eventlocation\":");
          let jsonData = JSON.parse(updatedData);
          setData(jsonData);
          setLoading(false)
    }

    useEffect(() => {
        let tempData = [];
        if (localStorage.getItem('iventitFavEvents')) {
            let items = JSON.parse(localStorage.getItem('iventitFavEvents'))
            setFavorites(items)
            if (items.length > 0) {
              items.map(i => {
                axios.get("https://i-vent-api.herokuapp.com/getEvent/"+i)
                .then((r) => {
                    let oldData = tempData;
                    let pushData = r.data['@graph'][0]
                    oldData.push(pushData)
                    tempData = oldData
                    updateLocationKey(tempData)
                    })
                .catch((e) => {
                    console.log(e);
                    })
              })
            } else {
              localStorage.removeItem('iventitFavEvents')
              setLoading(false)
            }
        } else {
          setLoading(false)
        }
    }, []);

    let randomPicture = () => {
        let pictureArray = [Img01,Img02,Img03,Img04,Img05,Img06,Img07,Img08,Img09,Img10]
        return pictureArray[Math.floor(Math.random() * (pictureArray.length))]
    }

    let handleFavorite = (e) => {
        console.log(e.target.id)
        if (favorites.indexOf(e.target.id) > -1) {
            let prevFavorites = favorites;
            let newFavorites = prevFavorites.splice(favorites.indexOf(e.target.id), 1);
            setFavorites(newFavorites);
            localStorage.setItem('iventitFavEvents', JSON.stringify(favorites));
            let items = JSON.parse(localStorage.getItem('iventitFavEvents'))
            setFavorites(items)
        } else {
            let prevFavorites = favorites;
            let newFavorites = prevFavorites.push(e.target.id);
            setFavorites(newFavorites);
            localStorage.setItem('iventitFavEvents', JSON.stringify(favorites));
            let items = JSON.parse(localStorage.getItem('iventitFavEvents'))
            setFavorites(items)
        }
        window.location.reload(false);
    }

    return(
        <>
        { (data.length < 1) ? <h3 className="mt-5 text-center">No favorites yet. Check <a href="/">here</a> all events.</h3> : <h3 className="mt-5 text-center">Your favorite events:</h3> }
        { (loading) 
            ? (<Skeleton />) 
            : ( <div className="m-4">
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
                                { (!i.eventlocation) ? "" :
                                <Card.Body className="card--location">
                                    <Card.Text><a href={'https://www.google.es/maps?q='+i.location.latitude+','+i.location.longitude} target="_blank" rel="noreferrer" className="card--link"><i className="fas fa-map-marker-alt"></i> {i.eventlocation}</a></Card.Text>
                                </Card.Body>
                                }
                                <Card.Footer className="items--flex">
                                <small className="text-muted">{i.dtstart.substring(8,10)}/{i.dtstart.substring(5,7)}/{i.dtstart.substring(0,4)} {i.time} </small>
                                <small>
                                    { (favorites.indexOf(i.id) > -1) ? <span className="ico--star"><i className="fas fa-star ml-3 mr-2" alt="Fav" onClick={handleFavorite} id={i.id}></i></span> : <span className="ico--favStar"><i className="fas fa-star ml-3 mr-2" alt="Fav" onClick={handleFavorite} id={i.id}></i></span> } 
                                </small>
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

export default Favs
 