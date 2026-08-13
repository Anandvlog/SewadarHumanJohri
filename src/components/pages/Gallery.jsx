const Gallery =()  =>{
  return (
    <section className="page-block">
      <SectionTitle hi="फोटो गैलरी" />
      <div className="cards-grid gallery">
        {GALLERY_CATEGORIES.map((cat) => (
          <div className="gallery-card" key={cat}>
            <div className="gallery-placeholder">
              <ImageIcon size={28} strokeWidth={1.5} />
              <span>Photos coming soon</span>
            </div>
            <p className="gallery-label">{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Gallery;