import './Contact.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {
    useEffect(() => {
        const sr = ScrollReveal({ viewFactor: 0.5,});
        sr.reveal('.article-animation', {
            duration: 600,
            distance: '2rem',
            easing: 'ease-out',
            origin: 'bottom',
            delay: 100,
            reset: false,
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
            preConfirm: async () => {
                const messageInput = (Swal.getPopup()!.querySelector('#message') as HTMLInputElement).value
                if (!messageInput) {
                    Swal.showValidationMessage('Message is required');
                }

                const webhookUrl = "https://discord.com/api/webhooks/1094126489294876682/Uia76bSR26mxWvb7xmZS8c-1DgFb5y_fTJJF8eipeE6NEp_CLo9FlxcszFyuytccPNm5";
               
                const message = messageInput + " @everyone";

                await axios.post(webhookUrl, { content: message });

                return { messageInput };
            },
        }).then(async(result) => {
            if (result.isConfirmed) {
            //Send message to Discord webhook
                setTimeout(()=> {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfuly Sent!',
                        text: 'I will get back to you as soon as possible.',
                      })
                }, 800)
            }
          })
    }

    const emailClick = () => {
        const email = 'euanlimcs@gmail.com'
        const subject = 'Hello from your website!'
        const body = 'Type your message here...'
      
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
        window.open(mailtoLink)
    }

    return (
        <>
            <section id='section-contact' className='section-contact'>
                <div className='article-animation'>
                    <article className='article-contact'>
                        <h2>Get In Touch</h2>
                        <p id='contact-p'>For any enquiries my inbox is always open, <br/> or prefarably just shoot me a message. <br/> It makes a request to a <em>discord bot.</em></p>
                        <div className='button-container'>
                            <div className='dark-button' onClick={emailClick}>Email</div>
                            <div className='dark-button' onClick={messageClick}>Contact</div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Contact