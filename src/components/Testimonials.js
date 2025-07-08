function Testimonials() {
  return (
    <section id="testimonials" className="py-5 text-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <h2 className="mb-4">Testimonials</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <blockquote className="blockquote">
              <p>"This team is fantastic! They helped us grow fast."</p>
              <footer className="blockquote-footer">Catherine Win</footer>
            </blockquote>
          </div>
          <div className="col-md-6 mb-4">
            <blockquote className="blockquote">
              <p>"Highly recommend their services for any business."</p>
              <footer className="blockquote-footer">Dual Rocker</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
