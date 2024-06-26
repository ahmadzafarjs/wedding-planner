import Image from "next/image";

export default function Dashboard() {
    return <section className="bg-cyan-300 py-10">
        <div className="w-[90vw] m-auto bg-white rounded-lg overflow-hidden grid grid-col-[1fr_1fr]">
            <div className="w-[250px] h-[250px] overflow-hidden bg-amber-200">
                <div>
                    <Image 
                    src="/dashboard-img.jpg"
                    alt="dashboard-img"
                    width={300}
                    height={300}
                     />
                </div>
            </div>
            <div>
                <div>
                    <h2>Welcome Manik</h2>
                    <p>4th of July, 2024</p>
                </div>
                <div></div>
            </div>
        </div>
    </section>
}