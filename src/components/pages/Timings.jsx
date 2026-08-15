import Diya from "../common/Diya";
import SectionTitle from "../common/SectionTitle";

const Timings = () => {
  return (
    <section className="page-block">
      <SectionTitle hi="दर्शन एवं केंद्र का समय" />

      <div className="timing-cards">
        {/* Center Timing */}
        <div className="timing-card">
          <h4>केंद्र का समय</h4>

          <div className="timing-row">
            <span>मंगलवार - शनिवार</span>
            <strong>सुबह 6:00 बजे से खुला</strong>
          </div>

          <div className="timing-row">
            <span>रविवार - सोमवार</span>
            <strong>बंद</strong>
          </div>
        </div>

        {/* Bhajan / Satsang */}
        <div className="timing-card highlight">
          <Diya size={30} />

          <h4>भजन संध्या एवं सत्संग</h4>

          <div className="timing-row">
            <span>मंगलवार - शनिवार</span>
            <strong>रात 10:00 बजे</strong>
          </div>
        </div>
      </div>

      <p className="note">
        कार्यक्रमों और विशेष अवसरों के समय में आवश्यकता के अनुसार परिवर्तन हो
        सकता है।
      </p>
    </section>
  );
};

export default Timings;
