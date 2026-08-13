const Contact = () =>{
  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Johri, Nalagarh, Himachal Pradesh, India") +
    "&output=embed";
  const directionsHref =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Johri, Nalagarh, Himachal Pradesh, India");

  return (
    <section className="page-block">
      {/* <SectionTitle hi="संपर्क एवं स्थान" /> */}
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-row">
            {/* <Users size={18} /> */}
            <div>
              <span className="info-label">Name</span>
              <p>Sewadar Human Johri Nalagarh</p>
            </div>
          </div>
          <div className="info-row">
            {/* <MapPin size={18} /> */}
            <div>
              <span className="info-label">Address</span>
              <p>Johri, Nalagarh, Himachal Pradesh, India</p>
            </div>
          </div>
          <div className="info-row">
            {/* <Phone size={18} /> */}
            <div>
              <span className="info-label">Phone</span>
              <p className="placeholder-tag">[Phone Number – Add Later]</p>
            </div>
          </div>
          <div className="info-row">
            {/* <Mail size={18} /> */}
            <div>
              <span className="info-label">Email</span>
              <p className="placeholder-tag">[Email Address – Add Later]</p>
            </div>
          </div>
          <a
            className="btn btn-primary"
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>

          <div className="follow-block">
            <span className="info-label">Follow Us</span>
            {/* <SocialRow variant="contact" /> */}
          </div>
        </div>

        <div className="map-wrap">
          <iframe
            title="Sewadar Human Johri Nalagarh Location"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}


export default Contact