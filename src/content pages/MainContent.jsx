import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainContent() {
  return (
    <div className="flex-1 flex flex-col relative h-full overflow-hidden">
      <Outlet />
    </div>
  );
}
