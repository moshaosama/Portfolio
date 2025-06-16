import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export const TouchMailData = [
  {
    Icon: <AiOutlineMail className="text-blue-400" size={30} />,
    name: "Email",
    result: "mohamedOSFekry@gmail.com",
    backgroound: "bg-blue-500/20",
  },
  {
    Icon: <FiPhone className="text-purple-400" size={30} />,
    name: "Phone",
    result: "+20 1004365707",
    backgroound: "bg-purple-500/20",
  },
  {
    Icon: <IoLocationOutline className="text-pink-400" size={30} />,
    name: "Location",
    result: "Egypt",
    backgroound: "bg-pink-500/20",
  },
];
