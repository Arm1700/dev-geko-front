import {FaExternalLinkAlt} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function PopularCourse({
                                          gridStyleTF = true,
                                          image,
                                          id,
                                          title,
                                          desc,
                                      }) {
    const nav = useNavigate()
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    // const imageUrl = image.startsWith('http') ? image : `http://127.0.0.1:8000${image}`;

    const imageUrl = image.startsWith('https') ? image : `https://dev.gekoeducation.com${image}`;

    return (
        <article
            className={`my-5 border-gray h-min ${gridStyleTF === true ? "none border rounded-lg" : "sm:flex border-b"}     `}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => nav(`/courses/${id}`)}
                className={`relative bg-no-repeat bg-cover  cursor-pointer ${gridStyleTF === true ? "w-[100%] rounded-t-lg" : "sm:w-[260px] w-full rounded-lg"}`}
                style={{
                    backgroundImage: isHovered
                        ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imageUrl})`
                        : `url(${imageUrl})`,
                    backgroundSize: '100% 100%',
                    aspectRatio: "4 / 3",
                }}
            >
                <FaExternalLinkAlt
                    style={{
                        opacity: isHovered ? '0.8' : '0', // Hide the icon on mouse leave
                        transition: 'opacity 0.3s ease-in-out',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    className='text-pseudo'
                />
            </div>
            <div
                className={`w-[100%] mid:h-full md:h-[150px]   ${gridStyleTF === true ? " items-center py-[30px] px-[20px]" : "w-full py-[30px] sm:pl-10  sm:px-0 sm:py-0 h-[100%]  gap-4"} flex flex-col justify-center `}>
                <p className={`hover:text-primary uppercase font-bold cursor-pointer transition-colors duration-300 
                ${gridStyleTF === true ? "text-custom-15 text-center" : "text-xl"} 
                font-medium text-primaryDark font-roboto-slab`}
                   onClick={() => nav(`/courses/${id}`)}
                >
                    {title}
                </p>
                <p className={`${gridStyleTF === true ? "items-center" : ""}  transition-colors duration-300 text-custom-15 font-medium text-color60 font-roboto`}
                >
                    {gridStyleTF === true ? "" : desc}
                </p>
            </div>
        </article>
    )
}
