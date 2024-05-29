import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleMenu from "../Component/SingleMenu";

export default function AllMenu() {
  const data=useLoaderData();
 console.log(data);

  return <div className="flex gap-5 my-5 justify-center flex-wrap" >
  {
    data?.map(menu=><SingleMenu key={menu.id} menu={menu} />)
  }
  </div>;
}
