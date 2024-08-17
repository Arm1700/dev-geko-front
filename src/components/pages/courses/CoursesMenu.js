import {Link} from 'react-router-dom';
import {FiX} from 'react-icons/fi';
import {coursesArray} from "../../../entities/coursesArray";

export default function CoursesMenu({isOpen, toggleMenu, categoryId}) {
    return (
        <div
            className={`fixed capitalized bg-pseudo w-[50%] inset-0 z-50 overflow-y-auto transition-transform duration-300 transform ${
                isOpen ? 'translate-x-full' : 'translate-x-[200%]'
            }`}
        >
            <div className="bg-gray-400 w-full h-[60px] flex items-center justify-between pl-3 pr-5">
                <h1 className="text-primary min-w-max text-2xl font-roboto-slab font-bold">
                    Categories
                </h1>
                <button onClick={toggleMenu}>
                    <FiX className="w-6 h-6"/>
                </button>
            </div>
            <div>
                {coursesArray.sort((a, b) => a.text.localeCompare(b.text)).map(({id, text}) => (
                    <Link
                        onClick={toggleMenu}
                        className={`block px-3 py-2 rounded-md hover:text-primary font-bold ${+categoryId === id ? "text-primary" : "text-color12"}`}
                        key={id} to={`/course-category/${id}`}>
                        {text}
                    </Link>
                ))}
            </div>
        </div>
    );
}
