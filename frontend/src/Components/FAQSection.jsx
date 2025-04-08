import React, { useState } from 'react';

const faqs = [
  { 
    question: "1. Send Me a Request", 
    answer: "Once you've decided which package you want, fill out the contact form. I will reach out to you within 24 hours to schedule your session!"
  },
  { 
    question: "2. Consultation", 
    answer: (
      <>
        Once we've scheduled our session, we'll have a consultation to discuss the details such as
        <ul className="list-disc pl-5 mt-2">
          <li>Location</li>
          <li>Photo Inspiration/ Mood Board</li>
          <li>Styling Recommendations (if requested)</li>
          <li>
            <a className="hover:text-main text-blue-600" href="https://tailwindui.com/" rel="nofollow">
              Add link here
            </a>
          </li>
        </ul>
      </>
    )
  },
  { 
    question: "3. Payment", 
    answer: (
      <>
        At the end of our scheduling/ consultation communications, I'll send you an invoice for 50% of the session fee via text or e-mail. The remaining balance is due immediately following our session. I take the following forms of payments:
        <ul className="list-disc pl-5 mt-2">
          <li>Cash</li>
          <li>Venmo</li>
          <li>Zelle</li>
        </ul>
      </>
    )
  },
  { 
    question: "4. Sneak Peeks & Gallery Access", 
    answer: (
      <>
        Sneak peeks will be delivered within 48 hours of our session via text as a Google Drive link. The full gallery will be delivered within 7 days of our session via email with an updated link.
        <p className="mt-4">
          <span className="font-bold">Note: </span> You do <span className="font-bold">NOT</span> need a Google account to view your gallery.
        </p>
      </>
    )
  },
];

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0); // Default to first question

  return (
    <div className="container mx-auto rounded-lg border-4 border-dotted border-gray-200 p-6">
      <h3 className="mb-10 text-center">The Booking Process</h3>
      <div className="h-[400px] w-fit grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side: Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <a
              key={index}
              className={`flex flex-col text-left text-lg font-semibold cursor-pointer
                ${selectedQuestion === index ? 'text-lighter' : 'text-gray-800'} 
                hover:text-lighter`}
              onClick={() => setSelectedQuestion(index)}
            >
              {faq.question}
            </a>
          ))}
        </div>

        {/* Right Side: Answer */}
        <div className="text-start">
          <div className="faq-answer"> 
            {faqs[selectedQuestion] ? (
              <div>
                {/* <h2 className="text-xl font-bold text-gray-800">{faqs[selectedQuestion].question}</h2> */}
                <p className="text-gray-600">
                  {faqs[selectedQuestion].answer}
                </p>
              </div>
            ) : (
              <p className="text-gray-600">Select a question to see the answer.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
