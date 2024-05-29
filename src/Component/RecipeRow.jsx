import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable react/prop-types */
export default function RecipeRow({singleRecipe,handleDelete}) {
    const recipe=singleRecipe;
    const id=recipe.id;
    const notify=(text)=> toast.success(text);
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`../edit/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <span className="flex justify-center">
        <label htmlFor="my_modal_6" className="btn btn-xs btn-error" type="submit" >Delete</label>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Please proceed...</p>
    <input onClick={()=>{notify("Product Delete Succesfull");handleDelete(id)}}value={"Proceed"} className=" btn py-3 px-5 border btn-secondary"/> 
    
    <div className="modal-action" >
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
        </span>
        {/*  */}
        <ToastContainer></ToastContainer>
        
      </td>
    </tr>
  );
}
