import popularCoursesArray from '../../../entities/popularCoursesArray'
import PopularCourse from '../shared/home/PopularCourse'

export default function Courses() {
  return (
    <main className=" lg:px-20 px-5 py-5 flex flex-col">
      <h1 className="text-3xl  font-roboto-slab font-bold text-primeryDark">
        Courses
      </h1>
      <div className="flex content-center lg:px-20 px-5 py-10 flex-wrap lg:justify-between justify-center">
        {popularCoursesArray.map(({ image, id, title, count, price }) => {
          return (
            <PopularCourse
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
    </main>
  )
}
