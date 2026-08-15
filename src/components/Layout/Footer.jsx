const Footer =({ go })  =>{
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          {/* <Diya size={28} /> */}
          <p>© Sewadar Hanuman Johri Nalagarh – Hanuman Service &amp; Spiritual Path</p>
        </div>
        {/* <nav className="footer-links">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => go(item.id)}>
              {item.label}
            </button>
          ))}
        </nav> */}
        {/* <SocialRow variant="footer" /> */}
        <p className="footer-quote">“सभी में मानवता – यही सच्ची पूजा है”</p>
      </div>
    </footer>
  );

}

export default Footer