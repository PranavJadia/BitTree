"use client"
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';


const page = () => {

    const searchparams=useSearchParams()
    // const [link, setlink] = useState("")

    // const [text, settext] = useState("")

    const [links, setlinks] = useState([{link:"",text:""}])
    const [handle, sethandle] = useState(searchparams.get('handle'))
    const [picture, setpicture] = useState("")
    const [desc, setdesc] = useState("")

    const handlechange=(index,link,text)=>{
        setlinks((initiallinks)=>{
            return initiallinks.map((item,i)=>{
                if(i==index){
                    return {link , text}
                }
                else{
                    return item
                }
            })
        })
    }

    const addlink=()=>{
        setlinks(links.concat([{link:"",linktext:""}]))
    }


    const submitlinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "picture":picture,
            "desc":desc
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r=await fetch("http://localhost:3000/api/generate", requestOptions)
        const result=await r.json()
        if(result.success){

            toast.success(result.message)
            setlinks([])
            setpicture("")
            sethandle("")
            setdesc("")
        }
        else{
            toast.error(result.message)
        }
        
    }

    return (

        <div className='bg-[#225ac0] min-h-screen grid grid-cols-2'>
            <div className="col1 flex justify-center items-center flex-col ml-[10vw]">
                <div className='flex flex-col gap-5 my-8 '>
                    <h1 className='font-bold text-3xl mt-[50px]'>Create your Bittree</h1>
                    <h2 className='font-semibold text-lg'>Step 1: Claim your handle</h2>
                    <div className='mx-4'>
                        <input onChange={(e)=>{sethandle(e.target.value)}} value={handle || ""} className='bg-white px-3 py-1 focus:outline-blue-500 rounded-full' type="text" placeholder='Choose your Handle' />
                    </div>
                    <h2 className='font-semibold text-lg'>Step 2: Add your links</h2>
                    <div className='mx-4'>
                        {links && links.map((item,index)=>{
                            return <div key={index} className="item">
                        <input onChange={(e)=>{handlechange(index,e.target.value,item.text)}} value={item.link || ""} className='bg-white px-3 py-1 m-2 focus:outline-blue-500 rounded-full' type="text" placeholder='Enter link' />
                        <input onChange={(e)=>{handlechange(index,item.link,e.target.value)}} value={item.text || ""} className='bg-white px-3 py-1 m-2 focus:outline-blue-500 rounded-full' type="text" placeholder='Enter link text' />
                        </div>
                            
                        })}
                        <button onClick={()=>addlink()} className='font-bold text-white ml-4 bg-black rounded-full px-3 py-1 '>Add Link</button>
                    </div>
                    <h2 className='font-semibold text-lg'>Step 3: Add profile picture and description</h2>
                    <div className='mx-4 flex flex-col gap-2    '>
                        <input onChange={(e)=>{setpicture(e.target.value)}} value={picture || ""} className='bg-white px-3 py-1 focus:outline-blue-500 rounded-full' type="text" placeholder='link to yoyr picture' />
                        <input onChange={(e)=>{setdesc(e.target.value)}} value={desc || ""} className='bg-white px-3 py-1 focus:outline-blue-500 rounded-full' type="text" placeholder='description' />
                        <button disabled={picture=="" || handle=="" || links[0].text==""} onClick={()=>{submitlinks()}} className='disabled:bg-slate-500 font-bold text-white w-fit my-2 bg-black rounded-full px-3 py-1 '>Create Bitlink</button>
                    </div>

                </div>
            </div>
            <div className="col2 w-full h-screen">
                <img className="h-full object-contain ml-20" src="/generate.webp" alt="" />
                <ToastContainer/>
            </div>

        </div>
    )
}

export default page
