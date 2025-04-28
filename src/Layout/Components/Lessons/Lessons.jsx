import React from 'react';

const Lessons = ({ lessonData }) => {

    const { id, description, level, title, tags,word_count,icon ,duration_min: time} = lessonData;

    // console.log(lessonData);

    return (
        <>
            <div className="card h-full bg-linear-to-tl from-blue-300 to-neutral-300 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title flex-grow items-baseline">
                        Lesson - {id} : {title}
                    </h2>

                    <p>
                        {description}
                    </p>

                    <hr  className='text-white'/>

                    <div className='flex justify-center w-full items-center'>
                        <p>{level}</p>
                        <p className='text-center'>Words: {word_count}</p>
                        <p className='text-center'>{time} mins</p>
                        <p className='text-end'>{icon}</p>
                    </div>

                    <hr className='text-white'/>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-3 justify-baseline'>
                            {
                                tags.map((ele, idx) => {
                                    return <div key={idx + ele} className='px-3 py-1 bg-[#ffffff55] backdrop-blur-3xl rounded-2xl text-blue-800 font-medium'>{ele}</div>
                                })
                            }
                        </div>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lessons;