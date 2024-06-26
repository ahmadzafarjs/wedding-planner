import Link from "next/link";
import { GiDiamondRing } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";


const style = "flex flex-col items-center justify-center gap-1 px-3 py-3  border-pink-400 hover:text-pink-500 ";

export default function SecNavigation() {
    return <nav className=" flex items-center justify-center gap-8 shadow-md">
        <Link href="/" className={`${style}`}>
            <span><GiDiamondRing className="text-3xl text-slate-600" /></span>
            <p className="">My wedding</p>
        </Link>
        <Link href="/checklist" className={`${style}`}>
            <span><GoChecklist className="text-3xl text-slate-600" /></span>
            <p>Checklist</p>
        </Link>
        <Link href="" className={`${style}`}>
            <span><MdOutlinePeopleAlt className="text-3xl text-slate-600" /></span>
            <p>Guest list</p>
        </Link>
        <Link href="/budget" className={`${style}`}>
            <span><SlCalculator className="text-3xl text-slate-600" /></span>
            <p>Budget</p>
        </Link>
    </nav>
}