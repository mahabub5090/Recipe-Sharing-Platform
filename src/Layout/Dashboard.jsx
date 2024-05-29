import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-gray-900 min-h-screen p-12 ">
        <ul>
          <li className="border border-white p-4 text w-full">
            <Link to={"profile"}>Profile</Link>
          </li>
          <li className="border  border-white p-4 text w-full">
            <Link to={"manage-menu"}>Manage All Products</Link>
          </li>
          <li className="border  border-white p-4 text w-full">
            <Link to={"add-menu"}>Add Product</Link>
          </li>
          <li className="border  border-whitek p-4 text w-full">
            <Link to={"/"}>Back to Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-9 p-20">
        <Outlet/></div>
    </div>
  );
};

export default Dashboard;
