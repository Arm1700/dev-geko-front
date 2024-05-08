import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'

export default function PopularCourse({
                                          image,
                                          id,
                                          title,
                                          count = [0, 0],
                                          price,
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
            // max-w-[250px]
            className="my-5 cursor-pointer rounded-lg lg:mx-1  border min-w-[250px] h-[300px]  border-gray "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                onClick={() => nav(`/courses/${id}`)}
                style={{
                    backgroundImage: isHovered
                        ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
                        : `url(${image})`,
                    width:'250px'
                }}
                className="w-full relative bg-no-repeat bg-cover rounded-t-lg h-[65%]"
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
            <p className="text-center hover:text-primary cursor-pointer transition-colors duration-300 font-roboto-slab px-5 text-parimaryDark font-extrabold py-6 w-[250px]">
                {title}
            </p>
            <div className="flex flex-col justify-between items-center ">
            </div>
        </article>
    )
}
