import React from 'react';
import per from '../../../assets/per.png'
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      title: "CEO",
      company: "Innovate Solutions",
      text: "I had an amazing experience! They took care of all the details and got the visa seamlessly. From the flights to the activities, everything was perfect. Highly recommend!",
      avatar: per
    },
    {
      id: 2,
      name: "Emily Davis",
      title: "Product Manager", 
      company: "Nexus Digital",
      text: "This travel agency went above and beyond! Their personalized itinerary made our honeymoon unforgettable. The customer service was exceptional, and we felt taken care of every step of the way.",
      avatar: per
    },
    {
      id: 3,
      name: "David Lee",
      title: "Founder",
      company: "GreenLeaf Enterprises", 
      text: "They helped plan the perfect family vacation. They listened to our needs, found great accommodations, and suggested fun activities for all ages. We'll definitely book with them again!",
      avatar: per
    },
  ];

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-white" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
      <div id='Testimonial' className=" w-[80%] relative mx-auto mt-32">
              <div className=' md:w-[900px] md:h-[700px] h-[1500px] bg-[#56035db5] blur-[950px] rounded-full'>
            </div>
       <div className=' absolute top-0'>
           {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
          <p className="text-gray-400 text-lg">
            Trusted by businesses that value results, support, and long-term partnership.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-transparent rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            >
              {/* Twitter X Icon */}
              <div className="absolute top-4 right-4 text-gray-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className=""
                />
              </div>

              {/* Star Rating */}
              <StarRating />

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold text-sm">
                  {testimonial.name} • {testimonial.title}
                </h4>
                <p className="text-white text-sm mt-3">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
       </div>
      </div>
  );
};

export default Testimonial;