import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const item = useLoaderData()
    console.log(item);
    return (
        <div>
            <h2>Update Instruments: </h2>
        </div>
    );
};

export default Update;