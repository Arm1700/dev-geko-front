import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";

const contactArray = [
{
  id:1,
  title:'Address Way',
  color:'#2e67f5',
  Icon:MdOutlinePlace,
  description:'1800 Abbot Kinney Blvd. Unit D & E Venice'
},
{
  id:2,
  title:'Contact info',
  color:'#5ebb3e',
  Icon:MdOutlineContactMail,
  description:'Mobile: (+88) - 1990 - 6886 \n Hotline: 1800 - 1102 \n Mail: contact@eduma.com'
},
{
  id:3,
  title:'Work timer',
  Icon:BsStopwatch,
  color:'#ffbf25',
  description:'Monday - Friday: 09:00 - 20:00 \nSunday & Saturday: 10:30 - 22:00  '
}
]

export default contactArray