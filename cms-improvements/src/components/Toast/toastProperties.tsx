import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from "react-icons/fi";
import { AppColors } from "../../lib/constant";

export const TOAST_PROPERTIES = [
  {
    id: Math.floor(Math.random() * 101 + 1),
    backgroundColor: `${AppColors.LightGreen}`,
    icon: <FiCheck></FiCheck>,
    type: "success",
    title: "success",
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    backgroundColor: `${AppColors.LightRed}`,
    icon: <FiXCircle></FiXCircle>,
    type: "error",
    title: "error",
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    backgroundColor: `${AppColors.LightBlue}`,
    icon: <FiInfo></FiInfo>,
    type: "info",
    title: "info",
  },
  {
    id: Math.floor(Math.random() * 101 + 1),
    backgroundColor: `${AppColors.LightYellow}`,
    icon: <FiAlertCircle></FiAlertCircle>,
    type: "warning",
    title: "warning",
  },
];
