import axios from "axios";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=`).then((res) => setProducts(res.data));
  }, []);
  console.log(products);
}