export default function LessonInfo({image, title}) {
    return (
        <article
            className="flex-container-content flex py-5 md:py-0 hover:text-secondary hover:border-secondary transition-colors duration-300 gap-2  text-white flex-col items-center justify-between ">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={image.startsWith('https') ? image : `https://dev.gekoeducation.com${image}`} alt="Lesson Image"
            className='w-[200px]' />
            <span className="text-lg h-[57.5px] text-center border-b middle:border-b max:border-0">{title}</span>
        </article>
    );
}
