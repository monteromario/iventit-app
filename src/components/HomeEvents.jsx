import { React, useEffect, useState } from 'react';

import Skeleton from './Skeleton'

const axios = require('axios').default;

let HomeEvents = () => {
    
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://datos.madrid.es/egob/catalogo/300107-0-agenda-actividades-eventos.json", {
        headers:{ Authorization:""}
})
        .then((r) => {
            setData(r);
            setLoading(false)
            })
        .catch((e) => {
            setData(e);
            setLoading(false)
            })
  }, []);

    return(
        <>
        { (loading) 
        ? (<Skeleton />) : (data.toString()) }
        
    </>
    )
}

export default HomeEvents
 