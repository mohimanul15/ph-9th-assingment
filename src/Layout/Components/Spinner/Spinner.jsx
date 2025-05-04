import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='w-full h-dvh flex justify-center items-center'>
            <PropagateLoader
                color={'blue'}
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;