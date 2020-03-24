import React, { Component } from 'react';
import { api_pexels } from '../../services/api';
import { Card, Elevation, H1 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import './style.css'

export default class Freeimages extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        this.loadImages();
    }

    loadImages = async () => {
        const response = await api_pexels.get('/search', {
            params: {
                per_page: 21,
                query: 'food'
            }
        });

        this.setState({ images: response.data.photos });
    }

    render() {
        console.log(this)
        return (
            <>
                <H1 className='mb-5'>Imagens gratuitas</H1>
                <div className='row'>
                    {this.state.images.map(image => (
                        <div className='col-md-4 mb-4' key={image.id}>
                            <Card interactive={false} elevation={Elevation.TWO}>
                                <img className='cardImage' src={image.src.large} alt='' />
                                <div className='d-flex justify-content-center mt-3'>
                                    <Link className="wc-btn wc-btn-success" to={`/freeimages/pexels/${image.id}`}>Download</Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </>
        )
    }
} 