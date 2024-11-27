import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "I would just like to thank you and your team for the professional way in which you so quickly sold my property last month. The resulting sale price was more than I was expecting, but very very welcome.",
      author: "Mr E.Clarke"
    },
    {
      text: "Very efficient service, kept up to date with progress regularly. Options clearly explained for the sale, contacted us when she said she would, very polite. Friendly and professional manner would use again, thank you.",
      author: "Paul Livesey"
    },
    {
      text: "danhamz fantastic at helping me sell my property. I had been on the normal market with another agent with no success. When the lady came from danhamz's to discuss putting my house on the market they suggested auction as an alternative. I wasn't too sure about it at first but she reassured me that I would have a reserve so they wouldn't sell for less than what I wanted. I had lots of viewings and offers and the house sold for more than what I had set the reserve for, would definitely recommend the auction team to other people, in fact I have already passed on their details to my neighbour.",
      author: "Mr Simpson"
    },
    {
      text: "I am delighted with the service from the auction department. I achieved a much higher price than I anticipated in the supposedly poor market.",
      author: "Mr J Carrator"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Customers Say About Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[5vw] gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md relative"
            >
              {/* Quote Icon */}
           <figure className='flex justify-center'>
           <img src="/images/quote.png" alt="" />
           </figure>

              {/* Testimonial Content */}
              <div className="mt-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="text-blue-500 font-medium text-center">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figure className='w-full flex justify-center mt-[5vw]'>
        <img src="/images/rics.jpg" alt="logo" />
      </figure>
    </div>
  );
};

export default Testimonials;