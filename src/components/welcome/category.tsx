import { Image, Typography } from "antd";
import { categoryDataModel } from "../../../src/utils/index";
import { categoryData } from "../../data";
import useCustomNavigate from "../../customHook/navigate";

export default function Category() {
  const {navigateToCategory} = useCustomNavigate();
  const handleNaviateTocategory = (value: string) => {
    navigateToCategory(value);
  }
  return (
    <div className="p-10 th-bgGray-100">
      <Typography
        children="Shop By Category"
        typeof="h2"
        className="text-center text-5xl font-bold py-10 font-Lora th-textBlack"
      />
      <div className="grid md:grid-cols-3 gap-4 grid-col-1">
        {categoryData.map((item: categoryDataModel) => (
          <div
            className="col-span-1 relative group"
            onClick={() => handleNaviateTocategory(item.title)}
            key={item.id}
          >
            <Image className="!w-full !h-[450px]" src={item.image} alt={item.title} />
            <Typography
              children={item.title}
              className={`absolute top-3 left-5 ${
                item.id === 2 ? "text-white" : "th-textBlack"
              } text-xl font-base`}
            />
            <div className="cursor-pointer font-medium absolute left-0 right-0 bottom-1 w-full py-3 th-bgBlack-100 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              SHOP NOW
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
