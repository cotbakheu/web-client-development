import classNames from "classnames";

// Icon Imports
import { IoMailOutline, IoPaperPlaneOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

// Component Imports
import { InputText } from "../../components/Input";
import React from "react";
import Swal from "sweetalert2";

function Form() {
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const validateForm = () => {
    let isValid = true;
    const newError = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formValue.name) {
      newError.name = "Name is required";
      isValid = false;
    }
    if (!formValue.email) {
      newError.email = "Email is required";
      isValid = false;
    }
    if (!formValue.message) {
      newError.message = "Message is required";
      isValid = false;
    }
    if (formValue.email && !/\S+@\S+\.\S+/.test(formValue.email)) {
      newError.email = "Email is invalid";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    setError({
      ...error,
      [event.target.name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "", // Email service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "", // Email template ID
        {
          name: formValue.name,
          fromEmail: formValue.email,
          message: formValue.message,
        }
      );

      console.log("Email sent successfully:", result);

      setFormValue({
        name: "",
        email: "",
        message: "",
      });
      setError({
        name: "",
        email: "",
        message: "",
      });

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#12F7D6",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e74c3c",
      });
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-16 flex flex-col items-center">
      <div className="border-brand-primary w-fit bg-background-secondary border-2 rounded-br-3xl rounded-tl-3xl p-4">
        <p className="text-lg md:text-2xl">Send Me A Message</p>
      </div>
      <div className="w-full lg:w-3/5 mt-20">
        <div className="flex flex-col md:flex-row gap-16">
          <InputText
            value={formValue.name}
            label="Name *"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required={false}
            error={error.name}
          />
          <InputText
            value={formValue.email}
            label="Email *"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required={false}
            error={error.email}
          />
        </div>
        <div className="w-full mt-20">
          <InputText
            value={formValue.message}
            label="Your Message *"
            id="message"
            placeholder="Enter your needs"
            onChange={handleChange}
            required={false}
            error={error.message}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button
            disabled={isLoading}
            type="submit"
            className="rounded-full cursor-pointer text-background-primary bg-brand-primary px-4 py-3 flex gap-4"
          >
            {isLoading && (
              <>
                <p className="text-sm">Sending...</p>
                <svg
                  className="mr-3 -ml-1 size-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </>
            )}
            {!isLoading && (
              <>
                <p className="text-sm">Send Message</p>
                <IoPaperPlaneOutline className="text-xl" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <div id="contact" className={classNames("h-full lg:h-[90vh] p-8 xl:px-24")}>
      <div className="flex flex-col items-center justify-center">
        <span className="text-brand-primary text-2xl md:text-4xl font-semibold flex items-center gap-4">
          <span className="text-3xl md:text-5xl">
            <IoMailOutline />
          </span>{" "}
          Contact
        </span>
        <div className="flex items-center mt-4">
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
          <hr className="w-48 md:w-58 border border-brand-primary" />
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
        </div>
        <p className="text-gray-200 text-xs mt-8">
          Let’s team up and create something your ex will regret missing.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
