import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router';

const ErrorLayout = () => {
    return (
        <div className='w-full'>
            <DotLottieReact
                src="https://lottie.host/dba4c544-ece7-47bc-8c43-40bc71f0776d/kOmyzH382x.lottie"
                loop
                autoplay
            />

            <div className='w-full flex items-center justify-center'>
                <Link to={'/'}>
                    <button className='btn btn-primary'>
                        Back To Homepage
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorLayout;