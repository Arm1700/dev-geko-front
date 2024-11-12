export default function LessonInfo({ image, title }) {
    return (
        <article
            className="flex-container-content flex py-5 hover:text-secondary hover:border-secondary transition-colors duration-300 gap-2 border-b text-white flex-col items-center middle:border-b max:border-0">
            <img src={image.startsWith('https') ? image : `https://dev.gekoeducation.com${image}`} alt="Lesson Image" className='image'/>
            <span className="text-lg">{title}</span>
        </article>
    );
}
