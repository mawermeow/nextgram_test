"use client"
import {useRouter} from "next/navigation";
import Link from "next/link";

const Page = () => {
    const router = useRouter()
    let photos = Array.from({length: 6}, (_, i) => i + 1);
    return <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
        {photos.map((id) => (
            <Link className="w-20 h-20 bg-red-400 text-white rounded-full cursor-pointer flex items-center justify-center" key={id} href={`/photos/${id}`} passHref>
                {id}
            </Link>
        ))}
    </div>
}
export default Page