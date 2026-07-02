import { Button, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "../product-card/index";
import { useLocation } from "react-router-dom";
import { useLazyGetProductsQuery } from "../../store/api";
import CardSkeleton from "../skeleton/card-skeleton";

export default function Shop() {
  const location = useLocation();
  const [categoryType, setCategoryType] = useState<string>(
    location?.state && location?.state.category?.length > 0
      ? location?.state.category
      : "all",
  );
  const [searchValue, setSearchValue] = useState("");
  const [fetchProducts, { data, isLoading, isFetching }] =
    useLazyGetProductsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);
  const filters = [
    { id: 1, name: "all" },
    { id: 2, name: "men's clothing" },
    { id: 3, name: "women's clothing" },
    { id: 4, name: "jewelery" },
    { id: 5, name: "electronics" },
  ];

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className="w-full py-10 th-bgGray-100">
      <div className="text-center">
        <Typography
          children="Discover your style."
          typeof="h1"
          className="text-5xl font-semibold font-Lora th-textBlack"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center pt-5 gap-3">
        {filters?.map((filter) => {
          return (
            <Button
              className={`px-6 py-5 border-none shadow-lg rounded-full ${
                categoryType === filter.name && "bg-greenColor"
              }`}
              onClick={() => {
                setCategoryType(filter.name);
              }}
            >
              {filter.name}
            </Button>
          );
        })}
      </div>
      {/* search name */}
      <div className="flex items-center justify-center py-5 border-b-[1px] border-black">
        <div className="md:w-1/3 w-full px-5">
          <Input
            placeholder="Product Name:"
            value={searchValue}
            onChange={(e) => {
              handleChangeSearchValue(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-5">
        {(isLoading || isFetching) &&
          Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)}
        {data && data.length > 0 && categoryType === "all"
          ? data
              ?.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((item) => <ProductCard key={item.id} item={item} />)
          : data
              ?.filter(
                (item) =>
                  item.category.includes(categoryType) &&
                  item.title.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((item) => <ProductCard key={item.id} item={item} />)}
      </div>
      {(data && data.length == 0) ||
        (data?.filter(
          (item) =>
            item.category.includes(categoryType) &&
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        )?.length == 0 && (
          <div className="w-full flex items-center justify-center text-center">
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <p className="text-xl font-bold text-gray-400">
                Your cart is empty
              </p>
              <button
                onClick={() => handleChangeSearchValue("")}
                className="bg-black text-white px-6 py-2 w-1/4"
              >
                back
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
