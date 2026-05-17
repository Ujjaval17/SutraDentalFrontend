import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FAQ_ITEMS } from "../../seo/faqData";
import "./faqs.scss";

const Faqs = () => {
  const navigate = useNavigate();
  const [faqsList, setFaqslist] = useState(
    FAQ_ITEMS.map((item) => ({ ...item, showAnswer: false }))
  );

  const scrollToAppointment = (e) => {
    e.stopPropagation();
    const el = document.getElementById("appointment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "appointment" } });
    }
  };

  const toggleAnswer = (index) => {
    setFaqslist((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, showAnswer: !item.showAnswer } : item
      )
    );
  };

  return (
    <section className="faqs-container" aria-labelledby="faqs-heading">
      <h2 id="faqs-heading">Frequently asked questions</h2>
      <div className="questions">
        {faqsList.map((item, index) => {
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;
          return (
            <div key={item.id} className="faqs-content mb-3">
              <button
                type="button"
                id={buttonId}
                className="faqs-que d-flex justify-content-between w-100 border-0 bg-transparent p-3"
                aria-expanded={item.showAnswer}
                aria-controls={panelId}
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <span aria-hidden>{item.showAnswer ? <FaMinus /> : <FaPlus />}</span>
              </button>
              {item.showAnswer && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faqs-ans d-flex p-3"
                >
                  <span className="text-start">
                    {item.id === 3 ? (
                      <>
                        You can book an appointment by{" "}
                        <button
                          type="button"
                          onClick={scrollToAppointment}
                          className="faq-appointment-link border-0 bg-transparent p-0"
                        >
                          clicking here
                        </button>
                        .
                      </>
                    ) : (
                      item.answer
                    )}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
