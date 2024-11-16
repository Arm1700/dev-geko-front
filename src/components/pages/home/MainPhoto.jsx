import {useState} from "react";

export default function MainPhoto() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="flex uppercase justify-center flex-col text-pseudo overflow-hidden">
            <video
                autoPlay
                muted
                loop
                preload="auto"
                playsInline
                className="md:absolute top-0 left-0 min-w-full md:h-full object-cover pointer-events-none"
                poster={'/images/mainLoad.png'}
                onLoadedData={() => setVideoLoaded(true)}
            >
                <source src={'/images/main.mp4'} type="video/mp4"/>
            </video>


            {!videoLoaded && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Loader...</span>
                </div>
            )}
        </section>
    );
}
