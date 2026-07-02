import { Button, Typography } from "antd";
import header from "../../assets/header.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import React from "react";

export default function Introduction() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen relative">
      {/* Image with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${header})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      />

      {/* Text stays fully visible */}
      <div className="relative z-10 w-full">
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className="h-screen flex flex-col items-center justify-center mx-auto"
        >
          <Typography
            children="Your Style. Your Rules."
            typeof="h2"
            className="th-textBlack text-center font-Lora md:text-6xl text-5xl font-medium w-5/6 md:w-2/3"
          />
          <Typography
            children="Explore curated collections for men and women. From everyday essentials to statement pieces — Vesta brings style and quality together."
            typeof="p"
            className="th-textBlack py-3 text-center font-semibold text-base max-md:w-3/4 md:w-1/2"
          />
          <Button
            className="my-5 max-md:w-1/2 md:w-1/4 py-2 th-bgBlack-100 text-xs th-text-white border-none rounded-md"
            onClick={() => navigate("/shop")}
          >
            SHOP NOW
          </Button>
        </motion.div>
      </div>
    </div>
  );
}