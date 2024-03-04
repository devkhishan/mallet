

const CategoryNav = () => {
    return (
        <>
            <nav className='px-[100px] bg-orange-300'>
                <ul className='flex py-5 bg-orange-200 justify-around text-lg'>
                    <li className='bg-blue-200 rounded-full px-5 py-2 pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Home
                        </a> 
                    </li>
                    <li className='bg-blue-200 rounded-full px-5 py-2 pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Mobiles
                        </a> 
                    </li>
                    <li className='bg-blue-200 rounded-full px-5 py-2 pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Laptops
                        </a> 
                    </li>
                    <li className='bg-blue-200 rounded-full px-5 py-2 pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Accessories
                        </a> 
                    </li>
                    <li className='bg-blue-200 rounded-full px-5 py-2 pointer-cursor shadow hover:scale-110 duration-200'>
                        <a href="/">
                            Wallets
                        </a> 
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default CategoryNav