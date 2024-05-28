import popularCoursesArray from '../../../entities/popularCoursesArray';
import {coursesArray} from "../../../entities/coursesArray";
import PopularCourse from '../shared/home/PopularCourse';
import {useNavigate, useParams} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import {useState, useEffect} from 'react';

export default function Courses() {
    const [gridStyleTF, setGridStyle] = useState(true);
    const [coursesPerPage, setCoursesPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const nav = useNavigate();
    const {id: categoryId} = useParams()
    const handleCategoryClick = (id) => {
        nav(`/course-category/${id}`);
    };

    const filteredCourses = categoryId
        ? popularCoursesArray.filter(course => course.category.toString() === categoryId)
        : popularCoursesArray;

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page when the category changes
        setCoursesPerPage(3)
    }, [categoryId]);

    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = Math.min(startIndex + coursesPerPage, filteredCourses.length);
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const paginatedCourses = () => {
        return filteredCourses.slice(startIndex, endIndex);
    };

    const handlePageChange = (data) => {
        setCurrentPage(data.selected + 1);
    };

    const renderPagination = () => (
        <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            pageCount={totalPages}
            onPageChange={handlePageChange}
            breakLabel="..."
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
            // Apply custom CSS classes
            className={'pagination'}
            pageClassName={'pagination__item'}
            pageLinkClassName={'pagination__link'}
            activeLinkClassName={'pagination__link--active'}
            previousClassName={'pagination__previous'}
            nextClassName={currentPage === totalPages ? 'pagination__next disabled' : 'pagination__next'} // Disable next on last page
        />
    );
    let gridStyle = gridStyleTF === true ? 'grid-cols-3' : 'grid-cols-1';
    return (
        <main className="max:px-5 max-w-[1200px] mx-auto py-5 flex flex-col">
            <h1 className="text-3xl font-roboto-slab font-bold text-primaryDark">
                Courses
            </h1>
            <div className="flex gap-5 py-10">
                <div className="w-[80%]">
                    <div className="flex gap-3 items-center">
                        <i
                            className={`fa fa-th-large text-xl hover:text-primary cursor-pointer ${gridStyleTF === true ? 'text-primary' : 'text-color66'}`}
                            aria-hidden="true"
                            onClick={() => setGridStyle(true)}
                        ></i>
                        <i
                            className={`fa fa-list-ul text-lg hover:text-primary cursor-pointer ${gridStyleTF === false ? 'text-primary' : 'text-color66'}`}
                            aria-hidden="true"
                            onClick={() => setGridStyle(false)}
                        ></i>
                        <p className="text-color66 text-custom-15">
                            {`Showing ${startIndex + 1}-${endIndex} of ${filteredCourses.length} results`}
                        </p>
                    </div>
                    <div
                        className={`opacityPopularCourse content-center grid ${gridStyle} ${gridStyleTF === true ? 'gap-10' : 'gap-0'} py-6`}>
                        {paginatedCourses().map(({image, id, title, count, desc, price}) => {
                            return (
                                <PopularCourse
                                    gridStyleTF={gridStyleTF}
                                    desc={desc}
                                    image={image}
                                    title={title}
                                    count={count}
                                    price={price}
                                    key={id}
                                    id={id}
                                />
                            )
                        })}
                    </div>
                    {renderPagination()}
                </div>
                <div className="w-[20%] h-[500px] px-[20px] border-l" style={{
                    position: 'sticky',
                    top: `10px`,
                }}>
                    <h1 className="text-lg font-roboto-slab font-bold text-primaryDark">
                        ALL COURSES
                    </h1>
                    {coursesArray.sort((a, b) => a.text.localeCompare(b.text)).map(({image, id, text}) => (
                        <p
                            onClick={() => handleCategoryClick(id)}
                            className={`textHover cursor-pointer text-custom-15 py-[5px] ${ +categoryId === id ? "text-primary": "text-primaryDark"}`}
                            key={id}>{text}</p>
                    ))}
                </div>
            </div>
        </main>
    );
}
