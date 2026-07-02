import CustomeCard from "../../../customeComponents/custome-card";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CardModel } from "../../utils/index"
import { FiGift, FiHeadphones, FiLock, FiPackage, FiRefreshCw, FiTruck } from "react-icons/fi";
import features from "../../assets/features.png"

export default function VestaBetter() {
  const navigate = useNavigate();

  const dataLeft: CardModel[] = [
    { id: 1, title: "Quality First", text: "Only the best materials, every time.", icon: <FiPackage size={36} className="th-textBlack" /> },
    { id: 2, title: "Free Shipping", text: "On all orders over $50.", icon: <FiTruck size={36} className="th-textBlack" /> },
    { id: 3, title: "Easy Returns", text: "30-day hassle-free returns.", icon: <FiRefreshCw size={36} className="th-textBlack" /> },
  ];
  const dataRight: CardModel[] = [
    { id: 1, title: "Secure Payment", text: "Your data is always protected.", icon: <FiLock size={36} className="th-textBlack" /> },
    { id: 2, title: "New Arrivals Weekly", text: "Fresh styles dropped every week.", icon: <FiGift size={36} className="th-textBlack" /> },
    { id: 3, title: "24/7 Support", text: "We're here whenever you need us.", icon: <FiHeadphones size={36} className="th-textBlack" /> },
  ];

  const bgStyle = {
    backgroundImage: `url(${features})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",   // stretches to fill both axes
    backgroundPosition: "center",
    opacity: 0.7,
  };

  return (
    <div className="mt-20 mb-10 th-bgGray-100 overflow-x-hidden">
      <Typography
        children="WHY VESTA IS BETTER"
        typeof="h1"
        className="font-Lora th-textBlack text-center text-5xl font-semibold pt-10 cursor-pointer th-textColor"
        onClick={() => navigate("/shop")}
      />
      <div className="grid grid-cols-6 gap-5 w-full h-full relative border-t-[5px] border-black">

        {/* Desktop: absolute full-bleed background */}
        <div
          className="w-full h-full absolute top-0 left-0 md:block hidden"
          style={bgStyle}
        />

        {/* Mobile: inline image row */}
        <div
          className="md:hidden col-span-6 w-full h-48"
          style={{ ...bgStyle, opacity: 1 }}
        />

        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: 3 }}
          className="md:col-span-2 col-span-6 flex-col items-center justify-center z-40"
        >
          <div className="w-full mx-auto flex-col p-5 items-center justify-center content-center">
            {dataLeft.map((item) => (
              <CustomeCard icon={item.icon} title={item.title} text={item.text} key={item.id} />
            ))}
          </div>
        </motion.div>

        <div className="col-span-2 md:flex hidden" />

        <motion.div
          initial={{ x: +200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: 3 }}
          className="md:col-span-2 col-span-6 flex-col items-center justify-center z-40"
        >
          <div className="w-full mx-auto flex-col p-5 items-center justify-center content-center">
            {dataRight.map((item) => (
              <CustomeCard icon={item.icon} title={item.title} text={item.text} key={item.id} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}