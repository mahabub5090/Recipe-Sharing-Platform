import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Add(){
  const [categories, setCategories] = useState();
  const [recipe,setRecipe]=useState();
  
  const notify=(text)=> toast.success(text);

  useEffect(() => {
  async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        // console.log(data?.data);
        setCategories(data?.data);
      }
    }

    load();
  }, []);
    
   
  const handleCreateRecipe =  (e) => {
    e.preventDefault();
    const form = e.target;

    let id = (++categories.length).toString(10);
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };
    setRecipe(recipeData);
    
  };

  const handleAdd=async()=>{
    await axios.post("http://localhost:3000/recipes", recipe);
    console.log(recipe);
    
  }
  
  return (
    <div className=" px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
      {/* <form  className="w-full"> */}
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>
          <div className="flex justify-center">
         {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn btn-success" type="submit" >Add Recipe</label>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Please proceed...</p>
    <input onClick={()=>{notify("Product add Succesfull");handleAdd()}}value={"Proceed"} className=" btn py-3 px-5 border btn-secondary"/> 
    
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

         
<ToastContainer/>
        </div>
        
      </form>
     
    </div>
  );
};

export default Add;
