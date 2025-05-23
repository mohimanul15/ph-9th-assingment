import { Link } from 'react-router';
import Tags from '../Tags/Tags';
import React, { useEffect, useState } from 'react';
import { GetLocalStorageWord } from '../../../LocalStorage/LocalStorage';

const WordLesson = ({ lessonData, currentLesson }) => {

    const [prog, setProg] = useState(0);

    const lesData = lessonData.filter(ele => {
        return ele.lesson_no === currentLesson;
    })

    const partsOfSpech = [...new Set(lesData.map(ele => ele.part_of_speech))]

    const difficulty = [...new Set(lesData.map(ele => ele.difficulty))]
    // console.log(lesData);

    useEffect(() => {
        const updateLessonEffect = () => {
            const learnLesson = GetLocalStorageWord();
            const currentLessonWId = [...new Set(lesData.map(ele => ele.id))];

            const matchItem = currentLessonWId.filter(ele => learnLesson.includes(ele)).length;

            setProg(matchItem);
        }

        return updateLessonEffect()
    }, [])

    return (
        <div className='flex gap-3 p-5 max-md:flex-col'>

            <div className='place-content-center'>
                <Link to={`/lesson/${currentLesson}`}>
                    <button
                        className='btn btn-secondary bg-slate-700 border-0 outline-0 py-7'>
                        <div className='px-3'>
                            <h4 className='text-base md:text-lg font-bold '>
                                Lesson - {currentLesson}
                            </h4>
                            <p className='font-light'>
                                word - {lesData.length}
                            </p>
                        </div>
                    </button>
                </Link>
            </div>

            <div className='bg-indigo-950 p-4 rounded-2xl text-white'>
                <div>
                    <h4 className='text-lg md:text-2xl '>What We Will be Learning Here</h4>
                </div>
                <div className='p-1'>
                    <div className='flex flex-wrap items-center'>
                        {
                            partsOfSpech.map((ele,idk) => <Tags tags={ele} key={idk}></Tags>)
                        }
                    </div>

                    <div className='my-4'>
                        Words: {lesData.length}
                    </div>

                    <div className='flex flex-wrap items-center my-3'>
                        Understanding Level:
                        {
                            difficulty.map((ele,idk) => <Tags tags={ele} key={idk}></Tags>)
                        }
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-between'>
                    Progress: 
                        <progress 
                            className="progress progress-accent" 
                            value={prog} 
                            max={lesData.length}>
                            </progress>

                    {prog} / {lesData.length}
                </div>
            </div>
        </div>
    );
};

export default WordLesson;