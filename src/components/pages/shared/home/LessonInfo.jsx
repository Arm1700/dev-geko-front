export default function LessonInfo({Icon,title,count}){
    return(
        <article className="flex-container-content flex p-5 hover:text-secondary hover:border-secondary  transition-colors duration-300 gap-2 border-b text-white flex-col items-center">
          <Icon className="text-7xl" />
          <span className="text-xl font-bold">{count}</span>
          <span>{title}</span>
        </article>
    )
}