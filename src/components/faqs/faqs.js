import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./faqs.scss";

const Faqs = () => {
  const [faqsList, setFaqslist] = useState([
    {
      id: 1,
      question: "Why should I consult Dr. Khushbu Singh?",
      answer:
        "Dr. Khushbu Singh is a specialist in Dental surgeon. She has more than 5 years of experience.",
      showAnswer: false,
    },
    {
      id: 2,
      question: "Why is it best to consult a specialist?",
      answer:
        "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      showAnswer: false,
    },
    {
      id: 3,
      question: "How can I book an appointment with Dr. Khushbu Singh?",
      answer: "You can book an appointment by clicking here.",
      showAnswer: false,
    },
    {
      id: 4,
      question: "What are the different modes of consultation?",
      answer:
        "Dr. Khushbu Singh provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Pune or you can also consult the doctor online via video or telephonic call. Please click here to book an appointment.",
      showAnswer: false,
    },
    {
      id: 5,
      question:
        "Are safety guidelines followed in Dr. Khushbu Singh's consultation chamber?",
      answer:
        "Yes, our staff and clinic follows all safety protocols and we take appropriate measures to ensure a safe environment for our patients, including social distancing and hand sanitizing stations.",
      showAnswer: false,
    },
    {
      id: 6,
      question: "What if my query is not listed here?",
      answer:
        "If you have any more queries that aren't listed, you can email us or call us.",
      showAnswer: false,
    },
  ]);

  const toggleAnswer = (index) => {
    setFaqslist((prevFaqsList) =>
      prevFaqsList.map((item, i) =>
        i === index ? { ...item, showAnswer: !item.showAnswer } : item
      )
    );
  };

  return (
    <div className="faqs-container">
      <h1>
        <u>FAQ</u>s
      </h1>
      <div className="questions">
        {faqsList.map((item, index) => (
          <div className="faqs-content mb-3">
            <div
              className="faqs-que d-flex justify-content-between cursor-pointer p-3"
              onClick={() => {
                toggleAnswer(index);
              }}
            >
              <span>{item?.question}</span>
              <span>{item?.showAnswer ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {item?.showAnswer && (
              <div
                className="faqs-ans d-flex p-3"
                onClick={() => {
                  toggleAnswer(index);
                }}
              >
                <span className="text-start">{item?.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
