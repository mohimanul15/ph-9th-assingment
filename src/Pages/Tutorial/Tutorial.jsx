import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router';
import LessonSelect from '../../Layout/Components/LessonSelect/LessonSelect';
import Video from '../../Layout/Components/Video/Video';

const Tutorial = () => {

    const data = useLoaderData();
    console.log(data.lessons)

    const [current, setCurrent] = useState(data.lessons[0]);

    const clickHandle = (clickData) =>{
        setCurrent(data.lessons[clickData-1]);
    }

    // useEffect(()=>{
    //     setCurrent(data.lessons[0])
    // },[])

    return (
        <div>
            <Helmet>
                <title>Tutorial | Lingo Bingo</title>
            </Helmet>

            <section className='bg-linear-to-br from-blue-800 to-purple-900 py-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center'>
                    Amazing Tutorials
                </h2>
            </section>

            {/* Video Loader Selection */}
            <section className='py-12 place-items-center max-w-6xl mx-auto'>
                <h3 className='font-extrabold text-neutral-900 text-lg md:text-2xl lg:text-4xl max-md:text-center'>
                    Select the Lesson for Videos
                </h3>

                <div className='my-8 flex flex-col md:flex-row w-full gap-3 p-2'>
                    <div className='flex flex-col gap-3 flex-1/4 md:max-w-fit max-md:max-h-80 max-md:overflow-y-auto'>
                        {
                            data.lessons.map(ele => <LessonSelect lessonData={ele} clickHandle={clickHandle} key={ele.id}></LessonSelect>)
                        }
                    </div>

                    <div className='flex-3/4 place-items-center bg-slate-300 rounded-xl'>
                        <h3 className='text-lg md:text-xl lg:text-3xl font-medium'>
                            Video tutorials for Lesson - {current.id}
                        </h3>

                        <div>
                            <Video dataVid={current}></Video>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tutorial;