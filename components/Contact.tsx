"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import SocialContact from "./SocialContact";
import { Meteors } from "./ui/Meteor";

const Contact = () => {
  const [loading, setloading] = useState(false);

  const [submitted, setsubbmitted] = useState(false);

  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const sented = () => {
    setsubbmitted(true);
    toast.success("your message has been Sent successfully 👌");
    setTimeout(() => {
      setsubbmitted(false);
    }, 10000);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinputs((s) => ({ ...s, [name]: value }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (inputs.name && inputs.email && inputs.feedback) {
      setloading(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE,
          process.env.NEXT_PUBLIC_TEMPLATE,
          {
            from_name: inputs.name,
            to_name: "younes",
            from_email: inputs.email,
            form_feedback: inputs.feedback,
            to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
          },
          process.env.NEXT_PUBLIC_KEYOFEMAIL
        )
        .then(() => {
          sented();

          setloading(false);

          setinputs({
            name: "",
            email: "",
            feedback: "",
          });
        })
        .catch((err) => {
          setloading(false);
          toast.error("something went wrong ");
          console.log(err);
        });
    }
  };

  return (
    <div id="contact" className="max-w-7xl  mt-16 relative mx-auto   ">
      <div className="flex overflow-hidden max-lg:flex-col-reverse justify-between px-3 mt-6 z-20 relative items-center   gap-2  ">
        <div className="flexcenter max-w-xl mx-auto realtive items-end max-sm:w-full max-sm:items-center max-sm:flex-col flex-1">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="h-fit bg-black max-sm:w-full  bg-dot-white/[.8] relative   overflow-hidden rounded-3xl   "
          >
            {" "}
            <Meteors className=" absolute  bg-white" number={10} />
            <div
              className="absolute pointer-events-none z-[-5] inset-0 flex items-center justify-center
              [background-image:radial-gradient(ellipse_at_center,transparent_0%,black_60%)]"
            ></div>
            <div
              className="flex flex-col p-6 flex-1 min-w-[390px] max-sm:min-w-[250px]   border border-white 
      shadow-inner shadow-white !bg-opacity-10 rounded-3xl "
            >
              <p className="text-secondary text-2xl">Get In Touch</p>
              <p className="font-bold text-4xl max-sm:text-3xl mt-6 max-md:mb-6 mb-16">
                Contact
              </p>

              <form onSubmit={handlesubmit} className=" flex flex-col">
                <motion.div
                  variants={fadeIn("right", "spring", 0.5, 0.75)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <label htmlFor="input-name" className=" font-medium text-lg">
                    your name{" "}
                  </label>
                  <input
                    id="input-name"
                    value={inputs.name}
                    name="name"
                    className="p-4 my-6 rounded-xl w-full    max-md:text-sm bg-black-100 text-xl text-secondary"
                    placeholder="your name..."
                    onChange={(e) => handlechange(e)}
                  />
                </motion.div>

                <motion.div
                  variants={fadeIn("right", "spring", 1, 1.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <label htmlFor="input-email" className=" font-medium text-lg">
                    your email{" "}
                  </label>
                  <input
                    value={inputs.email}
                    onChange={(e) => handlechange(e)}
                    type="email"
                    name="email"
                    id="input-email"
                    className="px-3 my-2 py-4 text-xl placeholder-slate-400
                            valid:text-green-700 bg-black-100
                            max-md:text-sm 
                            focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl overflow-hidden sm:text-sm focus:ring-1 invalid:border-pink-500
                            invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
                    placeholder="you@example.com"
                  />
                </motion.div>

                <motion.div
                  variants={fadeIn("right", "spring", 1.5, 1.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  className=" flex flex-col mt-4 "
                >
                  <label
                    htmlFor="input-feedback"
                    className=" font-medium text-lg"
                  >
                    A message{" "}
                  </label>

                  <textarea
                    onChange={(e) => handlechange(e)}
                    value={inputs.feedback}
                    id="input-feedback"
                    name="feedback"
                    className="p-4 w-full  min-h-[200px] my-6 rounded-xl
                             bg-black-100 text-xl    max-md:text-sm text-secondary"
                    placeholder="submit a feedback if you want... "
                  />
                  {inputs.name && inputs.email && inputs.feedback && (
                    <button
                      disabled={loading || submitted}
                      className={` ${
                        !loading && submitted
                          ? "bg-green-600 animate-pulse"
                          : ""
                      } 
                              my-6 rounded-xl p-3 hover:text-white 
                               hover:bg-black-200 transition duration-300 border-2 
                               bg-secondary text-black w-fit mx-auto `}
                      type="submit"
                    >
                      {loading && !submitted ? (
                        <Loader2 className="animate-spin" />
                      ) : submitted ? (
                        ""
                      ) : (
                        "send"
                      )}
                      {!loading && submitted && "submitted succefully"}{" "}
                    </button>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
          <div className="md:hidden max-sm:mt-6 max-sm:w-full">
            <SocialContact />
          </div>
        </div>

        {/* <Spline

          suppressHydrationWarning
          className=" !h-[60dvh] max-md:!h-[45dvh] max-sm:hidden lg:flex-1"
          scene="https://prod.spline.design/oRumc86rPXJpyXvl/scene.splinecode"
        /> */}
      </div>
    </div>
  );
};

export default Contact;
