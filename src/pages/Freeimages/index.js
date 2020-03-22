import React, { Component } from 'react';
import api from '../../services/api';
import { Card, Button, Elevation, H1 } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';

export default class Freeimages extends Component {

    state = {
        images: []
    }

    componentDidMount(){
        this.loadImages();
    }

    loadImages = async () =>{
        const response = await api.get('/photos/',{
            params: {
                client_id: 'CiZakpz3UaJ9JAqPMaMFb682veipZmWm1PZm6uayVNY',
                per_page: 21
            }
        });

        this.setState({images: response.data});

        console.log(response);
    }

    render(){
        return (
            <>
                <H1 className='mb-5'>Imagens gratuitas</H1>
                <div className='row'>
                    {this.state.images.map(image => (
                        <div className='col-md-4 mb-4' key={image.id}>
                            <Card interactive={false} elevation={Elevation.TWO}>
                                <img className='cardImage' src={image.urls.small} alt=''/>
                                <div className='d-flex justify-content-center mt-3'>
                                    <Button intent='success' icon='download' large={true} text='Download'/>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </>
        )
    }
} 