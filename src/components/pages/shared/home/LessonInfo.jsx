export default function LessonInfo({image, title}) {
    return (
        <article
            className="hover-effect flex-container-content flex py-5 md:py-0 transition-colors duration-300 gap-2 text-white flex-col items-center justify-between shadow-2xl"
        >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
                src={image && typeof image === 'string' && image.startsWith('https')
                    ? image
                    : image
                        ? `https://dev.gekoeducation.com${image}`
                        : 'https://eduma.thimpress.com/wp-content/uploads/2022/07/thumnail-cate-7-170x170.png'
                }
                alt={title}  // Улучшено описание alt для доступности
                className="w-[200px] text-primary" // Добавляем класс hover-effect
            />
            <span
                className="text-lg h-[57.5px] text-center hover:text-primary w-full hover:border-primary border-b middle:border-b max:border-0">
                {title}
            </span>
        </article>
    );
}
