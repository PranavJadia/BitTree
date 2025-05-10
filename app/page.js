"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  const [text, settext] = useState("")
  const createTree=() => {
    router.push(`/generate?handle=${text}`)
  }
  return (
    <div>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className=" flex justify-center flex-col ml-[10vw] gap-4">
          <p className="text-[#d2e823] font-bold text-5xl mt-10">Everything you</p>
            <p className="text-[#d2e823] font-bold text-5xl">are. In one,</p>
            <p className="text-[#d2e823] font-bold text-5xl">simple link in bio.</p>
          <p className="text-white">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex gap-2 mt-15">
            <input value={text} onChange={(e)=>settext(e.target.value)} className=" rounded-lg bg-white p-3" type="text" placeholder="Enter your handle"/>
            <button onClick={()=>createTree()} className="bg-[#e9c0e9] rounded-full p-4 font-bold text-sm">Claim your Linktree</button>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[10vw] ">
          <img className="mt-15" src="profile.png" alt="" />
        </div>
      </section>
      <section className="bg-[#4f1a1a] min-h-screen">
        pranav
      </section>
    </div>
  );
}
