import Image from "next/image";

export default function Dashboard() {
    return <section className="bg-cyan-100 py-10">
        <div className="w-[90vw] m-auto bg-white rounded-lg overflow-hidden grid grid-cols-[auto_1fr] gap-7 p-3 shadow-lg">
            <div className="w-[250px] h-[250px] overflow-hidden rounded-md bg-amber-200">
                <div>
                    <img 
                    src="/dashboard-img.jpg"
                    alt="dashboard-img"
                    className="h-[300px] object-cover"
                     />
                </div>
            </div>
            <div className="grid grid-rows-[auto_1fr]">
                <div>
                    <h2 className="text-4xl font-semibold text-slate-700">Welcome Manik</h2>
                    <p className="text-lg text-slate-500 italic">4th of July, 2024</p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
}