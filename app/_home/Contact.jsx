"use client";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mt1bki5",
        "template_1xpj2in",
        form.current,
        "Fm6ejAaqkIgS0T_It"
      )
      .then(
        (result) => {
          console.log(result.text);

          setStatusMessage("Email sent success");
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="text-white bg-gradient-to-r from-[#0d0a0d] to-[#1f0833ff]"
      id="contact"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10">
          <div className="font-bold text-xl p-4">Connect Me</div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col p-4">
            <div className="flex flex-col gap-2 ">
              <label className="font-semibold text-lg">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="p-4 rounded-md text-black"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3 ">
              <label className="font-semibold text-lg">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="p-4 rounded-md text-black"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3 ">
              <label className="font-semibold text-lg">Comment</label>
              <textarea
                name="message"
                placeholder="Comment"
                className="p-4 rounded-md text-black"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="rounded-md p-2 bg-blue-500 mt-8"
            >
              Submit
            </button>
            {statusMessage}
          </form>
        </div>
        <div className="pt-10 lg:pt-16 p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78219958892!2d76.30829335!3d9.970874599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sjp!4v1707711527659!5m2!1sen!2sjp"
            width=""
            height=""
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            className="rounded-md h-48 w-full lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
