import { React, useEffect, useState } from 'react';
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';

import Skeleton from './Skeleton'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
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

let Map = () => {
    
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [favorites, setFavorites] = useState([]);

    const [markers, setMarkers] = useState([]);

    
    let generateMarker = (lat, lon, name, id, link) => {
      return {latitude: lat, longitude: lon, name: name, id: id, link: link}
    }
    
    let generateMarkers = (jsonData) => {
      let markersArray = [];
      jsonData.map(i => {
      if (i.location) {
        markersArray.push({latitude: i.location.latitude, longitude: i.location.longitude, name: i.title})
        }
      })
      return markersArray
    }

    let updateLocationKey = (data) => {
        let arrayData = JSON.stringify(data);
        let updatedData = arrayData.replace(/"event-location":/g, "\"eventlocation\":");
        let jsonData = JSON.parse(updatedData);
        setData(jsonData);
        setLoading(false);
        return jsonData
    }

    useEffect(() => {
        if (localStorage.getItem('iventitFavEvents')) {
            let items = JSON.parse(localStorage.getItem('iventitFavEvents'))
            setFavorites(items)
        } else {}

        if (!data) {
        axios.get("https://i-vent-api.herokuapp.com/getEvents")
        .then((r) => {
            setMarkers(generateMarkers(updateLocationKey(r.data['@graph'])));
            })
        .catch((e) => {
            setData(e);
            setLoading(false)
            })
        } else {}
    }, [data]);

    let filterFreeItems = () => {
        let filteredData = data.filter(i => i.free === 1)
        setData(filteredData)
        setMarkers(generateMarkers(filteredData))
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
        setMarkers(generateMarkers(filteredData))
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
        setMarkers(generateMarkers(filteredData))
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

    let handleClic = (e) => {
      console.log(e.target)
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
                    <MapsComponent id="maps" zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'], zoomFactor: 14 }} centerPosition={{ latitude: 40.41699097723872, longitude: -3.703519356081862 }} onClick={handleClic}>
                    <Inject services={[Marker, NavigationLine, Zoom]}/>
                        <LayersDirective>
                            <LayerDirective layerType='OSM'>
                                <MarkersDirective>
                                    <MarkerDirective visible={true} height={25} width={25} dataSource={ markers }>
                                  </MarkerDirective>
                                </MarkersDirective>
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                    <div>{ JSON.stringify(markers) }</div>
                </div>
            ) 
        }
    </>
    )
}

export default Map


