

export default function ListTabs() {
    return (
        <div className="w-80 flex flex-col border-r border-white/5 shrink-0 h-full">

    <div className="p-8 pb-0 mb-6">
        <img src="/01_Netflix_Logo/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png" alt="Netflix" className="w-32 mb-10 object-contain"/>
        
        <nav className="flex flex-col space-y-6" id="nav-menu">
            <a href="#" className="nav-item flex items-center gap-4 group text-gray-400 hover:text-white transition-colors duration-200">
                <div className="nav-dot w-1.5 h-1.5 bg-transparent border border-gray-500 rounded-full group-hover:border-white transition-all duration-300"></div>
                <span className="nav-text font-medium text-sm tracking-wide">Browse</span>
            </a>
            <a href="#" className="nav-item flex items-center gap-4 group text-gray-400 hover:text-white transition-colors duration-200">
                <div className="nav-dot w-1.5 h-1.5 bg-transparent border border-gray-500 rounded-full group-hover:border-white transition-all duration-300"></div>
                <span className="font-medium text-sm tracking-wide">Wishlist</span>
            </a>
            <a href="#" className="nav-item flex items-center gap-4 group text-gray-400 hover:text-white transition-colors duration-200">
                <div className="nav-dot w-1.5 h-1.5 bg-transparent border border-gray-500 rounded-full group-hover:border-white transition-all duration-300"></div>
                <span className="font-medium text-sm tracking-wide">Coming Soon</span>
            </a>
        </nav>
     </div>
     
    
    <div className="flex items-center gap-2 mb-2 ">
            <h3 className="text-gray-400 font-medium text-sm uppercase px-6 tracking-wider">New Trailers</h3>
            <span className="text-lg">🔥</span>
        </div>

    <div className="flex-1 p-8 mt-4 overflow-y-auto no-scrollbar">
        
        

        <div className="flex flex-col gap-4 pb-4">

            <a href="https://www.youtube.com/watch?v=bkjyJPfBS4s" target="_blank" className="group block">
                <div className="relative h-32 w-full rounded-xl overflow-hidden shadow-lg border border-white/5">
                    <div className="absolute inset-0 bg-[url('https://img.youtube.com/vi/bkjyJPfBS4s/maxresdefault.jpg')] bg-cover bg-center group-hover:scale-110 transition duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-red-600 group-hover:border-red-600 transition">
                            <span className="material-symbols-outlined text-white text-sm">play_arrow</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex justify-between items-center px-1">
                    <span className="text-gray-300 text-xs font-medium group-hover:text-white transition">Ichigo vs Ulquiorra</span>
                    <span className="text-gray-500 text-[10px]">2m</span>
                </div>
            </a>

            <a href="https://www.youtube.com/watch?v=Xf0ZWb3-5MY" target="_blank" className="group block">
                <div className="relative h-32 w-full rounded-xl overflow-hidden shadow-lg border border-white/5">
                    <div className="absolute inset-0 bg-[url('https://img.youtube.com/vi/Xf0ZWb3-5MY/maxresdefault.jpg')] bg-cover bg-center group-hover:scale-110 transition duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
                         <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-red-600 group-hover:border-red-600 transition">
                            <span className="material-symbols-outlined text-white text-sm">play_arrow</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex justify-between items-center px-1">
                    <span className="text-gray-300 text-xs font-medium group-hover:text-white transition">One Piece</span>
                    <span className="text-gray-500 text-[10px]">1m 45s</span>
                </div>
            </a>

            <a href="https://www.youtube.com/watch?v=ihgWUo6tvJQ" target="_blank" className="group block">
                <div className="relative h-32 w-full rounded-xl overflow-hidden shadow-lg border border-white/5">
                    <div className="absolute inset-0 bg-[url('https://img.youtube.com/vi/ihgWUo6tvJQ/maxresdefault.jpg')] bg-cover bg-center group-hover:scale-110 transition duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition">
                         <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-red-600 group-hover:border-red-600 transition">
                            <span className="material-symbols-outlined text-white text-sm">play_arrow</span>
                            </div>
                    </div>
                </div>
                
                <div className="mt-2 flex justify-between items-center px-1">
                    <span className="text-gray-300 text-xs font-medium group-hover:text-white transition">Rock Lee vs Gaara</span>
                    <span className="text-gray-500 text-[10px]">2m 10s</span>
                </div>
            </a>

        </div>
    </div>
</div>

        

    )
}