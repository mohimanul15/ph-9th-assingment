import React from 'react';
import { useParams } from 'react-router';

const Vocab = () => {

    const param = useParams();

    console.log(param);

    return (
        <div>
           THis is vocab 
        </div>
    );
};

export default Vocab;