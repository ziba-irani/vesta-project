import { useNavigate } from "react-router-dom";
import {IProductsModel} from "../../src/utils/index"
function useCustomNavigate () {
  const navigate = useNavigate();
  const navigateToProduct = (item: IProductsModel) => {
    navigate(`/shop/${item.id}`, { state: { productData: item } });
  };
  const navigateToCategory = (value: string) => {
    navigate(`/shop`, { state: { category: value } });
  };
  return {
    navigateToProduct,
    navigateToCategory,
  };
}

export default useCustomNavigate;
