

const CategoryNav = () => {
    return (
         
            <nav className='my-[10px]'>
                <ul className='flex container px-[50px] rounded-md py-3 bg-slate-900 justify-evenly text-lg'>
                    <li className='text-white   pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Home
                        </a> 
                    </li>
                    <li className='text-white   pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Smartphones
                        </a> 
                    </li>
                    <li className='text-white   pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Accessories
                        </a> 
                    </li>
                    <li className='text-white   pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Wearables
                        </a> 
                    </li>
                   
                    <li className='text-white   pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Cameras
                        </a> 
                    </li>
                    <li className='text-white   pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Audio
                        </a> 
                    </li>
                   
                </ul>
            </nav>

    )
}

export default CategoryNav