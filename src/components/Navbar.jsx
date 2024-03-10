import logo from '../assets/allet-logo.png'
import Button from './elements/Button'

const Navbar = () => {
    return (
        <header>
            <div>
                <nav>
                    <div className="nav-container text-2xl p-5 bg-slate-20 shadow flex justify-around items-center">
                        <div>
                            <div className="nav-logo cursor-pointer"></div>
                                <img className="h-10" src={logo} alt="Allet" />
                        </div>
                        <div className="nav-search w-auto border-2 border-black rounded-full">
                            <input className="w-[500px] px-5 py-2 rounded-full" type="text" placeholder="Search..." />
                        </div> 
                        <div className="nav-login" >
                            <Button text='Login' />
                            <span className='material-icons button py-1 '>shopping_cart</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;