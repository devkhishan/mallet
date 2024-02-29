import logo from '../assets/allet-logo.png'

const Navbar = () => {
    return (
        <header>
            <div>
                <nav className="text-2xl p-5 bg-slate-200 shadow flex justify-around items-center">
                    <div className="nav-logo cursor-pointer">
                            <img className="h-10" src={logo} alt="Allet" />
                           
                     
                    </div>
                    <div className="nav-search w-auto">
                        <input className="w-[500px] px-5 py-2 rounded-full" type="text" placeholder="Search..." />
                    </div> 
                    <div className="nav-login" >
                        <button className="mr-5 hover:text-red-400"><h4>Login</h4></button>
                        <span className='hover:text-red-400'>Cart</span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;