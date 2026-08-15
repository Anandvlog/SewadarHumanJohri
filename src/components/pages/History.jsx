import Diya from "../common/Diya";

const  History =()=> {
  const milestones = [
    { label: "स्थापना", text: "समाज को जोड़ने और आध्यात्मिक जागरूकता के उद्देश्य से स्थापना", meta: "[Information to be added]" },
    { label: "विकास", text: "भजन, सेवा कार्य और ध्यान की परंपराएँ जुड़ती गईं", meta: "[Information to be added]" },
    { label: "वर्तमान", text: "एक सक्रिय आध्यात्मिक एवं सेवा केंद्र के रूप में कार्यरत", meta: "[Information to be added]" },
  ];
  return (
    <section className="page-block">
      {/* <SectionTitle hi="Hanuman Johri का इतिहास" /> */}
      <div className="prose">
        <p>
          Hanuman Johri की परंपरा आत्मिक जागृति और मानवीय सेवा पर आधारित है।
        </p>
        <p>
          वर्षों से यह परंपरा लोगों को अच्छे कर्म, शांत मन और सत्य मार्ग पर
          चलने की प्रेरणा देती आ रही है।
        </p>
        <p>
          Nalagarh क्षेत्र में Sewadar Hanuman Johri की स्थापना समाज को जोड़ने और
          लोगों को आध्यात्मिक रूप से जागरूक करने के उद्देश्य से की गई थी।
        </p>
        <p>
          समय के साथ यहाँ भजन, सेवा कार्य और ध्यान की परंपराएँ जुड़ती गईं और
          यह एक आध्यात्मिक केंद्र के रूप में विकसित हुआ।
        </p>
      </div>

      {/* <Divider /> */}

      <div className="timeline">
        {milestones.map((m, i) => (
          <div className="timeline-item" key={m.label}>
            <div className="timeline-dot">
              <Diya size={20} />
            </div>
            <div className="timeline-content">
              <h4>{m.label}</h4>
              <p>{m.text}</p>
              <span className="placeholder-tag">{m.meta}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="note">
        ऐतिहासिक तस्वीरें, महत्वपूर्ण घटनाएँ एवं आगामी जानकारी शीघ्र जोड़ी
        जाएगी।
      </p>
    </section>
  );
}


export default History