import { useState } from "react";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { formRequest } from "../requests/contactRequest";

const ContactForm = () => {
  const [nameInput, setNameInput] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState<string | null>(null);

  const emailVerification = (email: string | null) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === null) {
      return false;
    }
    return regex.test(email);
  };

  const isNameVerified = nameInput?.trim() !== null;
  const isMessageVerified = messageInput?.trim() !== null;
  const isEmailVerified = emailVerification(emailInput);

  const isFormValid = isEmailVerified && isMessageVerified && isNameVerified;

  const formReset = () => {
    setNameInput(null);
    setEmailInput(null);
    setMessageInput(null);
  };

  return (
    <div id="emailForm" className="py-10 sm:py-12 px-4 sm:px-6 bg-bg-med">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-primary text-center">
          Contact Us
        </h2>
        <form
          className="bg-primary max-w-4xl mx-auto py-4  rounded-xl text-lg"
          onSubmit={(e) => {
            e.preventDefault();
            if (!isFormValid) {
              toast.error("All Fields Must Be Valid!");
              setEmailInput(null);
            } else {
              formRequest
                .contactRequest({
                  name: nameInput as string,
                  email: emailInput as string,
                  message: messageInput as string,
                })
                .then(() => formReset())
                .then(() => toast.success("We'll Reach Out To You Soon!"));
            }
          }}
        >
          <div className="flex flex-col my-4 text-center">
            <label htmlFor="name" className="text-base-300 text-xl mb-2">
              Name
            </label>
            <input
              type="text"
              name="Name"
              id="name"
              value={nameInput === null ? "" : nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs md:max-w-2xl mx-auto"
            />
          </div>
          <div className="flex flex-col my-4 text-center">
            <label htmlFor="email" className="text-base-300 text-xl mb-2">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id="email"
              value={emailInput === null ? "" : emailInput}
              onChange={(e) => setEmailInput(e.target.value.trim())}
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs md:max-w-2xl mx-auto"
            />
          </div>
          <div className="flex flex-col my-4 text-center">
            <label htmlFor="message" className="text-base-300 text-xl mb-2">
              Message
            </label>
            <textarea
              name="Message"
              id="message"
              value={messageInput === null ? "" : messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Any Questions or Concerns?"
              className="textarea textarea-bordered h-36 w-full max-w-xs md:max-w-2xl mx-auto"
            />
            <button type="submit" className="btn mx-auto mt-10 text-primary">
              <Mail />
              <span>Email Us</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
