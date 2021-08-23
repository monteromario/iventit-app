import { React, useEffect, useState } from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ScaleLoader from 'react-spinners/ScaleLoader';
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

let Skeleton = () => {

    let randomPicture = () => {
        let pictureArray = [Img01,Img02,Img03,Img04,Img05,Img06,Img07,Img08,Img09,Img10]
        return pictureArray[Math.floor(Math.random() * (pictureArray.length))]
    }

    const [data] = useState([<Card className="SkeletonEventCard" key={randomPicture()}>
                    <Card.Img variant="top" src={randomPicture()} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>]);

    const [content, setContent] = useState([data]);

    useEffect(() => {
        setTimeout(function(){ setContent([data,data]); }, 500)
        setTimeout(function(){ setContent([data,data,data]); }, 1000)
        setTimeout(function(){ setContent([data,data,data,data]); }, 1500)
        setTimeout(function(){ setContent([data,data,data,data,data]); }, 2000)
        setTimeout(function(){ setContent([data,data,data,data,data,data]); }, 2500)
        setTimeout(function(){ setContent([data,data,data,data,data,data,data]); }, 3000)
    }, [data]);

    return(
        <div className="m-4">
            <div className="Loader">
                <ScaleLoader color="#f6c90e" width={50} height={50} radius={5} margin={5}/>
                <h3 className="mt-3">Loading events...</h3>
            </div>
            <CardColumns>
                {content}
            </CardColumns>
        </div>
    )
}

export default Skeleton