import React from 'react'
import video from '../assets/video1.mp4'
import video1 from '../assets/video2.mp4'

const Voice = () => {
  return (
    <div className=' relative mt-32 px-4 md:px-0'>
          <div id="Demo" className="md:mt-32 mt-20 sticky top-32">
      <h1 className="text-[32px] font-semibold text-white text-center">
        Hear the Voice
      </h1>
      <p className="text-[#969696] text-[14px] font-[500] text-center max-w-[555px] mx-auto">
        Got questions? We’ve answered some of the most common ones to help you
        understand how we work, what we offer, and how we can support your
        business.
      </p>

      {/* Container with enough height for scroll effect */}
      <div className="relative md:h-[230vh] h-[80vh] mt-12">
        {/* First Video (pinned) */}
        <div className="sticky top-20 flex justify-center z-10">
          <video
            className="w-[1200px] rounded-lg shadow-lg"
            src={video}
            loop
            muted
            autoPlay
          ></video>
        </div>

        {/* Second Video (scrolls over first) */}
        <div className="sticky top-20 flex justify-center z-20 md:mt-[40vh] mt-[10vh]">
          <video
            className="w-[1200px] rounded-lg shadow-lg"
            src={video1}
            loop
            muted
            autoPlay
          ></video>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Voice
