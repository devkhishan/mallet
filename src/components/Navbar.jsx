const Navbar = () => {
    return (
        <header>
            <div>
                <nav className="bg-slate-200 p-5 flex">
                    <div className="nav-logo bg-red-200 rounded-full p-4">
                      
                            <h1>Storoom</h1>
                     
                    </div>
                    <div className="nav-search ">
                        <input type="text" placeholder="Search..." />
                    </div> 
                    <div className="nav-login bg-green-500 p-4 rounded-full mr-5" >
                        <button><h4>Login</h4></button>
                    </div>
                    <span>Cart</span>
                    
                
                </nav>
            </div>
        </header>
    )
}

export default Navbar;