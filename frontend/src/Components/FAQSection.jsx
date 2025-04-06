import React, { useState } from 'react';

const faqs = [
  { 
    question: "01. Send Me a Request", 
    answer: "Once you've decided which package you want, fill out the request form. I will reach out to you within 24 hours to schedule your session!"
  },
  { 
    question: "02. Consultation", 
    answer: (
      <>
        Once we've scheduled our session, we'll have a consultation to discuss the details such as
        <ul>
          <li>Location</li>
          <li>Photo Inspiration/ Mood Board</li>
          <li>Styling Recommendations (if requested)</li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow">
              Link for other shiz??
            </a>
          </li>
        </ul>
      </>
    )
  },
  { 
    question: "03. Payment", 
    answer: (
      <>
        At the end of our scheduling/ consultation communications, I'll send you an invoice for 50% of the session fee via text or e-mail. The remaining balance is due immediately following our session. I take the following forms of payments:
        <ul>
          <li>Cash</li>
          <li>Venmo</li>
          <li>Zelle</li>
        </ul>
      </>
    )
  },
  { 
    question: "04. Sneak Peeks & Gallery Access", 
    answer: (
      <>
        Sneak peeks will be delivered within 48 hours of our session via text as a Google Drive link. The full gallery will be delivered within 7 days of our session via email with an updated link.
        <p>
          <span>Note: </span> You do <span>NOT</span> need a Google account to view your gallery.
        </p>
      </>
    )
  },
];

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0); // Default to first question

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-10">My Booking Process</h2>
      <div className="h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-2"> {/* Changed grid-cols-2 to grid-cols-1 for all screen sizes */}
        {/* Left Side: Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              className="flex flex-col text-left text-lg font-semibold text-gray-800 hover:text-pink-600"
              onClick={() => setSelectedQuestion(index)}
            >
              {faq.question}
            </button>
          ))}
        </div>

        {/* Right Side: Answer */}
        <div className="text-start">
          <div className="faq-answer" style={{ minHeight: '200px' }}> {/* Fixed height for the answer section */}
            {faqs[selectedQuestion] ? (
              <div>
                <h2 className="text-xl font-bold text-gray-800">{faqs[selectedQuestion].question}</h2>
                <div className="mt-4 text-gray-600">
                  {faqs[selectedQuestion].answer}
                </div>
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
