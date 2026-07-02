import { Image, Typography } from "antd";
import AboutUs from "../../assets/aboutUs.jpg";

export default function AboutVesta() {
  const description = "Vesta was born from a simple belief — great style should be accessible to everyone. We curate modern clothing and jewelry for men and women who value quality, simplicity, and confidence in what they wear. Every piece in our collection is carefully selected to ensure it meets our standards of quality and style. We believe fashion is not about following trends — it is about expressing who you are. From everyday basics to statement pieces, Vesta has something for every occasion, every mood, and every body. Welcome to fashion, redefined.";
  return (
    <div className="th-bgGray-100">
      <Typography
        children="The Story Behind Vesta"
        typeof="p"
        className="pb-28 th-textBlack pt-10 md:text-6xl text-4xl font-semibold font-Lora md:w-1/2 w-3/4  mx-auto text-center "
      />
      <div className="px-10">
        <hr className="w-full h-[2px] bg-black" />
        <div className="grid grid-cols-2 ">
          <div className="md:col-span-1 col-span-2 py-10 gap-7 flex flex-col md:w-4/5 w-full px-10 order-2 md:order-1">
            <Typography
              typeof="p"
              className="text-base leading-7 text-justify th-textBlack"
              children={description}
            />
          </div>
          <div className="md:col-span-1 col-span-2 order-1 md:order-2">
            <Image
              src={AboutUs}
              alt="about Vesta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

