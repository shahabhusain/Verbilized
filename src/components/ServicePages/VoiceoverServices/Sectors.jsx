import React from 'react'
import img1 from "../../../assets/img7.png"
import img2 from "../../../assets/img9.png"
import img3 from "../../../assets/img11.png"
import img4 from "../../../assets/img12.png"
import img5 from "../../../assets/img13.png"
import img6 from "../../../assets/imgg.png"
const Sectors = () => {
    const data = [
        {
            title:"Advertising & Commercials",
            img:img1
        },
           {
            title:"E-learning & Training",
            img:img2
        },
           {
            title:"IVR & Phone Systems",
            img:img3
        },
           {
            title:" Animation & Dubbing",
            img:img4
        },
           {
            title:" Audiobooks & Storytelling",
            img:img5
        },
           {
            title:"·Corporate & Explainer Videos",
            img:img6
        },
    ]
  return (
      <div className=' mt-32'>
        <h1 className=' text-white text-center text-[32px] font-[600]'>We work with clients across a variety of sectors</h1>
        <p className=' text-[#969696] text-center text-[14px] font-[500]'>Trusted by startups, enterprises, and organizations who value smart tech and reliable support that we work with them</p>
         <div className=' bg-[#ffffff0a] relative py-12 mt-12'>
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

export default Sectors