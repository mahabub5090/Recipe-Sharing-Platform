import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleMenu = ({menu}) => {
  const { id, title, brand, price, description, image } = menu;

  return (
    <div className="card w-96 bg-base-100 shadow-xl border-gray-50">
      <figure>
        <img src={image} alt="menu" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description?.slice(0,30)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/home/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMenu;
