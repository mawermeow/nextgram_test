"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navigation=()=> {
    const path = usePathname()
    const inHistoryPage = path.includes("history")
    return <div className="fixed bottom-4 w-full flex justify-center gap-8">
        <Link className={inHistoryPage?"text-cyan-600 hover:text-cyan-400":"font-bold text-cyan-700"} href={"/"}>Home</Link>
        <Link className={!inHistoryPage?"text-cyan-600 hover:text-cyan-400":"font-bold text-cyan-700"} href={"/history"}>History</Link>
    </div>
}
export default Navigation