import CountUp from 'react-countup';
import heroImg from '../../assets/header-hello.png';
import aboutImg from '../../assets/image/about.png';
import whyus1 from '../../assets/image/whyus1.png';
import whyus2 from '../../assets/image/whyus2.png';
import whyus3 from '../../assets/image/whyus3.png';
import whyus4 from '../../assets/image/whyus4.png';
import whyus5 from '../../assets/image/whyus5.png';

const Home = () => {

    const btnHover = (e) => {
        e.target.innerText = 'НАЧНИТЕ СЕЙЧАС';
    }

    const btnOut = (e) => {
        e.target.innerText = 'START NOW';
    }

    return (
        <div>
            <main className='bg-linear-to-br from-blue-600 to-purple-800'>
                <section className='container mx-auto max-w-7xl space-y-10 md:flex md:gap-10 px-3 py-4 md:py-18'>

                    <div className='text-white flex flex-col justify-center text-center md:text-left gap-4 md:gap-12 md:flex-7/12 items-center md:items-baseline'>

                        <h1 className='text-xl md:text-3xl lg:text-6xl font-bold tracking-wide'>
                            Learning is fun and Easy now with Lingo Bingo
                        </h1>

                        <p className='font-medium text-xs md:text-lg max-w-xl'>
                            Deep dive into the new way of learning with our dedicated Lessons and videos that makes your learning language easy and fluent. Unlock the power of language with Lingo Bingo—the fun, fast, and effective way to master new words.
                        </p>

                        <button className='btn btn-primary uppercase text-white text-lg font-bold max-w-fit shadow-2xl shadow-blue-300' onMouseEnter={btnHover} onMouseLeave={btnOut}>Start Now</button>

                    </div>

                    <div className='md:flex-5/12 flex items-center'>
                        <img src={heroImg} alt="" />
                    </div>

                </section>
            </main>

            {/* About section */}
            <section className='container mx-auto max-w-6xl py-8 lg:py-20 flex flex-col md:flex-row max-md:p-4 gap-5'>

                <div className='flex-1/2 max-md:hidden'>
                    <img src={aboutImg} alt="About section Image" />
                </div>

                <div className='flex-1/2 flex flex-col justify-center gap-4'>
                    <h4 className='font-bold text-base md:text-lg uppercase text-neutral-600 text-left max-md:text-center'>About Us</h4>
                    <h2 className='font-extrabold text-black text-xl md:text-2xl lg:text-5xl max-md:text-center'>Master Russian with Confidence</h2>
                    <p className='text-neutral-700 text-xs md:text-lg max-md:text-center max-md:max-w-lg max-md:mx-auto'>Welcome to Lingo Bingo, where we make learning Russian vocabulary effective, engaging, and culturally rich. Founded by language enthusiasts and educators, our mission is to help learners like you unlock the beauty of the Russian language—one word at a time.</p>
                </div>

            </section>

            {/* Why Lingo Bingo */}
            <section className='bg-neutral-50'>
                <div className='max-w-6xl mx-auto place-items-center py-5 md:py-15 px-4'>
                    <div className='pb-8'>
                        <h3 className='font-extrabold text-neutral-900 text-lg md:text-2xl lg:text-4xl max-md:text-center'>Why Learn Russian with Lingo Bingo?</h3>
                    </div>

                    <div className='md:flex py-6'>
                        <div className='flex-1/2 place-items-center'>
                            <img src={whyus1} alt="Science based Learning image" />
                        </div>

                        <div className='flex-1/2 flex flex-col justify-center gap-3'>
                            <h4 className='font-bold text-base md:text-lg uppercase text-neutral-600 text-left max-md:text-center'>Easy Learning</h4>
                            <h2 className='font-extrabold text-neutral-800 text-lg md:text-xl lg:text-3xl max-md:text-center'>Science-Backed Learning That Sticks</h2>
                            <p className='text-neutral-700 text-xs md:text-base max-md:text-center max-md:max-w-lg max-md:mx-auto'>Forget cramming! Our method combines spaced repetition, active recall, and gamification to help you retain vocabulary 3x longer. Lessons adapt to your progress, so you spend time on what you need—not generic word lists.</p>
                        </div>
                    </div>

                    <div className='flex py-6 flex-col-reverse md:flex-row'>
                        <div className='flex-1/2 flex flex-col justify-center gap-3'>
                            <h4 className='font-bold text-base md:text-lg uppercase text-neutral-600 text-left max-md:text-center'>Effortless Learning</h4>
                            <h2 className='font-extrabold text-neutral-800 text-lg md:text-xl lg:text-3xl max-md:text-center'>Pronunciation Made Effortless</h2>
                            <p className='text-neutral-700 text-xs md:text-base max-md:text-center max-md:max-w-lg max-md:mx-auto'>Master tricky Russian sounds with:<br />
                                ✔ Native speaker audio for every word <br />
                                ✔ Slow-play and syllable breakdowns (e.g., "здравствуйте" → "zdra-vstvuy-te") <br />
                                ✔ Voice recording tool to compare your accent</p>
                        </div>

                        <div className='flex-1/2 place-items-center'>
                            <img src={whyus2} alt="Science based Learning image" />
                        </div>
                    </div>

                    <div className='md:flex py-6'>
                        <div className='flex-1/2 place-items-center'>
                            <img src={whyus3} alt="Science based Learning image" />
                        </div>

                        <div className='flex-1/2 flex flex-col justify-center gap-3'>
                            <h4 className='font-bold text-base md:text-lg uppercase text-neutral-600 text-left max-md:text-center'>We Make It Simple</h4>
                            <h2 className='font-extrabold text-neutral-800 text-lg md:text-xl lg:text-3xl max-md:text-center'>Learn Real Russian, Not Textbook Phrases</h2>
                            <p className='text-neutral-700 text-xs md:text-base max-md:text-center max-md:max-w-lg max-md:mx-auto'>We teach high-frequency words and cultural nuances you’ll actually: <br />

                                1. Order борщ like a local <br />

                                2. Text with "лол" (Russian internet slang) <br />

                                3. Navigate public transport confidently <br />
                            </p>
                        </div>
                    </div>

                    <div className='flex py-6 flex-col-reverse md:flex-row'>
                        <div className='flex-1/2 flex flex-col justify-center gap-3'>
                            <h4 className='font-bold text-base md:text-lg uppercase text-neutral-600 text-left max-md:text-center'>Accent Based</h4>
                            <h2 className='font-extrabold text-neutral-800 text-lg md:text-xl lg:text-3xl max-md:text-center'>Perfect Your Russian Accent</h2>
                            <p className='text-neutral-700 text-xs md:text-base max-md:text-center max-md:max-w-lg max-md:mx-auto'>
                                <ul>
                                    <li>
                                        Learn high-frequency words first (master 300 words = understand 65% of daily conversations)
                                    </li>

                                    <li>
                                        Real-life scenario modules: airport navigation, business meetings, dating
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className='flex-1/2 place-items-center'>
                            <img src={whyus4} alt="Science based Learning image" />
                        </div>
                    </div>

                    <div className='md:flex py-6'>
                        <div className='flex-1/2 place-items-center md:place-items-baseline'>
                            <img src={whyus5} alt="Science based Learning image" className='max-md:max-w-3xs' />
                        </div>

                        <div className='flex-1/2 flex flex-col justify-center gap-3'>
                            <h4 className='font-bold text-base md:text-lg uppercase text-neutral-600 text-left max-md:text-center'>Easy Approaches</h4>
                            <h2 className='font-extrabold text-neutral-800 text-lg md:text-xl lg:text-3xl max-md:text-center'>Pronunciation Perfected</h2>
                            <p className='text-neutral-700 text-xs md:text-base max-md:text-center max-md:max-w-lg max-md:mx-auto'>Native Audio Clips: <br />

                                Hear each word spoken by real Russians—not robots. <br />

                                Slow-Play Feature: Break down tricky sounds like "ы" or "щ" with adjustable speed. <br />

                                Record & Compare: Practice speaking and get instant feedback
                            </p>

                            <button className='btn btn-primary uppercase text-white text-lg font-bold max-w-fit shadow-2xl shadow-blue-300 mt-3 max-md:mx-auto'>Let's Start Now</button>

                        </div>
                    </div>
                </div>
            </section>

            {/* Counter Section */}
            <section className='bg-linear-to-br from-blue-600 to-purple-800 py-15'>
                <div className='place-items-center w-full pb-6'>
                    <h2 className='font-extrabold text-white text-lg md:text-2xl lg:text-4xl max-md:text-center'>Our Acheivement</h2>
                </div>

                <div className='max-w-6xl mx-auto flex justify-center'>

                    <div className="md:stats outline-2 p-2 outline-blue-100">
                        <div className="stat place-items-center text-white">
                            <div className="stat-value text-xl md:text-5xl">
                                <CountUp
                                    end={31000}
                                    enableScrollSpy
                                    delay={2}
                                    duration={4.7}
                                    decimal=',' />
                            </div>
                            <div className="stat-title text-white text-base md:text-2xl mt-3">User's</div>
                        </div>

                        <div className="stat place-items-center text-white">
                            <div className="stat-value text-xl md:text-5xl">
                                <CountUp
                                    end={18000}
                                    enableScrollSpy
                                    delay={3}
                                    duration={6.7}
                                    decimal=','
                                    suffix='+' />
                            </div>
                            <div className="stat-title text-white text-base md:text-2xl mt-3">Completed</div>
                        </div>

                        <div className="stat place-items-center text-white">
                            <div className="stat-value text-xl md:text-5xl">
                                <CountUp
                                    end={10}
                                    enableScrollSpy
                                    delay={4}
                                    duration={8.7}
                                    decimal=',' />
                            </div>
                            <div className="stat-title text-white text-base md:text-2xl mt-3">Lesson's</div>
                        </div>

                        <div className="stat place-items-center text-white">
                            <div className="stat-value text-xl md:text-5xl">
                                <CountUp
                                    end={200}
                                    enableScrollSpy
                                    delay={6}
                                    duration={10.7}
                                    decimal=','
                                    suffix='+' />
                            </div>
                            <div className="stat-title text-white text-base md:text-2xl mt-3">Words</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;