/* eslint-disable react/no-unescaped-entities */
"use client";
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
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from 'axios';
import {useState} from 'react'

const info = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "(+233) 599 515 047",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sackeyemmanuelfynn@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "Adade St, Kasoa 00233",
  },
];

const Contact = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  let name = fname + ' ' + lname 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {const response = await axios.post('https://portfolio-backend-ijs9.onrender.com/contact', {name, email, phone, service, message})
    alert(response.data)  }  
    catch (error) {
        console.log(error)
    } 
}

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-3 p-8 bg-[#27272c] rounded-xl"  onSubmit={handleSubmit}>
              <h3 className="text-3xl text-accent">Let's work together</h3>
              <p className="text-white/60">
              Reach out, and let’s explore how we can create something exceptional together.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input type="firstname" placeholder="Firstname" value={fname} onChange={(e)=> setFname(e.target.value)}/>
                <Input type="lastname" placeholder="Lastname" value={lname} onChange={(e)=> setLname(e.target.value)}/>
                <Input type="email" placeholder="Email address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Input type="phone" placeholder="Phone number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
              </div>
              {/* select */}
              <Select >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup >
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Mobile App Development</SelectItem>
                    <SelectItem value="mst">Graphic Design</SelectItem>
                    <SelectItem value="nst">Employ</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                placeholder="Type your message here."
                className="h-[120px]"
                value={message} onChange={(e)=> setMessage(e.target.value)}
              />
              {/* button */}
              <Button className="max-w-40" size="md">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[22px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.label}</p>
                      <h3 className="text-[16px]">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
