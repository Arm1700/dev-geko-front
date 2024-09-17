import {TfiWrite} from "react-icons/tfi";
import {TbSchool} from "react-icons/tb";
import {PiStudentBold} from "react-icons/pi";
import {HiOutlineGlobeAsiaAustralia} from "react-icons/hi2";
import {MdCastForEducation} from "react-icons/md";

export default function LessonInfo({Icon, title, count}) {
    const iconMap = {
        TfiWrite: TfiWrite,
        TbSchool: TbSchool,
        PiStudentBold: PiStudentBold,
        HiOutlineGlobeAsiaAustralia: HiOutlineGlobeAsiaAustralia,
        MdCastForEducation: MdCastForEducation,
    };
    const IconComponent = iconMap[Icon];

    if (!IconComponent) {
        console.error(`Icon "${Icon}" not found.`);
        return null;
    }

    return (
        <article
            className="flex-container-content flex p-5 hover:text-secondary hover:border-secondary  transition-colors duration-300 gap-2 border-b text-white flex-col items-center middle:border-b max:border-0">
            <IconComponent className="text-custom-80"/>
            <span className="text-custom-28 font-bold">{count}</span>
            <span className="text-lg">{title}</span>
        </article>
    )
}