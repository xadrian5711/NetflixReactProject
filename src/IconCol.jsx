export default function Iconcol() {
    return (
        <div className="w-24 py-12 flex flex-col items-center justify-start border-r border-white/10 bg-white/5 backdrop-blur-md gap-8 shrink-0">
            
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50 mb-4 cursor-pointer hover:scale-105 transition">
                <span class="material-symbols-outlined text-white">play_arrow</span>
            </div>              

            <div className="flex flex-col gap-8 text-white-400">
                <span className="material-symbols-outlined cursor-pointer hover:text-white transition">home</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-white transition">movie</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-white transition">sensors</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-white transition">grid_view</span>
            </div>
            
            <div className="mt-auto text-white-400">
                <span className="material-symbols-outlined cursor-pointer hover:text-white transition">search</span>
            </div>
        </div>
    )
};