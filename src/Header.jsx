export default function Header () {
    return (
        <header className="h-24 w-full flex items-center justify-between px-8 z-20 shrink-0">
        <div className="flex gap-4 text-gray-400">
            <button className="hover:text-white transition p-2 hover:bg-white/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button className="hover:text-white transition p-2 hover:bg-white/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
        </div>

        <div className="flex-1 max-w-2xl mx-12 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mic</span>
            
            <input type="text" 
                placeholder="Search..." 
                className="w-full bg-black/20 border border-white/5 rounded-full py-3.5 pl-12 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/20 focus:bg-black/40 transition backdrop-blur-md" />
        </div>

        <div className="flex items-center gap-6">
        
            <button className="relative w-10 h-10 rounded-full 
                   bg-black/20 border border-white/5 backdrop-blur-md 
                   flex items-center justify-center 
                   text-gray-300 hover:text-white hover:bg-black/40 transition">
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-600 rounded-full border border-[#1a1a1a]"></span>
            </button>

            <div className="flex items-center gap-3 p-1.5 pr-4 
                bg-black/20 border border-white/5 backdrop-blur-md rounded-full 
                cursor-pointer hover:bg-black/40 transition">
                <img src="/IMG_2388 copy.jpeg" alt="User" className="w-9 h-9 rounded-full border border-white/10 shadow-sm" />
                
                <div className="hidden lg:block text-xs">
                    <p className="text-white font-medium">Xadrian R.</p>
                    <p className="text-gray-500">@xades</p>
                </div>
            </div>        
        </div>
    </header>

    )
}