"use client"
import Link from "next/link";
import {useParams, usePathname} from "next/navigation";
import {AnimatePresence,motion} from "framer-motion";

const Navigation=()=> {
    const params = useParams()
    const path = usePathname()
    const isCardVisible = !!params.id
    const inHistoryPage = path.includes("history")
    return <AnimatePresence>
        {!isCardVisible && <motion.div
            initial={{opacity:0,translateY:40}}
            animate={{opacity:1,translateY:0}}
            exit={{opacity:0,translateY:40}}
            className="fixed bottom-4 w-full flex justify-center gap-8">
            <Link className={inHistoryPage ? "text-cyan-600 hover:text-cyan-400" : "font-bold text-cyan-700"}
                  href={"/"}>Home</Link>
            <Link className={!inHistoryPage ? "text-cyan-600 hover:text-cyan-400" : "font-bold text-cyan-700"}
                  href={"/history"}>History</Link>
        </motion.div>}
    </AnimatePresence>
}
export default Navigation