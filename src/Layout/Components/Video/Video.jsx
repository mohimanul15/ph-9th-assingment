import React from 'react';
import YouTube from 'react-youtube';

const Video = ({ dataVid }) => {

    // console.log(dataVid);

    const options = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
            controls: 1,
        },
    };

    return (
        <div className='my-4'>

            <div className='w-full p-2'>
                <div className='flex flex-col md:flex-row my-5 gap-4'>
                    <div className='flex-1/3 py-5'>
                        <h4 className='font-news text-lg font-bold'>
                            Title: {dataVid.videos[0].title}
                        </h4>

                        <p>
                            Description: {dataVid.videos[0].channel}
                            <b> {dataVid.videos[0].key_moment}</b>
                        </p>
                    </div>

                    <div className='rounded-2xl overflow-clip w-full flex-2/3'>
                        <YouTube
                            videoId={dataVid.videos[0].id}
                            opts={options}
                            className='opacity-90'
                            style={{ aspectRatio: 16 / 9 }}
                        >
                        </YouTube>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row my-5 gap-4'>

                    <div className='flex-1/3 py-5'>
                        <h4 className='font-news text-lg font-bold'>
                            Title: {dataVid.videos[1].title}
                        </h4>

                        <p>
                            Description: {dataVid.videos[1].channel}
                            <b> {dataVid.videos[1].key_moment}</b>
                        </p>
                    </div>

                    <div className='rounded-2xl overflow-clip w-full flex-2/3'>
                        <YouTube
                            videoId={dataVid.videos[1].id}
                            opts={options}
                            className='opacity-90'
                            style={{ aspectRatio: 16 / 9 }}
                        >
                        </YouTube>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Video;  