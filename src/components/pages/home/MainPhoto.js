import img from '../../../images/main.mp4';
import { useState } from "react";

export default function MainPhoto({ text1, text2 }) {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="h-[80vh] flex uppercase justify-center flex-col text-pseudo px-20 relative overflow-hidden">
            <video
                autoPlay
                muted
                loop
                preload="auto"
                className="absolute top-0 left-0 min-w-full min-h-full object-cover pointer-events-none"

                onLoadedData={() => setVideoLoaded(true)} // Обработчик события, когда видео загружено
            >
                <source src={img} type="video/mp4" />
            </video>

            {/* Показать индикатор загрузки до загрузки видео */}
            {!videoLoaded && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Loader...</span>
                </div>
            )}

            <div className="relative z-10">
                {/* Тексты, которые могут быть добавлены */}
                {/*<h5 className="font-roboto-slab text-white no-underline whitespace-no-wrap min-h-0 min-w-0 text-left leading-60 tracking-normal font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl w-[750px] backdrop-filter-none filter-none transform-origin-center opacity-100 translate-x-0 translate-y-0 visible">{text1}</h5>*/}
                {/*<h1 className="font-roboto-slab text-white no-underline whitespace-no-wrap min-h-0 min-w-0 text-left leading-60 tracking-normal font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl w-[700px] backdrop-filter-none filter-none transform-origin-center opacity-100 translate-x-0 translate-y-0 visible">{text2}</h1>*/}
            </div>
        </section>
    );
}
