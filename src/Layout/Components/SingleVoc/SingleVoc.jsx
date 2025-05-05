import React, { useEffect, useState } from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import Tags from '../Tags/Tags';
import { GetLocalStorageWord, SetLocalStorageWord } from '../../../LocalStorage/LocalStorage';

const SingleVoc = ({ dataObj, updateLesson, wordLesson }) => {

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
        const oneExecution = () => {
            const prevLearn = GetLocalStorageWord();
            if (prevLearn.includes(id)) {
                setLearn(true);
            }
        }

        return oneExecution;
    }, [])

    const bgColorProp = () => {
        if (difficulty == 'easy') {
            return 'bg-blue-100 bg-opacity-40';
        }
        else if (difficulty == 'medium') {
            return 'bg-yellow-100 bg-opacity-40';
        }
        else {
            return 'bg-red-100 bg-opacity-40';
        }
    }

    const openModal = (dataId) => {
        const modal = document.getElementById('open_modal');

        const modWord = wordLesson.find(ele => ele.id === dataId);

        const example1st = modWord.example.split('(')[0];
        const exampleMiddle = example.split('(')[1].split(')')[0];
        const exampleLast = example.split(')')[1];


        document.getElementById('wId').innerText = modWord.word;
        document.getElementById('wMean').innerText = modWord.meaning;
        document.getElementById('wTs').innerText = modWord.when_to_say;
        document.getElementById('ex1st').innerText = example1st;
        document.getElementById('exMid').innerText = exampleMiddle;
        document.getElementById('exLst').innerText = exampleLast;

console.log(modWord);

modal.showModal();
    }

// console.log(dataObj);
return (
    <div
        className={`my-2 rounded-2xl border-2 border-blue-500 flex flex-row gap-4 px-4 items-center justify-center ${learn ? 'bg-gray-100' : bgColorProp()} hover:shadow-2xl hover:duration-700 relative`}>
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

            <div className='py-3'>
                <button
                    className='btn btn-primary text-base font-bold uppercase'
                    onClick={() => openModal(id)}>
                    When to Say
                </button>
            </div>

        </div>

        <div className='absolute left-0 top-0'>
            <h2 className='text-4xl font-bold opacity-40 rotate-12'>
                {id.split('u')[1]}
            </h2>
        </div>

        <dialog id="open_modal" className="modal backdrop-blur-xs">
            <div className="modal-box bg-slate-200">

                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className='flex flex-col items-center w-full'>

                    <h3 className="font-bold text-lg" id='wId'>

                    </h3>

                    <p className="py-4" id='wMean'>

                    </p>

                    <div>
                        When to Say: <span className='font-bold' id='wTs'>

                        </span>
                    </div>

                    <div className='shadow-2xl my-3 border-2 border-amber-50 p-2 rounded-2xl bg-gray-200'>
                        <div className='flex items-center gap-2 px-2'>
                            Example:
                            <span className='font-bold flex items-center gap-2 cursor-pointer' id='ex1st'>

                            </span>
                        </div>

                        <div className='pt-3 px-2'>
                            <div>
                                Pronunciation:
                                <span className='font-bold ml-2' id='exMid'>

                                </span>
                            </div>

                            <div>
                                Meaning:
                                <span className='font-bold' id='exLst'>

                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </dialog>
    </div>
);
};

export default SingleVoc;