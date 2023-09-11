const Plan = () => {
    return ( 
        <div name="destinations" className="max-w-[1000px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
                            {/* Grid one*/}
              <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                     <img className="row-span-3 object-cover w-full h-full p-1" src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg" alt="/" />
                     <img className="row-span-2 object-cover w-full h-full p-1" src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg" alt="/" />
                     <img className="row-span-2 object-cover w-full h-full p-1" src="https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_640.jpg" alt="/" />
                     <img className="row-span-3 object-cover w-full h-full p-1" src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_640.jpg" alt="/" />
                     <img className="row-span-2 object-cover w-full h-full p-1" src="https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_640.jpg" alt="/" />
            </div>
            
                        {/* Grid two*/}
            <div className="flex flex-col justify-center h-full">
                <h1 className="font-bold text-4xl md:text-5xl"> Plan Your Next Trip </h1>
                <p className="text-2xl py-6"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, facilis!</p>
                <p className="pb-6"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, facilis!</p>

                <div>
                    <button className="border-black mr-4 hover:shadow-xl font-serif cursor-pointer">Learn More</button>
                    <button className="bg-black text-white border-black font-serif hover:shadow-xl">Book your trip</button>
                </div>
            </div>

        </div>
     );
}
 
export default Plan;