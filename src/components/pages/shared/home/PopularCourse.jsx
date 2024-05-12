import {FaExternalLinkAlt} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function PopularCourse({
                                          image,
                                          id,
                                          title,
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
            className="my-5 cursor-pointer rounded-lg  border md:w-[260px] sm:max-w-[40%] sm:h-[400px] md:h-[300px] border-gray"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

        >
            <div
                onClick={() => nav(`/courses/${id}`)}
                style={{
                    backgroundImage: isHovered
                        ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
                        : `url(${image})`,
                    backgroundSize: '100% 100%',
                    width: '100%',
                    height:'65%',
                }}
                className="w-full relative bg-no-repeat bg-cover rounded-t-lg "
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
            <div className='w-[100%] h-[35%] flex justify-center items-center'>
                <p className="text-center hover:text-primary cursor-pointer transition-colors duration-300   text-primaryDark font-roboto-slab  w-[250px]">
                    {title}
                </p>
            </div>
        </article>
    )
}
