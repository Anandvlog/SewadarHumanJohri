const Timings =()  =>{
  return (
    <section className="page-block">
      {/* <SectionTitle hi="दर्शन एवं केंद्र का समय" /> */}
      <div className="timing-cards">
        <div className="timing-card">
          {/* <Clock size={26} /> */}
          <h4>केंद्र का समय</h4>
          <div className="timing-row">
            <span>Opening Time</span>
            <strong>6:00 AM</strong>
          </div>
          <div className="timing-row">
            <span>Closing Time</span>
            <strong>8:00 PM</strong>
          </div>
        </div>
        <div className="timing-card highlight">
          {/* <Diya size={30} /> */}
          <h4>भजन / सत्संग</h4>
          <div className="timing-row">
            <span>रविवार</span>
            <strong>5:00 PM</strong>
          </div>
        </div>
      </div>
      <p className="note">
        कार्यक्रमों एवं विशेष अवसरों के समय में आवश्यकता अनुसार परिवर्तन हो
        सकता है।
      </p>
    </section>
  );
}


export default Timings