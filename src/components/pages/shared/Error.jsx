// Error404.jsx
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Error404 = () => {
    const nav = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const goBack = () => {
        nav('');
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl font-roboto-slab font-bold mb-4 self-start px-20 pt-7 text-primaryDark">404
                Page</h1>
            <div className="flex p-20 justify-center gap-10 items-center">
                <img className="w-[480px] h-[400px]"
                     src="https://eduma.thimpress.com/wp-content/uploads/2022/07/404-error.png" alt=""/>
                <div className="w-[430px]">
                    <p className="text-7xl font-roboto-slab">
                        404
                        <span className="text-primary text-bold"> ERROR!</span>
                    </p>
                    <p className="text-custom-15 text-color60">
                        Sorry, we can't find the page you are looking for. Please go to
                        <span className="text-primary cursor-pointer font-bold"
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              onClick={goBack}
                              style={{borderBottom: isHovered ? '2px solid #FFB606' : 'none'}}
                        > Home.</span>
                    </p>
                </div>
                {/*<button*/}
                {/*    className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"*/}
                {/*    onClick={goBack}*/}
                {/*>*/}
                {/*    Go Back*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default Error404;
