import React from 'react'
import img1 from "../../../assets/img7.png"
import img2 from "../../../assets/img8.png"
import img3 from "../../../assets/img9.png"
import img4 from "../../../assets/img10.png"
const YouGet = () => {
    const data = [
        {
            title:"Studio Voice Quality",
            img:img1
        },
           {
            title:"Multiple Languages & Accents",
            img:img2
        },
           {
            title:"Emotion & Tone Matching",
            img:img3
        },
           {
            title:"Fast Turnaround",
            img:img4
        },

    ]
  return (
   <div className=' mt-32'>
                <h1 className=' text-[32px] font-[600] text-white text-center'>What You Get</h1>
        <p className=' text-[14px] font-[500] text-[#969696] text-center'>Trusted by startups, enterprises, and organizations who value smart tech and reliable support.</p>
     <div className=' bg-[#ffffff0a] relative py-12  mt-12'>

           <div className=' w-[100%]  h-[200px] bg-[#56035d43] blur-2xl rounded-full'>
            </div>
         <div className=' absolute top-20 justify-center w-full flex items-center gap-12 '>
        {
            data.map((item)=>(
                <div className=' flex flex-col items-center gap-2'>
                    <img className=' w-[60px]' src={item.img} alt="" />
                    <h1 className=' text-center text-[16px] font-[600] text-white'>{item.title}</h1>
                </div>
            ))
        }
    </div>
     </div>
   </div>
  )
}

export default YouGet