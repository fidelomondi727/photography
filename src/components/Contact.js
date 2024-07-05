import {useRef} from "react";
import "./Contact.css";
const Contact = () => {
    return (
    <section className="contact">
        <div className="container">
            <h1>Contact me</h1>
            <div className="contact-wrapper">
                <div className="contact-form">
                    <h3>You can send message to me</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" name="Full-Name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="Email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="subject" name="subject" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Contact;