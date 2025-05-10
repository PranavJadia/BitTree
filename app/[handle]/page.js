import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"
export default async function Page({ params }) {
    const { handle } = await params

    const client=await clientPromise
    const db=client.db('bittree')
    const collection=db.collection('links')


    const item=await collection.findOne({handle:handle})
    if(!item){
        return notFound()
    }

    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        {item && <div className="photo flex flex-col justify-center items-center">
            <img width={100} height={100} className="rounded-lg" src={item.picture} alt="" />
            <span className="font-bold">@{item.handle}</span>
            <span className="w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item,index)=>{
                    return <div className="py-4 px-2 shadow-lg bg-purple-100 min-w-96 flex justify-center items-center flex-col rounded-md my-3" key={index}>
                        <Link target="_blank" href={item.link}> {item.text}</Link>
                    </div>
                })}
            </div>
        </div>}
    </div>
}