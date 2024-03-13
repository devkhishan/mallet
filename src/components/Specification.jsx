import chargerImg from '../assets/products/charger.png';

const Specification = () => {
    return (
        <div className="mx-[250px] grid grid-cols-2">
            <div className="details bg-blue-500">
                <div className=" p-5">
                    <h1 className="text-3xl font-bold bg-orange-500 p-3">
                        <span className="bg-white block p-3 pl-7">Product Details</span>
                    </h1>

                    <div className="bg-green-500 p-3 h-[350px]">
                        <div className="product-description p-3 h-full grid grid-cols-2 bg-white">
                            <img src={chargerImg}  />
                            <p className='bg-slate-700 text-white rounded p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos eius ea. Nobis, distinctio. Qui maiores assumenda reprehenderit fugiat quidem praesentium earum facilis quia magni, commodi eaque, eius mollitia exercitationem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos. Lorem ipsum dolor.
                            </p>
                            
                        </div>
                        
                    </div>
                </div>

                
            </div>
            <div className="bg-blue-300 p-5">
                <div className="content">
                    <h1 className="text-3xl font-bold bg-orange-500 p-3">
                        <span className="bg-white block p-3 pl-7">Specification</span>
                    </h1>
                

                    <div className="specs p-3 bg-green-500 h-[350px]">
                        <table className="border-separate border-4 h-full w-full bg-white  border-spacing-5 border-red-500">
                            
                            <tr>
                                <td className="border-2 rounded border-slate-500 text-center text-slate-600">Model</td>
                                <td className="font-bold bg-slate-200 border-2 border-black pl-5 rounded">Apple iPhone 12 Pro Max</td>
                            </tr>
                            <tr >
                                <td className="border-2 rounded border-slate-500 text-center text-slate-600">Color</td>
                                <td className="font-bold bg-slate-200 border-2 border-black pl-5 rounded">Graphite, Silver, Gold, Pacific Blue</td>
                            </tr>
                            <tr >
                                <td className="border-2 rounded border-slate-500 text-center text-slate-600">Display</td>
                                <td className="font-bold bg-slate-200 border-2 border-black pl-5 rounded">6.7 inches, 1284 x 2778 pixels</td>
                            </tr>
                            <tr >
                                <td className="border-2 rounded border-slate-500 text-center text-slate-600">Processor</td>
                                <td className="font-bold bg-slate-200 border-2 border-black pl-5 rounded">Apple A14 Bionic</td>
                            </tr>
                            <tr >
                                <td className="border-2 rounded border-slate-500 text-center text-slate-600">RAM</td>
                                <td className="font-bold bg-slate-200 border-2 border-black pl-5 rounded">6GB</td>
                            </tr>
                            <tr >
                                <td className="border-2 rounded border-slate-500 text-center text-slate-600">Storage</td>
                                <td className="font-bold bg-slate-200 border-2 border-black pl-5 rounded">128GB, 256GB, 512GB</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Specification;