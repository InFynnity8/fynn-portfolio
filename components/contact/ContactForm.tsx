"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        data
      );
      toast.success(response.data);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      className="flex flex-col gap-3 p-8 bg-secondary rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-3xl text-accent">Let's work together</h3>
      <p className="text-white/60">
        Reach out, and let’s explore how we can create something
        exceptional together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Input
            type="text"
            placeholder="Firstname"
            className="w-full"
            {...register("firstname")}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Lastname"
            className="w-full"
            {...register("lastname")}
          />
        </div>
        <div>
          <Input type="email" placeholder="Email address" {...register("email")} className="w-full" />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input type="tel" placeholder="Phone number" {...register("phone")} className="w-full"/>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <Select onValueChange={(value) => control.register("service").onChange({ target: { name: "service", value } })}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-app-development">
              Mobile App Development
            </SelectItem>
            <SelectItem value="graphic-design">Graphic Design</SelectItem>
            <SelectItem value="employ">Employ</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <Textarea
          placeholder="Type your message here."
          className="h-[120px]"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="max-w-40 bg-accent hover:bg-accent-hover text-primary font-bold"
        size="md"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-4">
            <Image
              src="/assets/loader.svg"
              alt="loader"
              width={24}
              height={24}
              className="animate-spin"
            />
            Loading...
          </div>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
