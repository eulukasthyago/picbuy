import React, { useState, useEffect } from 'react';
// import { Card, Elevation, Button } from '@blueprintjs/core';
// import { useHistory } from 'react-router-dom';
import './style.css';

// const useFech = url =>{
//     const [images, setImages] = useState();

//     async function fetchData(){
//         const response = await fetch(url);
//         const json = await response.json();
//         setImages(json);
//     }

//     useEffect(() => {fetchData()});
//     return images;
// }

export default function Home(){
    // const history = useHistory();

    // const imgs = useFech('https://api.unsplash.com/photos/?client_id=CiZakpz3UaJ9JAqPMaMFb682veipZmWm1PZm6uayVNY');

    const cardBuy = [];

    // if(imgs){
    //     imgs.forEach(img => {
    //         console.log(img);
    //         cardBuy.push(
    //             <div className='col-md-4 mb-4' key={img.id}>
    //                 <Card interactive={false} elevation={Elevation.ONE}>
    //                     <img className='cardImage' src={img.urls.small} alt=''/>
    //                     <h4>Nome da imagens</h4>
    //                     <p>Descrição da imagem</p>
    //                     <div className='d-flex justify-content-center'>
    //                         <Button intent='success' onClick={() => history.push('/products/1')} icon='shopping-cart' large={true} text='Compar'/>
    //                     </div>
    //                 </Card>
    //             </div>
    //         );
    //     });
    // }

    return (
        <>
            <div className='row'>
                {cardBuy}
            </div>
        </>
    )
}