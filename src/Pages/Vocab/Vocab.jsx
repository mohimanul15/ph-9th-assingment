import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleVoc from '../../Layout/Components/SingleVoc/SingleVoc';
import { GetLocalStorageWord } from '../../LocalStorage/LocalStorage';

const Vocab = () => {

    const [prog, setProg] = useState(0);

    const param = useParams();

    const wordData = useLoaderData();

    const wordLesson = wordData.filter(ele => {
        return ele.lesson_no === parseInt(param.lesson_id)
    })

    const updateLesson = () => {
        console.log('exec');
        const learnLesson = GetLocalStorageWord();
        const currentLessonWId = [...new Set(wordLesson.map(ele => ele.id))];

        const matchItem = currentLessonWId.filter(ele => learnLesson.includes(ele)).length;

        setProg(matchItem);
    }

    useEffect(() => {
        const updateLessonEffect = () => {
            console.log('exec');
            const learnLesson = GetLocalStorageWord();
            const currentLessonWId = [...new Set(wordLesson.map(ele => ele.id))];

            const matchItem = currentLessonWId.filter(ele => learnLesson.includes(ele)).length;

            setProg(matchItem);
        }

        return updateLessonEffect()
    }, [])

    // console.log(wordLesson);

    return (
        <div>
            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 py-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center'>
                    Let's Get Rolling....
                    <br />Lesson - {param.lesson_id}
                </h2>
            </section>

            <section className='my-5 container mx-auto max-h-dvh overflow-y-auto relative'>
                <div>
                    <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl text-center'>
                        Let's Learn {wordLesson.length} Words Here
                    </h3>
                </div>

                <div className='flex items-center gap-2 sticky top-0 bg-white z-10'>
                    Progress: <h3 className='font-bold'>{prog} / {wordLesson.length}</h3>

                    <progress className="progress progress-primary" value={prog} max={wordLesson.length}></progress>
                </div>

                <div className='container my-3 py-4 max-w-6xl mx-auto place-items-center bg-slate-100 rounded-2xl'>
                    {
                        wordLesson.map(ele => {
                            return <SingleVoc dataObj={ele} key={ele.id} updateLesson={updateLesson}></SingleVoc>
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default Vocab;