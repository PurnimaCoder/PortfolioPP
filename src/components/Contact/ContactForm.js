import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    const form = useRef();
    const Navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
   
  // Function that displays a success toast on bottom right of the page when form submission is successful
//   const toastifySuccess = () => {
//     toast('Form sent!', {
//       position: 'bottom-right',
//       autoClose: 5000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: false,
//       className: 'submit-feedback success',
//       toastId: 'notifyToast'
//     });
//   };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_baej1gl', 'template_bs6awyk', form.current, 'WDSgOJLaz3-jav6aI')
      .then((result) => {
          console.log(result.text);
          Navigate("/");
          alert("Your Message has sucessfully sent.Thank you !!")
          setDisabled(false);
      }, (error) => {
          console.log(error.text);
      });
  };

//   // Function called on submit that uses emailjs to send email of valid contact form
//   const onSubmit = async (data) => {
//     // Destrcture data object
//     const { name, email,subject, message } = data;
//     try {
//       // Disable form while processing submission
//       setDisabled(true);

//       // Define template params
//       const templateParams = {
//         name,
//         email,
//         subject,
//         message,
//       };

//       // Use emailjs to email contact form data
//       await emailjs.send(
//         process.env.service_baej1gl,
//         process.env.template_bs6awyk,
//         templateParams,
//         process.env.eUg7blTy1xLqH6FSr
//       );

//       // Reset contact form fields after submission
//       reset();
//       // Display success toast
//       toastifySuccess();
//       // Re-enable form submission
//       setDisabled(false);
//     } catch (e) {
//       console.log(e);
//     }
//   };

  return (
    <div className='ContactForm' style={{position:"relative",zIndex:"200 !important"}}>
      <div className='container'>
      <h1 style={{color:"white"}}>CONTACT ME</h1>
            <p style={{color:"white"}}>
              Feel free to send a <span className="purple">Message </span>to me
            </p>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' ref={form} onSubmit={sendEmail} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow ' id='cont-form'>
                  <div className='col-12 mb-4' >
                    <input
                      type='text'
                      name='from_name'
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-12 mb-4'>
                    <input
                      type='email'
                      name='user_email'
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form 
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('Wallet address', {
                        required: {
                          value: true,
                          message: 'Please enter Wallet address'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Wallet address'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div> */}
                {/* Row 3 of form */}
                <div className='row formRow' id='cont-form'>
                  <div className='col'>
                    <textarea
                      rows={5}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter delivery information</span>}
                  </div>
                </div>

                <button className='fork-btn-inner' disabled={disabled} type='submit' style={{marginTop:"2rem",color:"white",borderRadius:"5px",border:"none", fontSize:"20px"}}>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
