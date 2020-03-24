import React from 'react';

const CardImage = () => {
    const { src, className, imagefull, alt } = this.props;
    if(imagefull){
        return <img src={src} className={'wc-card-img' + className} alt={alt} />
    }else{
        return <img src={src} className={'wc-card-img-top' + className} alt={alt} />
    }
}

export default CardImage;