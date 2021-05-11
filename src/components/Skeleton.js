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

    return(
        <div className="m-4">
            <div className="Loader">
                <ScaleLoader color="#f6c90e" width={50} height={50} radius={5} margin={5}/>
                <h3 className="mt-3">Loading events...</h3>
            </div>
            <CardColumns>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img01} />
                    <Card.Body>
                    <Card.Title>Event title</Card.Title>
                    <Card.Text>
                        Event description. This will be filled with real data when data is loaded.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated: a few seconds ago</small>
                    </Card.Footer>
                </Card> 
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img02}/>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img03} />
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img04}/>
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img05} />
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img06}/>
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img07} />
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img08} />
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img09} />
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
                </Card>
                <Card className="eventCard">
                    <Card.Img variant="top" src={Img10} />
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
                </Card>
            </CardColumns>
        </div>
    )
}

export default Skeleton