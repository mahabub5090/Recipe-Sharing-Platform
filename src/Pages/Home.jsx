import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleMenu from "../Component/SingleMenu";
import Hero from "../Component/Hero";

export default function Home() {
  const data=useLoaderData();
//  console.log(data);

  return <div className="flex gap-5 my-5 justify-center flex-wrap" >
  <Hero></Hero>
  {
    data.reverse()?.slice(0,3)?.map(menu=><SingleMenu key={menu.id} menu={menu} />)
  }
  <Link onClick={()=>window.scrollTo(500, 500)
} to={"/all"}><button className="btn btn-primary">Show More</button></Link>
  </div>;
}
