import { Banner } from "@/components/Banner";
import { ProductsSlider } from "@/components/ProductsSlider";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=`).then((res) => setProducts(res.data));
  }, []);
  return (
    <div>
      <Banner categoryId="" position="start" />
      <ProductsSlider />
      <Banner categoryId="" position="center" />
    </div>
  );
}
