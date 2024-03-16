const Reviews = () => {
    return (
       <div className="mt-[20px] ">
            <p className='text-xl font-bold'>Reviews</p> 

            <div className="review-card bg-slate-200 p-4 rounded-lg mt-[10px]">
                <div className="title flex border border-green-400 p-2">
                    <span className="StarRatings flex bg-red-500 pl-5 pr-4 font-bold rounded-full py-1 text-white">4<span className="material-icons ml-1 text-yellow-300">star</span></span>
                    <p className=" w-full text-lg font-bold flex pl-5 rounded-full items-center">Good Display</p>
                </div>
                <div className="description border border-yellow-700 p-2 my-1">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus voluptatum odit itaque repudiandae cupiditate, quia laboriosam unde exercitationem quae iusto, tempora labore doloribus neque quaerat molestias. Ullam, suscipit culpa?</p>
                </div> 
                <div className="user border border-blue-700 p-2">
                    <p className="name text-sm font-bold inline">Devkhishan</p>
                    <p className="uploadDate inline text-sm pl-3">March 16, 2024</p>
                </div>
            </div>
       </div>
    );
}

export default Reviews;