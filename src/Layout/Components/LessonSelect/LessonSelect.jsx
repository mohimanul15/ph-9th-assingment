import React from 'react';

const LessonSelect = ({ lessonData , clickHandle}) => {

    const {id, level} = lessonData;
    //console.log(lessonData);

    return (
        <>
            <button 
                className='btn btn-secondary bg-slate-700 border-0 outline-0 py-7'
                onClick={() => clickHandle(id)}>
                <div className='px-3'>
                    <h4 className='text-base md:text-lg font-bold '>
                        Lesson - {id}
                    </h4>
                    <p className='font-light'>
                        {level}
                    </p>
                </div>
            </button>
        </>
    );
};

export default LessonSelect;