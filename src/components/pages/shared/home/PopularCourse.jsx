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
    return (
        <article
            className={`my-5 border-gray h-min ${gridStyleTF === true ? "none border rounded-lg" : "flex border-b"} mb-[30px]`}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => nav(`/courses/${id}`)}
                className={`relative bg-no-repeat bg-cover  cursor-pointer ${gridStyleTF === true ? "w-[100%] rounded-t-lg" : "w-[260px] rounded-lg"}`}
                style={{
                    backgroundImage: isHovered
                        ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
                        : `url(${image})`,
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
                className={`w-[100%] ${gridStyleTF === true ? "h-[35%] items-center" : "h-[100%] pl-10 gap-4"} py-[30px] px-[20px] flex flex-col justify-center `}>
                <p className={`hover:text-primary cursor-pointer transition-colors duration-300 
                ${gridStyleTF === true ? "text-custom-15 text-center" : "text-xl"} 
                font-medium text-primaryDark font-roboto-slab`}
                   onClick={() => nav(`/courses/${id}`)}
                >
                    {title}
                </p>
                <p className={`${gridStyleTF === true ? "items-center" : ""} transition-colors duration-300 text-custom-15 font-medium text-color60 font-roboto`}
                >
                    {gridStyleTF === true ? "" : desc}
                </p>
            </div>
        </article>
    )
}
