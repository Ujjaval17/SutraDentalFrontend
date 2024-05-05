import React from "react";
import './allTreatments.scss'
import dentalFillingsLogo from "../../images/dentalfillings.svg";
import dentalFilligsImage from "../../images/dentalFillingsImage.jpg"
import dentalImplantsLogo from "../../images/dentalImplants.svg";
import dentalImplantsImage from "../../images/dentalFillingsImage.jpg"
import denturesLogo from "../../images/dentures.svg";
import denuresImage from "../../images/denturesImage.jpg"
import rootCanalLogo from "../../images/rootCanal.svg";
import rootCanalImage from "../../images/rootCanalImage.jpg"
import orthodonticLogo from "../../images/orthodontic.svg";
import orthodonticImage from "../../images/orthodonticImages.jpg"
import padeatricLogo from "../../images/padeatric.svg";
import padeatricImage from "../../images/padeatricImage.jpg"
import cosmeticDentistryLogo from "../../images/cosmeticDentistry.svg";
import cosmeticDentistryImage from "../../images/cosmeticDentistryImage.jpg"
import teethWhiteningLogo from "../../images/teethWhitening.svg";
import teethWhiteningImage from "../../images/Teeth Whitening.jpg"
import TreatmentCard from "../../components/treatment-card/treatmentCard";
import Faqs from "../../components/faqs/faqs";

