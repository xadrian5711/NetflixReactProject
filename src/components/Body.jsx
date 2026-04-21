import Iconcol from "./IconCol";
import ListTabs from "./ListTabs";
import MainContent from "../content pages/MainContent";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <main className="h-screen w-screen relative bg-gray-900 text-white overflow-hidden">
      {/* 1. Background Layer (Kept separate so it doesn't move) */}
      <div className="absolute inset-0 bg-[url('/netflix-background.jpg')] bg-cover bg-center"></div>

      {/* 2. Centering Wrapper */}
      {/* 'flex items-center justify-center' centers the child vertically and horizontally */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {/* 3. Your Bubble */}
        <div
          className="w-[100%] h-[90%] max-w-4xl flex items-center justify-center
                    bg-white/10 backdrop-blur-3xl 
                    rounded-[40px] border border-white/10 shadow-2xl overflow-hidden"
        >
          <Iconcol />
          <ListTabs />
          <MainContent />
        </div>
      </div>
    </main>
  );
}
