import Diya from "../common/Diya";
// import Eyebrow from "../common/Eyebrow";
// import Divider from "../common/Divider";
import SectionTitle from "../common/SectionTitle";
// import Card from "../common/Card";

// import { PHILOSOPHY_CARDS } from "../../data/siteData";
import hanumanji_img from "../../assets/images/hanuman.jpeg"

const Home = ({ go }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-inner">
          {/* <Diya size={72} className="hero-diya" /> */}

          {/* <Eyebrow>
          Hanuman Service & Spiritual Center · Johri, Nalagarh
          </Eyebrow> */}
           <img
            src={hanumanji_img}
            alt="Sewadar Hanuman Johri Nalagarh"
            className="hero-hanuman"
          />

          <h1 className="hero-title">Sewadar Hanuman Johri – Nalagarh</h1>

          <p className="hero-tagline">“मानव सेवा ही सच्ची भक्ति है”</p>

          <p className="hero-intro">
            आपका स्वागत है Sewadar Hanuman Johri Nalagarh में। यह एक साधना, सेवा
            और आध्यात्मिक मार्ग पर आधारित केंद्र है जहाँ मानवता को सर्वोपरि माना
            जाता है। हमारा उद्देश्य समाज में शांति, प्रेम और सद्भाव का संदेश
            फैलाना है।
          </p>
        </div>
      </section>

      {/* <Divider /> */}

      <section className="section">
        <SectionTitle hi="LIVE दर्शन " />

        {/* <div className="cards-grid four">
          {PHILOSOPHY_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div> */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NUBbDbCd4xw?si=Dr99x8XFoLIMRYW1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
