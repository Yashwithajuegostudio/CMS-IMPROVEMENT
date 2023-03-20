import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Img from "../Img";
export const SidebarData = [
  {
    title: "User Management",
    path: "/",
    icon: <AiIcons.AiOutlineUser />,
  },

  {
    title: "Global Room Management",
    path: "/GlobalRoomManagement",
    icon: (
      <Img
        src={`assets/room_managemnet_icon.png`}
        alt={"room management"}
        className="room_managemnet_icon"
      />
    ),
  },
];
