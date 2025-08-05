import React from 'react'
import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.png"
import img4 from "../../../assets/img4.png"
import img5 from "../../../assets/img5.png"
import img6 from "../../../assets/img6.png"
const Carts = () => {
    const data = [
        {
            title:"Medical Document Translation",
            img:img1
        },
           {
            title:"Legal Document Translation",
            img:img2
        },
           {
            title:"Immigration Document Translation",
            img:img3
        },
           {
            title:"Educational Document Translation",
            img:img4
        },
           {
            title:"Certified Translation",
            img:img5
        },
           {
            title:"Insurance Document Translation",
            img:img6
        },
    ]
  return (
     <div className=' bg-[#ffffff0a] relative py-12 mt-32'>
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
  )
}

export default Carts