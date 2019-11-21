import React, { Fragment } from 'react';

const Image = (props) => {
    return (
        <Fragment>
            <img src={props.media.m} alt="Marylin Monroe" />
        </Fragment>
    );
}

export default Image;