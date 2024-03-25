'use client';

import {motion, AnimatePresence} from "framer-motion";
import {ReactNode, useState} from "react";
import {useRouter} from "next/navigation";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter()
  const handleClick=()=>{
    router.back()
  }

  return <AnimatePresence>
    <motion.div
        initial={{opacity: 0, translateX: 400}}
        animate={{opacity: 1, translateX: 0}}
        exit={{opacity: 0, translateX: 400}}
        transition={{duration:0.5}}
        className="fixed inset-0 z-10 flex justify-center items-center bg-black/50"
        onClick={handleClick}
    >
      <div
          className="w-32 h-32 rounded-xl bg-amber-300 text-2xl font-bold flex items-center justify-center ">{children}</div>
    </motion.div>
  </AnimatePresence>
}
