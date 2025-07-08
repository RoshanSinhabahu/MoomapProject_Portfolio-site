function Services() {
  return (
    <section id="services" className="py-5 bg-light" data-aos="fade-up" data-aos-delay="100">
      <div className="container text-center">
        <h2 className="mb-4">What We Do</h2>
        <div className="row">
          <div className="col-md-4">
            <i className="fas fa-chart-bar fa-3x mb-3"></i>
            <h4>Market Analysis</h4>
            <p>We provide detailed market insights to help your business grow.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-life-ring fa-3x mb-3"></i>
            <h4>Fast Support</h4>
            <p>Our team is always ready to support you 24/7.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-user-shield fa-3x mb-3"></i>
            <h4>Top Security</h4>
            <p>Your data and privacy are protected with industry standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
