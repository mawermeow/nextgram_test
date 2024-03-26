"use client"
import Link from "next/link";

const Page = () => {
    let photos = Array.from({length: 6}, (_, i) => i + 1);
    return <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
        {photos.map((id) => (
            <Link className="w-20 h-20 bg-red-400 text-white rounded-full cursor-pointer flex items-center justify-center select-none hover:bg-red-500 hover:scale-110 active:scale-100 transition-all" key={id} href={`/photos/${id}`} passHref>
                {id}
            </Link>
        ))}
    </div>
}
export default Page