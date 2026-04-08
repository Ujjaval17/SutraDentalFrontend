import React from "react";
import "./SmileExperts.scss";
import drNirajPhoto from "../../images/dr-niraj-vaghela.png";
import drSowjanyaPhoto from "../../images/dr-sowjanya-rajesh.png";

const EXPERTS = [
  {
    id: "niraj-vaghela",
    name: "Dr. Niraj Vaghela",
    photo: drNirajPhoto,
    photoAlt: "Dr. Niraj Vaghela, Orthodontist",
    portrait: false,
    designation:
      "Orthodontist & Dentofacial Orthopedics · MDS (AIIMS Jodhpur) · Senior Resident",
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
