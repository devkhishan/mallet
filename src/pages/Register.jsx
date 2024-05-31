import { useRef} from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate();
    const email=useRef(null);
    const pass=useRef(null);
    const phoneno=useRef(null);
    const name=useRef(null);
    const handlesubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/auth/api/signin",{
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email:email.current.value,name:name.current.value,password:pass.current.value,phone_no:phoneno.current.value})
        });
        const jsondata= await response.json();
        if(jsondata.errors){
            console.log(jsondata.errors)
        }
        else{
            navigate("/login")
        }
    }
    return(
        <div className="formContainer flex justify-center bg-green-200 mx-[250px]">
            
            <form className="shadow bg-white p-[50px] w-[800px] space-y-4 rounded-2xl my-[40px]"onSubmit={handlesubmit}>
                <div className="heading">
                    <h2 className="flex justify-center text-3xl font-bold t bg-black text-white border-4 border-black py-3 rounded-xl">Register</h2>
                    <div className="divider divider-neutral"></div>
                </div>
              
                <div className="input flex items-center gap-2 border-slate-400 ">
                    <input type="text" className="grow " placeholder="Enter your name" ref={name}/>
                </div>

                <div className="input flex items-center gap-2 border-slate-400 ">
                    <input type="email" className="grow " placeholder="Enter E-mail address" ref={email}/>
                </div>

                <div className="input flex items-center gap-2  border-slate-400 ">
                    <input type="password" className="grow" placeholder="Enter Password" ref={pass}/>
                </div>
                <div className="input flex items-center gap-2  border-slate-400 ">
                    <input type="text" className="grow" placeholder="Enter Phone number" ref={phoneno}/>
                </div>
                <div className="flex justify-center">
                    <input type="submit" className="btn btn-primary btn-lg w-[300px] rounded-full mt-4"/>
                </div> 

                <Link to="/login" className="flex justify-center hover:underline">Already have an account ?</Link>
           
            </form>
        </div>
    )
}

export default Register