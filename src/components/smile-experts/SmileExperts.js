import React from "react";
import "./SmileExperts.scss";
import drKhushbuPhoto from "../../images/DrKhusi.jpeg";
import drNirajPhoto from "../../images/dr-niraj-vaghela.png";
import drSowjanyaPhoto from "../../images/dr-sowjanya-rajesh.png";
import drBhoomiPhoto from "../../images/DrBhumi.jpeg";

const EXPERTS = [
  {
    id: "khushbu-singh",
    name: "Dr. Khushbu Singh",
    photo: drKhushbuPhoto,
    photoAlt: "Dr. Khushbu Singh, Founder & Principal Dentist",
    portrait: true,
    designation:
      "Founder & Principal Dentist, Sutra Dental · BDS | Cert. EPHEM (IIT Delhi)",
    paragraphs: [
      "Dr. Khushbu Singh is a precision-driven dentist who blends advanced technology with compassionate care. With a BDS and a Certification from IIT Delhi, she brings a high-tech, modern perspective to oral healthcare.",
      "With over 8 years of clinical excellence and a track record of treating more than 5,000 patients, Dr. Singh brings a wealth of expertise to Ahmedabad.",
    ],
    highlightsTitle: "Experience & Expertise",
    highlights: [
      "Proven Leadership: Previously owned and operated a successful private practice in Pune, delivering high-quality care to a diverse patient base.",
      "Clinical Focus: Expert in Dental Implants and Aesthetic Smile Design.",
      "Innovation: Founder of EELA, a startup dedicated to elevating aesthetic industry standards.",
      'Philosophy: Built on "Sutra"—the thread of trust—ensuring every patient receives treatment with empathy and excellence.',
    ],
  },
  {
    id: "niraj-vaghela",
    name: "Dr. Niraj Vaghela",
    photo: drNirajPhoto,
    photoAlt: "Dr. Niraj Vaghela, Orthodontist",
    portrait: false,
    designation: "Orthodontist & Dentofacial Orthopedics · MDS (AIIMS Jodhpur)",
    paragraphs: [
      "Dr. Niraj Vaghela is a highly skilled orthodontist and dentofacial orthopedics specialist (AIIMS Jodhpur) with advanced training and clinical expertise in modern orthodontic care. With an MDS in Orthodontics and experience as a Senior Resident at AIIMS, he is committed to delivering precise, evidence-based, and patient-centered treatment.",
      "Dr. Vaghela specializes in comprehensive orthodontic solutions, including fixed appliances, growth modification, and advanced treatment planning including aligners. His approach combines clinical excellence with a focus on comfort, aesthetics, and long-term oral health outcomes.",
      "Known for his dedication to research and academics, he continuously integrates the latest innovations and scientific advancements into his practice to ensure optimal results for every patient.",
    ],
  },
  {
    id: "sowjanya-rajesh",
    name: "Dr. Sowjanya Rajesh",
    photo: drSowjanyaPhoto,
    photoAlt: "Dr. Sowjanya Rajesh, Pediatric Dentist",
    portrait: true,
    designation: "Pediatric Dentist · MDS",
    paragraphs: [
      "Dr. Sowjanya Rajesh, a distinguished pediatric dentist (University 2nd Rank, College 1st in MDS), ensures every child enjoys a fun, fearless, and painless dental experience.",
      "Her expertise and empathetic approach ensure each child receives high-quality, seamless dental treatment in a comfortable and reassuring environment.",
    ],
  },
  {
    id: "bhoomi-agrawal",
    name: "Dr. Bhoomi Agrawal",
    photo: drBhoomiPhoto,
    photoAlt: "Dr. Bhoomi Agrawal, Consultant Oral & Maxillofacial Surgeon",
    portrait: true,
    designation:
      "Consultant Oral & Maxillofacial Surgeon · MDS (NPDCH)",
    paragraphs: [
      "Dr. Bhoomi Agrawal is a highly skilled Oral and Maxillofacial Surgeon specializing in advanced facial, jaw, and complex oral reconstructive procedures. Known for her surgical precision and patient-centric approach, she seamlessly bridges the gap between essential clinical oral surgery and facial aesthetics.",
      "Dr. Agrawal completed her foundational Bachelor of Dental Surgery (BDS) and went on to pursue her rigorous, specialized Master of Dental Surgery (MDS) in Oral and Maxillofacial Surgery from the prestigious Narsinhbhai Patel Dental College & Hospital (NPDCH). Combining academic excellence with extensive clinical expertise, she is dedicated to restoring both optimal oral function and facial harmony for her patients.",
    ],
  },
];

const SmileExperts = () => {
  return (
    <section
      className="smile-experts"
      id="smile-experts"
      aria-labelledby="smile-experts-heading"
    >
      <div className="smile-experts__inner">
        <header className="smile-experts__header">
          <h2 id="smile-experts-heading" className="smile-experts__title">
            Meet Your Smile Experts
          </h2>
          <p className="smile-experts__lead">
            Leading clinicians dedicated to evidence-based care, comfort, and
            lasting results.
          </p>
        </header>

        <ul className="smile-experts__list">
          {EXPERTS.map((expert, index) => (
            <li key={expert.id}>
              <article
                className={`expert-card${index % 2 === 1 ? " expert-card--reverse" : ""}`}
              >
                <div
                  className={`expert-card__media${
                    expert.portrait ? " expert-card__media--portrait" : ""
                  }`}
                >
                  <img
                    src={expert.photo}
                    alt={expert.photoAlt}
                    loading="lazy"
                  />
                </div>
                <div className="expert-card__body">
                  <h3 className="expert-card__name">{expert.name}</h3>
                  <p className="expert-card__role">{expert.designation}</p>
                  <div className="expert-card__bio">
                    {expert.paragraphs.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                    {expert.highlights?.length > 0 && (
                      <div className="expert-card__highlights">
                        {expert.highlightsTitle && (
                          <h4 className="expert-card__highlights-title">
                            {expert.highlightsTitle}
                          </h4>
                        )}
                        <ul>
                          {expert.highlights.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SmileExperts;
