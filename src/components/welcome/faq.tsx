import { Typography } from "antd";
import FAQComponent from "../../../customeComponents/faq/index";
import { faqData } from "../../data";
//@ts-ignore
import React from "react";
export default function FAQ() {
  return (
    <div className="p-10 ">
      <Typography
        children="FAQ"
        typeof="h1"
        className="font-Lora th-textBlack text-5xl py-5 font-bold text-center border-b th-BorderBlack"
      />
      {faqData.map((item) => (
        <div key={item.id}>
          <FAQComponent title={item.title} text={item.text} />
        </div>
      ))}
    </div>
  );
}
