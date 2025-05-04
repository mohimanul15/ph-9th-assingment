import React, { useEffect, useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import Tags from '../Tags/Tags';
import { GetLocalStorageWord, SetLocalStorageWord } from '../../../LocalStorage/LocalStorage';

const SingleVoc = ({ dataObj, updateLesson}) => {

    const [learn, setLearn] = useState(false);

    const { id,
        word,
        meaning,
        difficulty,
        part_of_speech: pos,
        pronunciation: pron,
        when_to_say: wts,
        example
    } = dataObj;

    const example1st = example.split('(')[0];
    const exampleMiddle = example.split('(')[1].split(')')[0];
    const exampleLast = example.split(')')[1];

    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ru-RU'; // Russian
        window.speechSynthesis.speak(utterance);

        // Setting the data to localStorage
        SetLocalStorageWord(id);
        setLearn(true);
        updateLesson();
    }

    useEffect(() => {
        const oneExecution = () =>{
            const prevLearn = GetLocalStorageWord();
            if(prevLearn.includes(id)){
                setLearn(true);
            }       
        }

        return oneExecution;
    },[])

    // console.log(dataObj);
    return (
        <div
            className={`my-2 rounded-2xl border-2 border-blue-500 flex flex-row gap-4 px-4 items-center justify-center ${learn?'bg-gray-100':'bg-blue-100'} hover:shadow-2xl hover:duration-700 relative`}>
            <div className="max-w-fit p-4 m-2 rounded-2xl border-2 border-blue-500 bg-white">
                <h2
                    className="text-xl font-semibold flex items-center gap-3 cursor-pointer">
                    <HiSpeakerWave onClick={() => pronounceWord(word)} /> {word}
                </h2>

                <p className='text-center mt-3'>
                    {meaning}
                </p>
            </div>

            <div className='py-3'>

                <div className='flex gap-3 items-center'>
                    Difficulty:
                    <div className='text-white'>
                        <Tags tags={difficulty}>
                        </Tags>
                    </div>
                </div>

                <div>
                    Pronunciation: <span className='font-bold'>{pron}</span>
                </div>

                <div className='flex gap-3 items-center'>
                    Part of Speech:
                    <div className='text-white'>
                        <Tags tags={pos}>
                        </Tags>
                    </div>
                </div>

                <div>
                    When to Say: <span className='font-bold'>{wts}</span>
                </div>

                <div className='shadow-2xl my-3 border-2 border-amber-50 p-2 rounded-2xl bg-gray-200'>
                    <div className='flex items-center gap-2'>
                        Example:
                        <span className='font-bold flex items-center gap-2 cursor-pointer'>
                            <HiSpeakerWave onClick={() => pronounceWord(example1st)} /> {example1st}
                        </span>
                    </div>

                    <div className='pt-3'>
                        <div>
                            Pronunciation:
                            <span className='font-bold ml-2'>
                                {exampleMiddle}
                            </span>
                        </div>

                        <div>
                            Meaning:
                            <span className='font-bold'>
                                {exampleLast}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='absolute left-0 top-0'>
                <h2 className='text-4xl font-bold opacity-40 rotate-12'>
                    {id.split('u')[1]}
                </h2>
            </div>
        </div>
    );
};

export default SingleVoc;