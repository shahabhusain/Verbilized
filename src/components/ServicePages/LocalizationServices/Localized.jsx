import React from 'react'
import trusted from '../../../assets/local.png'
const Localized = () => {
  return (
    <div className=' flex items-center  justify-between w-[80%] mx-auto mt-32'>
        <div className=' flex flex-col gap-4 w-1/2'>
            <h1 className=' text-[32px] font-[600] text-white max-w-[444px]'>Localization</h1>
            <p className=' text-[#969696] text-[16px] font-[500]'>Is your business operating on a global scale? If you’re competing in international markets with multiple languages and unique cultural requirements, localizing your digital content should be a key part of your marketing strategy. eTranslation Services helps you reach more visitors worldwide, ensuring your website, apps, and games are culturally relevant, linguistically accurate, and optimized for diverse global audiences. Localize with eTranslation Services and elevate your business to new international heights.</p>
            <p className=' text-[#969696] text-[16px] font-[500]'>Expand your business globally with eTranslation Services’ expert localization solutions. When launching a product in a new market, it’s crucial to make your audience feel that your offering is specifically tailored for them. Our professional localization services go beyond simple website translation, helping you connect with diverse international markets. Whether you’re localizing websites, mobile apps, or games, we ensure that your products resonate with your target audience, making them feel like your brand was made just for them.</p>
        </div>
            <img className='w-[40%]' src={trusted} alt="" />
    </div>
  )
}

export default Localized