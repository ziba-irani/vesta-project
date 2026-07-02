import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Image, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../src/store/productSlice";
import { toast } from "react-toastify";
import { RootState } from "../../../src/store/index";
//@ts-ignore
import React from "react";
import { IProductsModel } from "../../../src/utils/index";
import { FaArrowRight, FaStar } from "react-icons/fa6";
export default function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { id } = useParams();
  const [product] = useState<IProductsModel>(location.state.productData);
  const selectedProducts = useSelector((state: RootState) => state.products);
  const handleAddToBag = () => {
    const isIncluded = selectedProducts.find(
      (item: IProductsModel) => item.id === product?.id,
    );
    isIncluded !== undefined
      ? toast.warning(
          `${product?.title} has already been successfully added to your bag!`,
          {
            position: "top-left",
            autoClose: 3000,
          },
        )
      : toast.success(
          `${product?.title} has been successfully added to your bag!`,
          {
            position: "top-left",
            autoClose: 3000,
          },
        );
    //@ts-ignore
    dispatch(addProduct({ ...product, count: product?.count + 1 }));
    console.log(isIncluded, "isIncluded");
    if (isIncluded == undefined) {
      const localProduct = localStorage.getItem("products");
      const parsedData = localProduct ? JSON.parse(localProduct) : [];
      const modifiedLocalData = [...parsedData, product];
      localStorage.setItem("products", JSON.stringify(modifiedLocalData));
    }
  };

  return (
    <div className="px-10 py-5 th-bgGray-100">
      <div
        className="flex items-center justify-end gap-1 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <Typography className="th-textBlack">back</Typography>
        <FaArrowRight size={18} className="th-textBlack" />
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        <div className="md:col-span-1 col-span-2 flex items-center justify-center">
          <Image
            src={product?.image}
            className="flex w-full py-5 my-0"
            style={{ maxWidth: "70%", height: "50%" }}
            alt={product?.title}
          />
        </div>
        <div className="md:col-span-1 col-span-2 px-10 flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold font-Lora th-textBlack">
            {product?.title}
          </h1>
          <p className="py-5 md:w-2/3 w-full th-textBlack">
            {product?.description}
          </p>
          <div className="flex items-center gap-1 mb-5">
            <FaStar size={14} className="text-yellow-500" />
            <Typography
              typeof="p"
              children={product?.rating?.rate}
              className="!text-sm th-textBlack font-bold th-textBlack"
            />
          </div>
          <Button
            className="md:w-2/3 py-4 w-full th-bgBlack-100 text-white rounded-none"
            onClick={handleAddToBag}
          >
            ADD TO BAG <span className="px-1">|</span> {`${product?.price}$`}
          </Button>
        </div>
      </div>
    </div>
  );
}
