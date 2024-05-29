import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../Component/RecipeRow";

export default function Manage() {
  const [recipes, setRescipes] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
    }
    load();
  },[]);

  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:3000/recipes/${id}`);
    const {data}=await axios.get("http://localhost:3000/recipes");
    setRescipes(data.filter(data=>data.id!==id));
    console.log(id);
    
    
  }

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((recipe) => (
            <RecipeRow key={recipe?.id} singleRecipe={recipe} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
