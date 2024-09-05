function Contact() {
    return (
      <section id="contact">
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
  export default Contact;
  