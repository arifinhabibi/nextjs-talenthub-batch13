"use client";

import ItemCard from "@/components/item-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [datas, setDatas] = useState<any>([]);
  // const datas = [
  //   {
  //     id: "abys",
  //     name: "Abyssinian",
  //     image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  //   },
  //   {
  //     id: "bomb",
  //     name: "Bombay",
  //     image: "https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg",
  //   },
  //   {
  //     id: "chee",
  //     name: "Cheetoh",
  //     image: "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
  //   },
  //   {
  //     id: "dons",
  //     name: "Donskoy",
  //     image: "https://cdn2.thecatapi.com/images/3KG57GfMW.jpg",
  //   },
  // ];
  async function fetchData() {
    const fetchDatas = await fetch("https://api.thecatapi.com/v1/breeds");
    const dataJson = await fetchDatas.json();
    setDatas(dataJson);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" bg-indigo-500">
      <h1 className="text-center text-5xl py-10">Pets List</h1>
      <div className="flex flex-wrap justify-center">
        {datas.map(
          (data: { name: string; reference_image_id: any; id: string }) => (
            <ItemCard
              name={data.name}
              image={`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`}
              key={data.id}
            />
          )
        )}
      </div>
    </div>
  );
}
