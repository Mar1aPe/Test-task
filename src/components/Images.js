import React, { Fragment } from 'react';

const Image = (props) => {


    return (
        <Fragment>
            <a href={props.link} target='_blank'><img className='basicImage' src={props.media.m} alt="Marylin Monroe" /></a>
        </Fragment>
    );
}

export default Image;