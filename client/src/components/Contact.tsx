import './Contact.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.5,});
        sr.reveal('.article-animation', {
            duration: 400,
            distance: '2rem',
            easing: 'ease-out',
            origin: 'bottom',
            delay: 100,
            reset: true,
        });
    }, []);

    const messageClick = () => {
        Swal.fire({
          title: 'Send Message',
          html: `
            <label for="message"></label>
            <textarea id="message" name="message" rows="7" required style="min-width: 15rem; margin:0;"></textarea>
          `,
          confirmButtonText: 'Send',
          focusConfirm: false,
          preConfirm: () => {
            const message = Swal.getPopup().querySelector('#message').value;
            if (!message) {
              Swal.showValidationMessage('Message is required');
            }
            return { message };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const { message } = result.value;
            // send email with message
            emailjs.send(
              'YOUR_SERVICE_ID',
              'YOUR_TEMPLATE_ID',
              {
                message,
              },
              'YOUR_USER_ID'
            ).then(() => {
              Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent.',
                icon: 'success',
              });
            }).catch((error) => {
              Swal.fire({
                title: 'Error',
                text: `There was an error sending your message: ${error.message}`,
                icon: 'error',
              });
            });
          }
        });
      };

    return (
        <>
            <section id='section-contact' className='section-contact'>
                <div className='article-animation'>
                    <article className='article-contact'>
                        <h2>Get In Touch</h2>
                        <p>For any enquiries my inbox is always open, <br/> or prefarably just shoot me a message. <br/> Dont worry, I setup a <em>discord bot.</em></p>
                        <div className='button-container'>
                            <div className='dark-button' onClick={messageClick}>Email</div>
                            <div className='dark-button' onClick={messageClick}>Contact</div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Contact