import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Card,
    Elevation,
    Button
} from '@blueprintjs/core';

const useFech = url =>{
    const [images, setImages] = useState();

    async function fetchData(){
        const response = await fetch(url);
        const json = await response.json();
        setImages(json);
    }

    useEffect(() => {fetchData()});
    return images;
}

export default function Fullpage(){

    const { id } = useParams();

    const img = useFech(`https://api.unsplash.com/photos/${id}?client_id=CiZakpz3UaJ9JAqPMaMFb682veipZmWm1PZm6uayVNY`);
    
    if(img){
        return (
            <>
                <div className='row'>
                    <div className='col-12'>
                        <Card elevation={Elevation.THREE}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img className='imageFull' src={img.urls.regular} />
                                </div>
                                <div className='col-md-6'>
                                    <Button onClick={() => window.open(img.urls.full, '_blank')} intent='success' large={true} icon='download'>Download</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </>
        )   
    }else{
        return(
            <>
                
            </>
        )
    }
}