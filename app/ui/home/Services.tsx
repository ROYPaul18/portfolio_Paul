"use client";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define interface for service item props
interface ServiceItemProps {
  index: number;
  type: string;
  number: string;
  subtitle: string;
  imageSrc: string;
  link: string;
  hoveredService: number | null;
  setHoveredService: (index: number | null) => void;
}

// Service Item Component
const ServiceItem: React.FC<ServiceItemProps> = ({
  index,
  type,
  number,
  subtitle,
  imageSrc,
  link,
  hoveredService,
  setHoveredService,
}) => {
  const { t, ready } = useTranslation("common");
  if (!ready) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative py-8 md:py-20 2xl:py-40 border-b border-gris/60 transition-opacity duration-300${
        hoveredService && hoveredService !== index
          ? "opacity-30"
          : "opacity-100"
      }`}
      onMouseEnter={() => setHoveredService(index)}
      onMouseLeave={() => setHoveredService(null)}
    >
      <div className="">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm 2xl:text-xl text-gris/60 mr-8"
        >
          [{t(number)}]
        </motion.span>
      </div>

      <div className="pl-8 md:pl-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          <div className="hidden md:block md:col-span-1" />
          <div className="col-span-1 md:col-span-5 flex flex-col justify-between px-4 h-full">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl 2xl:text-7xl font-medium text-white leading-tight"
            >
              {t(type)}
            </motion.h2>

            <div className="flex flex-col gap-10 md:gap-20">
              <p className="text-xs md:text-sm 2xl:text-2xl text-gris/60 leading-relaxed ">
                {t(subtitle)}
              </p>
              <motion.div>
                <Link
                  href={link}
                  className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-lg md:text-base 2xl:text-2xl transition-colors text-blanc"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 mr-2 transition-colors group-hover:text-deepblue relative z-10"
                    viewBox="0 0 13 12"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M9.95614 9.02338H8.33283C8.08933 9.02338 7.927 9.18571 7.927 9.42921V10.6467C7.927 10.8902 7.76467 11.0525 7.52117 11.0525H5.89785C5.65435 11.0525 5.49202 10.8902 5.49202 10.6467V9.42921C5.49202 9.18571 5.65435 9.02338 5.89785 9.02338H6.99359C7.50088 9.02338 7.927 8.63784 7.927 8.11027V7.40007C7.927 7.15657 8.08933 6.99424 8.33283 6.99424H9.95614C10.4431 6.99424 10.5649 6.38549 10.5649 5.99996C10.5649 5.61442 10.4431 5.00568 9.95614 5.00568H8.33283C8.08933 5.00568 7.927 4.84334 7.927 4.59985V3.88965C7.927 3.36207 7.50088 2.97653 6.99359 2.97653H5.89785C5.65435 2.97653 5.49202 2.8142 5.49202 2.5707V1.35322C5.49202 1.10972 5.65435 0.947388 5.89785 0.947388H7.52117C7.76467 0.947388 7.927 1.10972 7.927 1.35322V2.5707C7.927 2.8142 8.08933 2.97653 8.33283 2.97653H9.95614C10.1996 2.97653 10.362 3.13886 10.362 3.38236V4.07227C10.362 4.57956 10.7881 4.98538 11.2954 4.98538H12.594C12.8375 4.98538 12.9999 5.14772 12.9999 5.39121V6.6087C12.9999 6.8522 12.8375 7.01453 12.594 7.01453H11.2954C10.7881 7.01453 10.362 7.42036 10.362 7.92764V8.61755C10.362 8.86105 10.1996 9.02338 9.95614 9.02338Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.5 5.2563H8.04289C8.2871 5.2563 8.4499 5.37938 8.4499 5.564V6.4717C8.4499 6.65632 8.2871 6.7794 8.04289 6.7794H0.5C0.255789 6.7794 0.0929826 6.65632 0.0929826 6.4717V5.564C0.0929826 5.37938 0.255789 5.2563 0.5 5.2563Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="relative z-10 group-hover:text-black">
                    {t(type)}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div className="col-span-1 md:col-span-6 md:col-start-7 mt-8 md:mt-0">
            <div className="aspect-[4/3] w-full md:w-3/4 mx-auto md:ml-auto">
              <Image
                src={imageSrc}
                alt={t(type)}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Define interface for service data
interface ServiceData {
  index: number;
  type: string;
  number: string;
  subtitle: string;
  imageSrc: string;
  link: string;
}

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Service data
  const services: ServiceData[] = [
    {
      index: 1,
      type: "site_vitrine.type",
      number: "site_vitrine.number",
      subtitle: "site_vitrine.subtitle",
      imageSrc: "/img/vitrine.png",
      link: "/services/site-vitrine",
    },
    {
      index: 2,
      type: "application_web.type",
      number: "application_web.number",
      subtitle: "application_web.subtitle",
      imageSrc: "/img/app.png",
      link: "/services/application-web",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-24">
      {services.map((service) => (
        <ServiceItem
          key={service.index}
          {...service}
          hoveredService={hoveredService}
          setHoveredService={setHoveredService}
        />
      ))}
    </section>
  );
};

export default Services;
