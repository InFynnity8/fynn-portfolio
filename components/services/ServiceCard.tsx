"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";

const iconMap: Record<string, JSX.Element> = {
  web: <RxDesktop />,
  mobile: <RxCrop />,
  desktop: <RxPencil2 />,
  backend: <RxRocket />,
  api: <RxArrowTopRight />,
  seo: <RxReader />,
};

interface IService {
  num: string;
  icon?: string;
  title: string;
  description: string;
  href: string;
}

interface IServiceCardProps {
  service: IService;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ service }) => {
  return (
    <div className="min-h-fit flex flex-1 flex-col justify-center gap-4 group bg-secondary p-6 rounded-lg border border-white/10">
      <div className="w-full flex justify-between items-center">
        <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
          {service.num}
        </div>
        <Link
          href={service.href}
          className="w-[50px] h-[50px] flex justify-center rounded-full items-center hover:-rotate-45 bg-white group-hover:bg-accent transition-all duration-500"
        >
          <BsArrowDownRight className="text-primary text-[18px]" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-4xl text-accent">{iconMap[service.icon!]}</div>
        <h2 className="text-3xl group-hover:text-accent font-bold text-white leading-none transition-all duration-500">
          {service.title}
        </h2>
      </div>
      <p className="text-white/60">{service.description}</p>
      <div className="border-b border-white/20 w-full"></div>
    </div>
  );
};

export default ServiceCard;
