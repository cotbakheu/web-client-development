"use client";
import React from "react";
import { InputText, InputTextArea } from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { AlertModal } from "@/components/Modal";
import Swal from "sweetalert2";

function Contact() {
  const [isLoadingSubmit, setIsLoadingSubmit] = React.useState(false);
  const [error, setError] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newError = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formValue.name) {
      newError.name = "Nama harus diisi";
      isValid = false;
    }
    if (!formValue.email) {
      newError.email = "Email harus diisi";
      isValid = false;
    }
    if (!formValue.subject) {
      newError.subject = "Subjek harus diisi";
      isValid = false;
    }
    if (!formValue.message) {
      newError.message = "Pesan harus diisi";
      isValid = false;
    }
    if (formValue.email && !/\S+@\S+\.\S+/.test(formValue.email)) {
      newError.email = "Email tidak valid";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoadingSubmit(true);
      try {
        await simulateSubmit();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      }
      setIsLoadingSubmit(false);
    }
  };

  const simulateSubmit = () => {
    return new Promise((resolve) => {
      // Simulate a successful form submission
      setTimeout(() => {
        Swal.fire({
          title: "Berhasil!",
          text: "Pesan Anda telah dikirim.",
          icon: "success",
          confirmButtonText: "OKE",
          confirmButtonColor: "#188753",
        });
        setFormValue({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setError({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="px-20 py-10 flex flex-col items-center gap-10" id="contact">
      <h2 className="text-center text-2xl font-semibold uppercase">Kontak</h2>
      <form className="w-1/2 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-2 w-full">
          <div className="flex-1">
            <InputText
              placeholder="NAMA (WAJIB DIISI)"
              value={formValue.name}
              error={error.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <InputText
              placeholder="EMAIL (WAJIB DIISI)"
              value={formValue.email}
              error={error.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <InputText
          placeholder="SUBJEK (WAJIB DIISI)"
          value={formValue.subject}
          error={error.subject}
          name="subject"
          onChange={handleChange}
        />
        <br />
        <InputTextArea
          placeholder="PESAN (WAJIB DIISI)"
          value={formValue.message}
          error={error.message}
          name="message"
          onChange={handleChange}
          rows={4}
        />
        <br />
        <Button
          isLoading={isLoadingSubmit}
          color="primary"
          type="submit"
          className="!rounded-full"
          loadingText="Mengirim..."
        >
          Kirim
        </Button>
      </form>
      <div className="text-left w-full mt-20">
        <p className="font-bold text-xl">Head Office</p>
        Gedung Agro Plaza Lt. 14, Jl. H. R. Rasuna Said Kav. X2 No.1, Setia
        Budi, Jakarta Selatan 12950
        <p>
          Telepon: <Link href="tel:+6281133333214">(+62) 8113-3333-214</Link>
        </p>
        <p>
          Email:{" "}
          <Link href="mailto:corcom@ptpn1.co.id">corcom@ptpn1.co.id</Link>
        </p>
      </div>
      <iframe
        width={"100%"}
        height={"400px"}
        className="rounded-lg"
        title="Google Maps"
        allowFullScreen
        loading="lazy"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.262797830583!2d106.8316182147691!3d-6.229043195490949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ee433e98a3%3A0x1ef5b1d10eb3111!2sHolding%20Perkebunan%20Nusantara%20(PTPN%20III)!5e0!3m2!1sen!2sid!4v1685084959967!5m2!1sen!2sid"
        frameBorder="0"
      ></iframe>

      <AlertModal
        isOpen={true}
        onClose={() => setIsLoadingSubmit(false)}
        message="Pesan Anda sedang dikirim. Mohon tunggu beberapa saat."
      />
    </div>
  );
}

export default Contact;
