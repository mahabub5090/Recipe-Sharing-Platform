import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function SingleMenuDetails() {
  const { id, title, brand, price, description, image } = useLoaderData();
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-gray-50 mx-auto">
      <figure>
        <img src={image} alt="menu" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
       <div className="flex justify-between">
       <Link to={"/home"}><button className="btn btn-primary">Back to Home</button></Link>
        <Link onClick={()=>window.scrollTo(500, 500)
} to={"/all"}><button className="btn btn-primary">Back to All Menu</button></Link>
       </div>
      </div>
    </div>
  );
}
