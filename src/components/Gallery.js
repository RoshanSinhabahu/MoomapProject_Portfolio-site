function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-light" data-aos="fade-up" data-aos-delay="100">
      <div className="container text-center">
        <h2 className="mb-4">Our Gallery</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src="https://placecats.com/300/200" alt="Gallery 1" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="https://placecats.com/neo/300/200" alt="Gallery 2" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="https://placecats.com/millie_neo/300/200" alt="Gallery 3" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
