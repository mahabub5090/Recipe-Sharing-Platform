import React from "react";

export default function Hero() {
  return <div><div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="items-center px-20">
      <h1 className="text-5xl font-bold">Weclome to RecipePad!</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque et quam, vitae fugiat ex neque fugit dolorem explicabo corporis nemo, quis qui magnam. Odio quis numquam impedit facilis saepe!</p>
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div></div>;
}
