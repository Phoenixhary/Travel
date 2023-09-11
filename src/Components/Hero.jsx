const Hero = () => {
    return ( 
        <div name="Home" className="w-full h-screen">

        <img className="w-full h-screen top-0 left-0 object-cover" src="https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg" alt="Island"/>
        <div className="bg-black/30 absolute w-full h-screen top-0 left-0"> </div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
            <div className="md:left-[10%] max-w-5xl m-auto absolute p-4">
                <p> All inclusive</p>
                <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl"> Private Beaches & Gataways</h1>
                <p className="max-w-2xl drop-shadow-2xl py-2 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, assumenda! Quod 
                exercitationem distinctio maxime rem esse sint iusto reprehenderit doloribus.
                </p>
                <button className="bg-white text-black font-serif hover:opacity-80 ">
                     Reserve Now
                 </button>
            </div>
        </div>
     </div>
     );
}
 
export default Hero;