import {FormInput,FormText,FormSelect} from "./elements/FormInput"


const AddProduct = () => {
    return (
        <div className="border border-red-500 my-[50px]">
            <h1 className="text-3xl flex justify-center my-[20px]">Enter Product Information</h1>
            <form className="border flex flex-col justify-center items-center border-green-500">
                <FormInput name="Product Name" placeholder="Enter the name of the product"/>
                <FormText name="Description" placeholder="Enter the description of the product"/>
                <FormInput name="Model" placeholder="Enter the Model ID"/>
                <FormInput name="Quantity" placeholder="Enter the available quantity for sale" type="number"/>
                <FormSelect name="Category" options={["Mobiles","Laptops","Smart Watches","Accessories"]} />
                <FormInput name="Price" placeholder="Enter the price of the single unit" type="number"/>
                <FormSelect name="Size" options={["XS","S","M","L","XL"]} />
                <FormSelect name="Color" options={["Blue","Green","Purple","Orange"]} />
            </form>
        </div>
    )
}

export default AddProduct