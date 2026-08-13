import Diya from "../common/Diya";
// import Eyebrow from "../common/Eyebrow";
// import Divider from "../common/Divider";
import SectionTitle from "../common/SectionTitle";
// import Card from "../common/Card";

// import { PHILOSOPHY_CARDS } from "../../data/siteData";

const Home = ({ go }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-inner">
          {/* <Diya size={72} className="hero-diya" /> */}

          {/* <Eyebrow>
            Human Service & Spiritual Center · Johri, Nalagarh
          </Eyebrow> */}

          <h1 className="hero-title">
            Sewadar Human Johri – Nalagarh
          </h1>

          <p className="hero-tagline">
            “मानव सेवा ही सच्ची भक्ति है”
          </p>

          <p className="hero-intro">
            आपका स्वागत है Sewadar Human Johri Nalagarh में। यह एक साधना,
            सेवा और आध्यात्मिक मार्ग पर आधारित केंद्र है जहाँ मानवता को
            सर्वोपरि माना जाता है। हमारा उद्देश्य समाज में शांति, प्रेम और
            सद्भाव का संदेश फैलाना है।
          </p>

          {/* <div className="cta-row">
            <button
              className="btn btn-primary"
              onClick={() => go("about")}
            >
              About Us
            </button>

            <button
              className="btn btn-outline"
              onClick={() => go("contact")}
            >
              Contact
            </button>

            <button
              className="btn btn-outline"
              onClick={() => go("contact")}
            >
              Location / Google Map
            </button>
          </div> */}
        </div>
      </section>

      {/* <Divider /> */}

      <section className="section">
        <SectionTitle hi="दर्शन और उद्देश्य" />

        {/* <div className="cards-grid four">
          {PHILOSOPHY_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div> */}
      </section>
    </>
  );
};

export default Home;