import React from 'react';
import { useLoaderData } from 'react-router';
import WordLesson from '../../Layout/Components/WordLesson/WordLesson';

const Lesson = () => {

    const data = useLoaderData();

    const lesTotal = [...new Set(data.map(ele => ele.lesson_no))];

    // console.log(data)

    return (
        <div>
            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 py-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center'>
                    Let's the Learning Journey Begin
                </h2>
            </section>

            {/* Video Loader Selection */}
            <section className='py-12 place-items-center max-w-6xl mx-auto'>
                <h3 className='font-extrabold text-neutral-900 text-lg md:text-2xl lg:text-4xl max-md:text-center'>
                    Start Learning the Russian Vocabulary
                </h3>

                <div className='m-5 container'>
                    <div className='bg-slate-200 rounded-xl p-4 w-full place-items-center'>
                        {
                            lesTotal.map((ele,idk) => <WordLesson lessonData={data} currentLesson={ele} key={idk}></WordLesson>)
                        }
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Lesson;