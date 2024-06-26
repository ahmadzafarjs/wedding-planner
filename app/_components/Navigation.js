import SecNavigation from "./SecNavigation";

export default function Navigation() {
    return <header className="border-b-2 border-slate-200">
    <div className="w-[90vw] h-20 m-auto flex items-center justify-between ">

        <div>
            <h3 className="text-xl text-pink-500">Wedding Planner.</h3>
        </div>
        <div>
            <div className="rounded-full w-10 h-10 bg-slate-300 flex items-center justify-center ">
                <p>A</p>
            </div>
        </div>
    </div>
        
    </header>
}