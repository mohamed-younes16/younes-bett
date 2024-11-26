"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import SocialContact from "./SocialContact";
import { Button } from "@/components/ui/button"; // Assuming Button component from ShadCN
import { Input } from "@/components/ui/input"; // Assuming Input component from ShadCN
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";

// Zod Schema for validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  feedback: z.string().min(1, { message: "Feedback is required" }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [loading, setloading] = useState(false);
  const [submitted, setsubbmitted] = useState(false);

  // Initialize react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const sented = () => {
    setsubbmitted(true);
    toast.success("Your message has been sent successfully 👌");
    setTimeout(() => {
      setsubbmitted(false);
    }, 10000);
  };

  const onSubmit = (data: FormData) => {
    setloading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE!,
        process.env.NEXT_PUBLIC_TEMPLATE!,
        {
          from_name: data.name,
          to_name: "younes",
          from_email: data.email,
          form_feedback: data.feedback,
          to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
        },
        process.env.NEXT_PUBLIC_KEYOFEMAIL
      )
      .then(() => {
        sented();
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        toast.error("Something went wrong");
        console.log(err);
      });
  };

  return (
    <div id="contact" className="max-w-7xl mt-16 relative mx-auto">
      <div className="flex overflow-hidden max-lg:flex-col-reverse justify-between px-3 mt-6 z-20 relative items-center gap-2">
        <div className="flexcenter max-w-xl mx-auto realtive items-end max-sm:w-full max-sm:items-center max-sm:flex-col flex-1">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="h-fit bg-background max-sm:w-full bg-dot-white/[.6] relative overflow-hidden rounded-3xl"
          >
            <div className="absolute pointer-events-none z-[0] inset-0 flex items-center justify-center [background-image:radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--border))_70%)] dark:[background-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]"></div>
            <div className="flex flex-col  p-6 flex-1 min-w-[390px] relative z-10 max-sm:min-w-[250px] border border-white shadow-inner shadow-white !bg-opacity-10 rounded-3xl">
              <p className="dark:text-vio-dark text-vio text-2xl">
                Get In Touch
              </p>
              <p className="font-bold text-4xl max-sm:text-3xl mt-6 max-md:mb-6 mb-16">
                Contact
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex  space-y-6 flex-col"
              >
                <motion.div
                  className="space-y-3"
                  variants={fadeIn("right", "spring", 0.5, 0.75)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <label htmlFor="input-name" className="font-medium text-lg">
                    Your Name
                  </label>
                  <Input
                    className="bg-background/50"
                    id="input-name"
                    placeholder="Your name..."
                    {...form.register("name")}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("right", "spring", 1, 1.5)}
                  initial="hidden"
                  whileInView={"show"}
                  className="space-y-3"
                  viewport={{ once: true }}
                >
                  <label htmlFor="input-email" className="font-medium text-lg">
                    Your Email
                  </label>
                  <Input
                    id="input-email"
                    type="email"
                    className="bg-background/50"
                    placeholder="you@example.com"
                    {...form.register("email")}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("right", "spring", 1.5, 1.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                  className="flex space-y-3 flex-col mt-4"
                >
                  <label
                    htmlFor="input-feedback"
                    className="font-medium text-lg"
                  >
                    A Message
                  </label>
                  <Textarea
                    id="input-feedback"
                    placeholder="Submit a feedback if you want..."
                    {...form.register("feedback")}
                    className="p-4 w-full bg-background/50 min-h-[200px]  rounded-xl
                     text-xl max-md:text-sm "
                  />
                </motion.div>{" "}
                <Button
                  variant={"default"}
                  disabled={
                    loading ||
                    form.formState.isSubmitting ||
                    !form.formState.isValid
                  }
                  className={`${
                    !loading && submitted ? "bg-green-600 animate-pulse" : ""
                  }`}
                  type="submit"
                >
                  {loading && !submitted ? (
                    <Loader2 className="animate-spin" />
                  ) : submitted ? (
                    ""
                  ) : (
                    "Send"
                  )}
                  {!loading && submitted && "Submitted Successfully"}
                </Button>
              </form>
            </div>
          </motion.div>

          <div className="md:hidden max-sm:mt-6 max-sm:w-full">
            <SocialContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