const AllTreatments = () => {
    const TreatmentsList = [
        {
          name: "Dental Fillings",
          shortDesc: "Repairing the decay with fillings that blend in.",
          longDesc:
            "A dental restoration, also known as a dental filling, is a procedure that restores the function, shape, and structure of a decayed tooth structure which could be a result of caries or trauma. Tooth-colored restorations also called composite restoration binds chemically to the tooth surface thus replicating the normal tooth color, form, and function. These fillings have a strength similar to a healthy tooth with no cavities. There are a variety of dental filling materials available out of which Gold, silver, amalgam are discontinued due to various reasons. The tooth-colored restorations such as composites, and glass ionomers filling material are widely used options for filling teeth nowadays. Do remember that we can help you determine the best type of filling material as per the location and extent of the decay and your oral hygiene conditions. CONTACT US TO KNOW MORE !!!",
          image: "",
          logo: dentalFillingsLogo,
        },
        {
          name: "Orthodontic Treatment/Braces",
          shortDesc: "Never be too shy to smile.",
          longDesc:
            "Dental negligence during teenage years often leads to the presence of misaligned teeth which is not pleasing once an individual begins his adult college or professional life. These misaligned patterns of teeth often include crowding, crooked teeth, and spacing between teeth along with functional discrepancies which could be a reason to not smile often and might lead to anxiety or self-confidence issues. The position of teeth may have an impact on the shape of the face and its appearance therefore getting it corrected can help boost your confidence and aid in normal function as well. Orthodontic treatment helps in aligning the teeth in a proper position which not only has cosmetic aspects but also helps in improving the function of teeth. This treatment is practiced by a specialist called an orthodontist. Malaligned teeth can be a result of many habits acquired during childhood like nail/lip biting, tongue thrusting, or other factors like finger sucking, small jaw size, or trauma. Some people may benefit from newer mini-braces, which are much smaller than traditional braces as the latter poses a means of unpleasant appearance. Removable plastic retainers are another option for teeth straightening. If your teeth aren't too crowded, this may also work. We will guide you about the different types of braces and help you decide which one is best for you. BOOK YOUR APPOINTMENT NOW!!!",
          image: "",
          logo: orthodonticLogo,
        },
        {
          name: "Root Canal Treatment",
          shortDesc: "Let's save the tooth.",
          longDesc:
            "The most common reason for an individual to visit a dental surgeon is pain. Pain can be caused by various reasons of which dental caries is the most common reason. Usually, caries that are not too deep but cause sensitivity is dealt with by dental fillings. But what if it has gone too deep to be sealed by just filling?? We have a solution for this. Root canal treatment helps eliminate bacteria from the infected root canal and prevents reinfection of the tooth and helps save the natural tooth. The procedure requires the removal of the decayed and infected part followed by cleaning and filling of the canal with proper medications and finally sealing it off followed by crown placement. We provide treatment options that help improve your smile and tooth function. CONTACT US FOR MORE DETAILS.",
          image: "",
          logo: rootCanalLogo,
        },
        {
          name: "Teeth Whitening",
          shortDesc: "Are you eyeing whiter Teeth?",
          longDesc:
            "Teeth whitening is a simple procedure. Tooth-whitening bleaches help break down stains, resulting in brighter teeth. There are two types of stains - extrinsic and intrinsic. Extrinsic stains as a result of coffee drinking, smoking, or certain other foodstuffs respond better to teeth whitening as compared to intrinsic stains as a result of fluoride, tetracycline, or even pulpal damage which might require extended sitting to achieve desired results. In-office option: Application of a gel and the use of light to speed up and enhance the bleaching process. Tooth sensitivity and gingival inflammation can be potential side effects of tooth whitening. Always note to choose your shade wisely and lot go after traditional pearl white tooth so as to offer a naturally healthy and beautiful smile. Your doctor will always be happy to guide you through your shade selection process. BOOK YOUR APPOINTMENT TO GET THE BEST TREATMENT !!!",
          image: "",
          logo: teethWhiteningLogo,
        },
        {
          name: "Dental Implants",
          shortDesc: "Make your implants last a lifetime.",
          longDesc:
            "For replacing a missing tooth or teeth, dental implants are so far the most popular and ideal option. They have had a significant impact on dentistry in the last quarter-century or so. Dental implants can be used to replace a single missing tooth as an implant-supported bridge and a full mouth implant-supported overdenture. Implant-supported crowns and dentures have the advantage of not shifting or slipping while eating or speaking. They are more natural and comfortable, and they also prevent natural bone loss. The quality and quantity of bone available determine their success. Also, the final restoration that is placed on top of the implant has a significant impact. REACH OUT TO US FOR FURTHER QUERIES !!!",
          image: "",
          logo: dentalImplantsLogo,
        },
        {
          name: "Pediatric Dentistry",
          shortDesc: "For your child's dental health",
          longDesc:
            "Healthy habits last a lifetime and without proper dental care and knowledge, children are at risk of developing tooth decay, which can lead to a lifetime of pain and fear. Therefore imparting the knowledge early can keep the complications at bay. Pediatric Dentistry lays its emphasis on : Educating and counseling the parents so that oral health care and examinations can begin from an early age and reduce the risk of developing dental decay. Important preventive measures such as proper nutrition and diet recommendation along with fluoride and sealant treatments can help safeguard a child's teeth. A continuous evaluation can help assess and evaluate the dental health as the child grows so that major dental issues and problems can be treated early such as counseling for habits such as thumb sucking, and finger chewing which can result in the alignment of the teeth. CONTACT US TO KNOW MORE !!!",
          image: "",
          logo: padeatricLogo,
        },
        {
          name: "Dentures",
          shortDesc: "Know the right type of denture for you.",
          longDesc:
            "Dentures are a popular tooth replacement option that is also one of the oldest treatment methods. Dentures aid in food chewing, speech, and a person's aesthetic appeal. Depending on the number of teeth that need to be replaced, removable partial or complete dentures can be made. Partial Dentures: When one or more natural teeth remain in the upper or lower jaw. Complete Dentures: When all of the teeth in a jaw have been lost and need to be replaced prosthetically Do not make the decision on your own: the type of dentures you require is primarily dependent on the condition of your present teeth, jaws, gum health, and overall oral hygiene and maintenance. CONTACT US TO LEARN MORE.",
          image: "",
          logo: denturesLogo,
        },
        {
          name: "Cosmetic Dentistry",
          shortDesc: "Time to flaunt that smile.",
          longDesc:
            "Cosmetic dentistry is the new frontier when it comes to enhancing one's smile and enhancing one's appearance. Teeth color, shape, size, alignment, and occlusion are all improved. The following treatments are included in cosmetic dental procedures: Crooked teeth. Malaligned teeth. Gap between teeth. Protruding teeth. Stained teeth. Gummy smiles. Fractured teeth. Pigmentation on gums. Old silver fillings. Cosmetic treatments like cosmetic fillings, porcelain veneers, teeth whitening, crown and bridge, full mouth rehabilitation, smile correction, and teeth restoration are provided at our clinic. CONTACT US TO GET THE BEST SERVICE !!!",
          image: "",
          logo: cosmeticDentistryLogo,
        },
      ];
  return (
    <div>
      <div className="treatment-list">
        <h1 className="fw-bold text-start my-5">Treatments</h1>
        <div className="treatment-list-container">
          {TreatmentsList?.map((item, index) => (
            <TreatmentCard treatment={item} />
          ))}
        </div>
      </div>
      <Faqs />
    </div>
  );
};

export default AllTreatments;
