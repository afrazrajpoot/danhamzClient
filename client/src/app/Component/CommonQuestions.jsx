import React from 'react';
import { Link } from 'react-router-dom';

const CommonQuestions = () => {
  const questions = [
    {
      question: "Is my property suitable for auction?",
      answer: "Any type, style, design or price of property whether residential or commercial is suitable for auction."
    },
    {
      question: "Can I accept offers outside the auction?",
      answer: "Bids can be placed on your property before, during or after an auction event. You can accept an offer at any time and we will ensure that the buyer agrees to the auction terms of security and speed. The auction team will discuss the bids with you, if there is a lot of interest in your property we would normally recommend waiting until the auction date but it is your decision whether to accept an offer before the auction."
    },
    {
      question: "How can I ensure I get the price I want?",
      answer: "You have a safety net of a reserve price, your property will not sell below this."
    },
    {
      question: "How quickly do I need to move?",
      answer: "The quickest way to sell your property is with Unconditional auction terms where there is an immediate exchange of contracts and the sale will complete within 28 days. Alternatively you can sell within 56 days through the conditional auction terms."
    },
    {
      question: "How often do we hold an auction?",
      answer: "We have live monthly auctions covering the whole of the UK and online auctions ending daily."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Common Questions
      </h2>

      <div className="space-y-[4vw]">
        {questions.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <h3 className="text-2xl font-bold text-gray-900 ">
              {item.question}
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    <Link to='/contact' className=' flex justify-center'>
    <button className="bg-yellow-600 text-[3vw] md:text-[1vw] font-medium text-center  mt-[5vw] px-[4vw] py-[1vw] text-white hover:bg-yellow-800 rounded-md">
            SELL YOUR PROPERTY FOR FREE NOW
          </button>
    </Link>
    </div>
  );
};

export default CommonQuestions;