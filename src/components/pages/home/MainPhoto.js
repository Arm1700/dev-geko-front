import img from '../../../images/main.mp4';

export default function MainPhoto({ text1, text2 }) {
    return (
        <section className="h-[80vh] flex uppercase justify-center flex-col text-pseudo px-20 relative overflow-hidden">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 min-w-full min-h-full object-cover pointer-events-none" // Отключаем взаимодействие
                poster="https://www.shutterstock.com/shutterstock/videos/1093083365/thumb/9.jpg?ip=x480"
            >
                <source src={img} type="video/mp4" />
            </video>
            <div className="relative z-10">
                {/*<h5 className="font-roboto-slab text-white no-underline whitespace-no-wrap min-h-0 min-w-0 text-left leading-60 tracking-normal font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl w-[750px] backdrop-filter-none filter-none transform-origin-center opacity-100 translate-x-0 translate-y-0 visible">{t(text1)}</h5>*/}
                {/*<h1 className="font-roboto-slab text-white no-underline whitespace-no-wrap min-h-0 min-w-0 text-left leading-60 tracking-normal font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl w-[700px] backdrop-filter-none filter-none transform-origin-center opacity-100 translate-x-0 translate-y-0 visible">{t(text2)}</h1>*/}
            </div>
        </section>
    );
}
