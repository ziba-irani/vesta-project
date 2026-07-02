import { Typography } from "antd";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BagItem from "../../../customeComponents/bagItems/index";
import { IProductsModel } from "../../../src/utils/index";
import DarkMode from "../darkmode";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openBag, setOpenBag] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const handleShowAllProductios = () => {
    navigate("/shop");
    setOpenMenu(false);
  };
  const handleShowAboutPage = () => {
    navigate("/about");
    setOpenMenu(false);
  };
  const handleShowContactPage = () => {
    navigate("/contact");
    setOpenMenu(false);
  };
  const handleNavigationWelcome = () => {
    navigate("/");
    setOpenMenu(false);
  };
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    let total = 0;
    products.map((item: IProductsModel) => {
      total += item.price;
    });
    setTotal(total);
  }, [products]);

  return (
    <>
      <div className="sticky z-50 top-0 shadow-lg">
        <div className="th-bgGray-100 px-10 flex items-center justify-between">
          <Typography
            children="Vesta"
            className="th-textBlack text-5xl py-3 font-bold font-Lora cursor-pointer"
            typeof="h1"
            onClick={() => navigate("/")}
          />
          <div className="md:flex items-center gap-5 hidden">
            <Typography
              children="HOME"
              className="text-xs py-3 th-textBlack hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={() => navigate("/")}
            />
            <Typography
              children="SHOP"
              className="text-xs py-3 th-textBlack hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAllProductios}
            />
            <Typography
              children="ABOUT"
              className="text-xs py-3 th-textBlack  hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAboutPage}
            />
            <Typography
              children="CONTACT US"
              className="text-xs py-3 th-textBlack  hover:text-sm hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowContactPage}
            />
          </div>
          <div className="flex py-3 gap-5 items-center">
            <CgMenu
              size={25}
              className="flex md:hidden cursor-pointer th-textBlack"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
            <div
              className="relative"
              onClick={() => {
                setOpenBag(!openBag);
              }}
            >
              <BsBag size={25} className="th-textBlack cursor-pointer" />
              {products.length > 0 && (
                <div className="w-4 h-4 rounded-full absolute flex items-center justify-center -left-1 -bottom-1 bg-primary-100">
                  <Typography
                    typeof="p"
                    children={products.length}
                    className="!text-sm text-white"
                  />
                </div>
              )}
            </div>
            <DarkMode />
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="fixed inset-0 bg-greenColor z-50 py-14 px-10">
          <div
            className="flex justify-end items-center cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <IoIosCloseCircleOutline size={28} className="text-gray-600" />
          </div>
          <div className="flex-col items-center gap-5">
            <Typography
              children="WELCOME PAGE"
              className="text-lg font-medium py-3 th-textBlack  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleNavigationWelcome}
            />
            <Typography
              children="SHOP"
              className="text-lg font-medium py-3 th-textBlack hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAllProductios}
            />
            <Typography
              children="ABOUT"
              className="text-lg font-medium py-3 th-textBlack  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowAboutPage}
            />
            <Typography
              children="CONTACT US"
              className="text-lg font-medium py-3 th-textBlack  hover:text-xl hover:font-medium cursor-pointer"
              typeof="p"
              onClick={handleShowContactPage}
            />
          </div>
        </div>
      )}
      {openBag && (
        <div className="fixed top-0 right-0 bottom-0 th-bgWhite-200 z-50 py-5 overflow-y-scroll">
          <div
            className="flex justify-between items-center cursor-pointer p-5 border-b-[1px] border-black"
            onClick={() => setOpenBag(false)}
          >
            <Typography
              children="YOUR BAG"
              typeof="p"
              className="text-sm px-5 th-textBlack"
            />
            <IoCloseCircleOutline size={24} className="th-textBlack" />
          </div>
          <div className="flex-col items-center gap-5 w-[400px] h-[80px]  divide-y-2 divide-black">
            {products.map((item: IProductsModel) => (
              <BagItem item={item} key={item.id} />
            ))}
            <div className="w-full flex items-center justify-between px-5 bg-greenColor ">
              <Typography
                children="CHECKOUT:"
                typeof="p"
                className="text-sm font-semibold"
              />
              <Typography
                children={`${total}$`}
                className="text-lg  font-medium py-3"
                typeof="p"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
