const Login = () => {
    return(
        <div className="formContainer flex justify-center bg-green-200 mx-[250px]">
            
            <form className="shadow bg-white p-[50px] w-[800px] space-y-4 rounded-2xl my-[40px]">
                <div className="heading">
                    <h2 className="flex justify-center text-3xl font-bold t bg-black text-white border-4 border-black py-3 rounded-xl">Login</h2>
                    <div className="divider divider-neutral"></div>
                </div>
              
                <div className="input flex items-center gap-2 border-slate-400 ">
                    <input type="email" className="grow " placeholder="Enter E-mail address" />
                </div>

                <div className="input flex items-center gap-2  border-slate-400 ">
                    <input type="password" className="grow" placeholder="Enter Password" />
                </div>
            
                <div className="flex justify-center">
                    <button className="btn btn-primary btn-lg w-[300px] rounded-full mt-4">Let's go !!</button>
                </div> 

                <a href="/register" className="flex justify-center hover:underline">Didn't have an account ?</a>
           
            </form>
        </div>
    )
}

export default Login