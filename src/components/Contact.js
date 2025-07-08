function Contact() {
  return (
    <section id="contact" className="py-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="col-md-6 offset-md-3">
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="form-group mb-3">
            <textarea className="form-control" placeholder="Your Message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
