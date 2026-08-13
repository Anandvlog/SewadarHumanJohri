const Activities =() => {
  return (
    <section className="page-block">
      <SectionTitle hi="हमारे प्रमुख सेवा कार्य और आध्यात्मिक गतिविधियाँ" />
      <div className="cards-grid three">
        {ACTIVITIES.map((a, i) => (
          <div className="activity-card" key={a}>
            <Flame size={18} className="activity-icon" />
            <span>{a}</span>
          </div>
        ))}
      </div>

      <Divider />

      <h3 className="subhead">साप्ताहिक समय-सारणी</h3>
      <div className="schedule-grid">
        <div className="schedule-item">
          <Sunrise size={20} />
          <h4>रोज सुबह</h4>
          <p>ध्यान और शांति प्रार्थना</p>
        </div>
        <div className="schedule-item">
          <Calendar size={20} />
          <h4>रविवार</h4>
          <p>सामूहिक भजन और आध्यात्मिक संदेश</p>
        </div>
        <div className="schedule-item">
          <HeartHandshake size={20} />
          <h4>विशेष दिन</h4>
          <p>सेवा एवं सामूहिक भोजन</p>
        </div>
      </div>
      <p className="note">समय और गतिविधियाँ आवश्यकता अनुसार अपडेट की जा सकती हैं।</p>
    </section>
  );
}


export default Activities
