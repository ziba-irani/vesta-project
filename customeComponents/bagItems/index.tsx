import { Image, Typography } from "antd";
import { IProductsModel } from "../../src/utils/index";
import { useDispatch } from "react-redux";
import {
  removeProduct,
} from "../../src/store/productSlice";
//@ts-ignore
import React from "react";
interface IProps {
  item: IProductsModel;
}
export default function BagItem({ item }: IProps) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeProduct(item));
    const localProduct = localStorage.getItem("products");
    const parsedData = localProduct ? JSON.parse(localProduct) : [];
    const modifiedLocalData = parsedData?.filter((product: IProductsModel)=>product.id !== item.id);
    localStorage.setItem("products", JSON.stringify(modifiedLocalData));
  };
  return (
    <div className="flex w-full th-bgGray-100 px-10 py-5 ">
      <Image
        src={item.image}
        style={{ width: "100px", height: "100px" }}
        alt={item.title}
      />
      <div className="flex flex-col px-5">
        <Typography
          children={item.title}
          typeof="p"
          className="px-4 text-xl font-medium font-Lora th-textBlack"
        />
        <div className="flex w-full justify-between items-center">
          <Typography
            children="remove"
            typeof="p"
            className="font-medium py-5 cursor-pointer th-textBlack"
            onClick={handleRemove}
          />
          <Typography
            children={`${item.price}$`}
            typeof="p"
            className=" font-medium th-textBlack"
          />
        </div>
      </div>
    </div>
  );
}
