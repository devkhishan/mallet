import Draganddrop from "./Draganddrop";
import { useState } from "react";
const AddProduct = () => {
    const [category, setCategory] = useState('');
    return (
        <div className="formContainer flex justify-center bg-green-200 mx-[250px]">
            
            <div className="shadow bg-white p-[50px] w-[800px] space-y-4 rounded-2xl my-[40px]">
                <div className="heading">
                    <h2 className="flex justify-center text-3xl font-bold t bg-black text-white border-4 border-black py-3 rounded-xl">Add Product</h2>
                    <div className="divider divider-neutral"></div>
                </div>
                <div className="input flex items-center gap-2 border-slate-400 ">
                    <input type="text" className="grow " placeholder="Product Title" />
                </div>
                <textarea className="textarea w-full border-slate-400  textarea-bordered h-[200px]" placeholder="Product Description"></textarea>
               
                <div className="prodImg space-y-4">
                    <h2 className="text-2xl ">Product Image</h2>   
                    <Draganddrop />
                </div>
                <div className="input flex items-center gap-2 max-w-xs border-slate-400 ">
                    <input type="text" className="grow" placeholder="Seller Name" />
                </div>
                <div className="input flex items-center gap-2 max-w-xs border-slate-400 ">
                    <input type="number" className="grow " placeholder="Available Quantity" min="0" />
                </div>
                <select className="select select-bordered w-full max-w-xs border-slate-400 " value={category} onChange={e => setCategory(e.target.value)}>
                    <option disabled value="">Categories</option>
                    <option value="Han Solo">Han Solo</option>
                    <option value="Greedo">Greedo</option>
                </select>
                <div className="input flex items-center gap-2 max-w-xs border-slate-400 ">
                    <input type="text" className="grow" placeholder="Model" />
                </div>
                <div className="specifications space-y-4 ">
                    <h2 className="text-2xl inline">Specifications</h2>     
                    <span className="btn btn-neutral material-symbols-outlined ml-2 btn-sm">add</span>
                
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="input flex items-center gap-2 max-w-[200px] border-slate-400 ">
                            <input type="text" className="grow" placeholder="Spec Title" />
                        </div>
                    
                        <div className="input flex items-center gap-2 w-full ml-4 border-slate-400 ">
                            <input type="text" className="grow" placeholder="Spec Value" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="btn btn-primary btn-lg rounded-full mt-4">Add Product</button>
                </div>
           
            </div>
        </div>
        
       
    )
}

export default AddProduct;