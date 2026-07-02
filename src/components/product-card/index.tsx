import { Image, Tooltip, Typography } from "antd";
//@ts-ignore
import React from "react";
import { FaStar } from "react-icons/fa6";
import useCustomNavigate from "../../customHook/navigate";
import { IProductsModel } from "../../../src/utils/index"

interface IProps {
  item: IProductsModel;
}

export default function ProductCard({ item }: IProps) {
  const { navigateToProduct } = useCustomNavigate();
  const navigateToProductDetail = (item: IProductsModel) => {
    navigateToProduct(item);
  };

  return (
    <div
      className="col-span-1 th-bgWhite-100 rounded-xl shadow-md cursor-pointer flex flex-col"
      onClick={() => navigateToProductDetail(item)}
    >
      <div className="flex flex-col flex-1 p-4">
        {/* Image */}
        <div className="flex justify-center mb-3">
          <Image
            src={item.image}
            style={{ width: "140px", height: "200px", objectFit: "contain" }}
            alt={item.title}
          />
        </div>

        {/* Title — fixed height so all cards align below */}
        <Tooltip title={item.title}>
          <div className="h-[60px] overflow-hidden mb-3">
            <Typography
              typeof="p"
              children={
                item.title?.length > 50
                  ? item.title.substring(0, 50) + "..."
                  : item.title
              }
              className="!text-sm th-textBlack font-bold leading-5"
            />
          </div>
        </Tooltip>

        {/* Price */}
        <div className="flex items-center gap-1 mb-2">
          <Typography
            typeof="p"
            children="Price:"
            className="!text-sm text-gray-500"
          />
          <Typography
            typeof="p"
            children={`${item.price}$`}
            className="!text-sm th-textBlack font-bold"
          />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <FaStar size={14} className="text-yellow-500" />
          <Typography
            typeof="p"
            children={item.rating.rate}
            className="!text-sm th-textBlack font-bold"
          />
        </div>
      </div>
    </div>
  );
}
