const Rooms = () => {
    return ( 
        <div name="room" className="max-w-[1000px] h-[500px] my-20 m-auto lg:mb-[10%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 bg-slate-100">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2 pt-16 md:p-1">
                <h1 className="font-bold text-2xl">Interior Roooms</h1>
                <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo 
                    eligendi optio adipisci corrupti.</p>
            </div>

            <div className="grid grid-cols-2 col-span-2 gap-2 pb-2 md:m-auto">
                <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/08/08/00/27/home-2609600_640.jpg" alt="/" />
                <img className=" w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_640.jpg" alt="/" />
                <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_640.jpg" alt="/" />
                <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg" alt="/" />
            </div>

        </div>
     );
}
 
export default Rooms;