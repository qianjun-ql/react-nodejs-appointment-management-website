import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs
          .sendForm(
              "service_olugct5",
              "template_9cgqzxg",
              formRef.current,
              "X25sViL2NOqyXJhBe"
          )
          .then(
              (result) => {
                  setSuccess(true);
              },
              (error) => {
                  setError(true);
              }
          );
  };

  return (
      <section>
          <div className='px-4 mx-auto max-w-screen-md'>
              <h2 className='heading text-center '>Contact Us</h2>
              <p className='mb-8 lg:mb-16 font-light text-center text__para '>Got a technical issue? Want to send feedback about a beta feature? Let us know.
              </p>
              <form ref={formRef} className='space-y-8'>
                  <div>
                      <label htmlFor="email" className='form__label'>Your Email</label>
                      <input
                          type="email"
                          name="email"
                          placeholder='example@gmail.com'
                          className='form__input mt-1'
                      />
                  </div>
                  <div>
                      <label htmlFor="subject" className='form__label'>Subject</label>
                      <input
                          type="text"
                          name="subject"
                          placeholder='Let us know how we can help you'
                          className='form__input mt-1'
                      />
                  </div>
                  <div className="sm:col-span-2">
                      <label htmlFor="message" className='form__label'>
                          Your Message
                      </label>
                      <textarea
                          rows='6'
                          name="message"
                          placeholder='Leave a comment'
                          className='form__input mt-1'
                      />
                  </div>
                  <button
                      onClick={sendEmail}
                      type='submit'
                      className="btn rounded sm:w-fit"
                  >
                      Submit
                  </button>
                  {error && <p className="text-red-500">Error sending message. Please try again.</p>}
                  {success && <p className="text-green-500">Message sent successfully!</p>}
              </form>
          </div>
      </section>
  );
};

export default Contact;