import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from "react-icons/fa";

const MyForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setIsSubmitted(false); 

    emailjs
      .send(
        'service_xs4nptt', // Replace with your EmailJS service ID
        'template_eyy2u7e', // Replace with your EmailJS template ID
        data,
        'HEH_5GqifCb6Bv51U' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true)
          reset(); // Clear the form after submission
          setLoading(false);
        },
        (error) => {
          alert('Échec de l\'envoi du message, veuillez réessayer.');
          console.error('EmailJS Error:', error);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 items-stretch">
        <div>
          <label htmlFor="firstName" className="text-sm">Nom Complet</label>
          <input
            id="firstName"
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('firstName', { required: 'Champs Requis' })}
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('email', {
              required: 'Champs Requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Adresse email invalide'
              }
            })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Message..."
            className="text-black mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            {...register('message', { required: 'Champs Requis' })}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFC727] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#FFC727]/90 transition-colors duration-200 flex items-center justify-center gap-2"
          disabled={loading}
        >
          <FaPaperPlane className="text-black" />
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          Votre message a été envoyé avec succès !
        </div>
      )}
    </div>
  );
};

export default MyForm;
