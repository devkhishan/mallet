import { useRef} from "react"
import {useDispatch} from 'react-redux'
import {setUserData, initalizeCart, initalizeOrder} from '../RTK/Features/UserSlice'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Login = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const email=useRef(null);
    const pass=useRef(null);
    const handlesubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/auth/api/login",{
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email:email.current.value,password:pass.current.value})
        });
        const jsondata= await response.json();
        if(jsondata.errors){
            pass
        }
        else{
            localStorage.setItem("token", jsondata.token);
            let userdata=await fetch("http://localhost:5000/auth/api/fetchuserdata",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token": jsondata.token
                },
            })
            userdata=await userdata.json();
            dispatch(setUserData(userdata));
            let orderdata=await fetch("http://localhost:5000/orders/api/viewbyuid",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token": jsondata.token
                },
            })
            orderdata=await orderdata.json();
            dispatch(initalizeOrder(orderdata));
            let cartdata=await fetch("http://localhost:5000/cart/api/viewbyuid",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token": jsondata.token
                },
            })
            cartdata=await cartdata.json();
            dispatch(initalizeCart(cartdata));
            navigate("/");
            
        }
    }
    return(
        <div className="formContainer flex justify-center bg-green-200 mx-[250px]">
            
            <form className="shadow bg-white p-[50px] w-[800px] space-y-4 rounded-2xl my-[40px]" onSubmit={handlesubmit}>
                <div className="heading">
                    <h2 className="flex justify-center text-3xl font-bold t bg-black text-white border-4 border-black py-3 rounded-xl">Login</h2>
                    <div className="divider divider-neutral"></div>
                </div>
              
                <div className="input flex items-center gap-2 border-slate-400 ">
                    <input type="email" className="grow " placeholder="Enter E-mail address" ref={email}/>
                </div>

                <div className="input flex items-center gap-2  border-slate-400 ">
                    <input type="password" className="grow" placeholder="Enter Password" ref={pass}/>
                </div>
            
                <div className="flex justify-center">
                    <input type="submit" className="btn btn-primary btn-lg w-[300px] rounded-full mt-4"/>
                </div> 

                <Link to="/register" className="flex justify-center hover:underline">Didn't have an account ?</Link>
           
            </form>
        </div>
    )
}

export default Login