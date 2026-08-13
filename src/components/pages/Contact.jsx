const Contact = () => {
  const mapSrc =
    // "https://www.google.com/maps?q=" +
    // encodeURIComponent("Johri, Nalagarh, Himachal Pradesh, India") +
    // "&output=embed";
    "https://maps.app.goo.gl/8U5is5wuzM4RKUFFA?g_st=ac";
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.3728503168413!2d76.6977000799577!3d31.04607350452347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055bfd14d390b3%3A0x10e24977fd232ffc!2z4KSq4KWN4KSw4KS-4KSa4KWA4KSoIOCktuCljeCksOClgCDgpLngpKjgpYHgpK7gpL7gpKjgpJzgpYvgpKHgpLzgpYA!5e1!3m2!1sen!2sin!4v1786644349764!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Sewadar Human Johri Location"
          />
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
