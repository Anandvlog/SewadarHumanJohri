// import Divider from "../common/Divider";
import SectionTitle from "../common/SectionTitle";
// import Card from "../common/Card";

// import { EXPERIENCE_CARDS } from "../../data/siteData";

const About = () => {
  return (
    <section className="page-block">
      {/* <SectionTitle hi="Sewadar Hanuman Johri Nalagarh – एक परिचय" /> */}

      <div className="prose">
        <p>
          Sewadar Hanuman Johri Nalagarh एक सेवा और मानवता केंद्रित स्थान है
          जहाँ आध्यात्मिकता, सरलता और सद्भाव की सीख दी जाती है।
        </p>

        <p>
          यह स्थान लोगों को एक बेहतर जीवन जीने, स्वयं की पहचान समझने और
          समाज में योगदान देने की प्रेरणा देता है।
        </p>
      </div>

      {/* <Divider /> */}

      <h3 className="subhead">आगंतुकों का अनुभव</h3>

      {/* <div className="cards-grid four">
        {EXPERIENCE_CARDS.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div> */}

      <blockquote className="quote-block">
        हमारा उद्देश्य है समाज में एक ऐसा वातावरण बनाना जहाँ हर व्यक्ति
        प्रेम, सम्मान और मानवीय मूल्यों के साथ जीवन जी सके।
      </blockquote>
    </section>
  );
};

export default About;