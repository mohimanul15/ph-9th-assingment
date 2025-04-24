import heroImg from '../../assets/header-hello.png';

const Home = () => {
    return (
        <div>
            <main className='bg-linear-to-br from-blue-600 to-purple-800'>
                <section className='container mx-auto max-w-7xl space-y-10 md:flex md:gap-10 px-3 py-4 md:py-18'>

                    <div className='text-white flex flex-col justify-center text-center md:text-left gap-4 md:gap-12 md:flex-7/12 items-center md:items-baseline'>

                        <h1 className='text-lg md:text-3xl lg:text-6xl font-bold tracking-wide'>
                            Learning is fun and Easy now with Lingo Bingo
                        </h1>

                        <p className='font-medium text-xs md:text-lg max-w-xl'>
                            Deep dive into the new way of learning with our dedicated Lessons and videos that makes your learning language easy and fluent. Unlock the power of language with Lingo Bingo—the fun, fast, and effective way to master new words.
                        </p>

                        <button className='btn btn-primary text-white text-lg font-bold max-w-fit shadow-2xl shadow-blue-300'>Start Now</button>

                    </div>

                    <div className='md:flex-5/12 flex items-center'>
                        <img src={heroImg} alt="" />
                    </div>

                </section>
            </main>
        </div>
    );
};

export default Home;