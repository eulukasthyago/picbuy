import React, { Component } from 'react';
import { api_pexels } from '../../services/api';
import { Classes, Card, CardBody, CardImage } from '../../components/@wc-design/core';

export default class Pexels extends Component {

    state = {
        image: []
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api_pexels.get(`/photos/${id}`);

        this.setState({ image: response.data });
    }

    render() {
        const { image } = this.state;
        console.log(image);
        return (
            <Card className={Classes.SHADOW_SM}>
                <CardImage src={image.src.large} />
                <CardBody>
                
                </CardBody>
            </Card>
        );
    }
}