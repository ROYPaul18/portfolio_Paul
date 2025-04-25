"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { t } = useTranslation("common");
  
  // Refs for animation elements
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const linksRef = useRef(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Title and subtitle animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out" 
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.3, 
        ease: "power3.out" 
      }
    );

    // Links animation
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.5, 
        ease: "power3.out" 
      }
    );

    // Services sections scroll animations
    serviceRefs.current.forEach((serviceRef) => {
      if (serviceRef) {
        // Animation for service text sections
        const textElements = serviceRef.querySelectorAll('h2, p, a');
        gsap.fromTo(
          textElements,
          { 
            opacity: 0, 
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: serviceRef,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="text-white mt-8 md:mt-20">
      <div className="mt-12 md:mt-20 pb-8 md:pb-12 px-4 2xl:px-8 pt-6 md:pt-16 2xl:pt-24">
        <div>
          <h1 
            ref={titleRef} 
            className="text-2xl md:text-3xl lg:text-5xl 2xl:text-8xl font-medium mb-8 md:mb-16"
          >
            {t("service_page.title")}
          </h1>
          <div className="flex flex-col md:flex-row mb-12 md:mb-24">
            <div className="w-full md:w-1/2 mb-4 md:mb-0"></div>
            <div className="w-full md:w-1/2 my-8 md:my-24">
              <p 
                ref={subtitleRef}
                className="text-gris/60 text-sm md:text-base 2xl:text-3xl leading-relaxed"
              >
                {t("service_page.subtitle")}
              </p>

              <div 
                ref={linksRef}
                className="flex flex-col md:flex-row justify-start mt-12 md:mt-24 space-y-4 md:space-y-0 md:space-x-12 text-base 2xl:text-3xl"
              >
                <Link
                  href="/projects"
                  className="group relative text-sm md:text-base 2xl:text-2xl flex items-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 2xl:size-8 md:size-6 mr-2 group-hover:text-black relative z-10"
                    viewBox="0 0 13 12"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
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
                    {t("about.link_1")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
                <Link
                  href="/idea"
                  className="group relative text-sm md:text-base 2xl:text-2xl flex items-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 2xl:size-8 md:size-6 mr-2 group-hover:text-black relative z-10"
                    viewBox="0 0 13 12"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
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
                    {t("about.link_2")}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24 2xl:space-y-32">
          {/* Premier service - Application Web */}
          <div 
           ref={(el) => {
            if (el) serviceRefs.current[0] = el;
          }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
          >
            <div 
              className="relative w-full md:w-1/2 aspect-video 
              "
            >
              <Image
                src="/img/vitrine.png"
                alt="Application Web"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-0 md:pl-12 w-full md:w-1/2 flex flex-col justify-between mt-6 md:mt-0">
              <h2 className="text-2xl md:text-4xl 2xl:text-7xl font-light mb-4 md:mb-12">
                {t("service_page.title_1")}
              </h2>
              <p className="text-gris/60 mb-4 md:mb-8 text-sm md:text-sm 2xl:text-2xl">
                {t("service_page.subtitle_1_pt_1")}
              </p>
              <p className="text-gris/60 mb-4 md:mb-8 text-sm md:text-sm 2xl:text-2xl">
                {t("service_page.subtitle_1_pt_2")}
              </p>
              <Link
                href="/services/site-vitrine"
                className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-base md:text-base 2xl:text-2xl py-1 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 md:size-6 mr-2 group-hover:text-deepblue relative z-10"
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
                  {t("service_page.link_1_1")}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Deuxième service - App */}
          <div 
         ref={(el) => {
            if (el) serviceRefs.current[1] = el;
          }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 h-full"
          >
            <div className="w-full md:w-1/2 pr-0 md:pr-4 flex flex-col justify-between order-2 md:order-1 mt-6 md:mt-0">
              <h2 className="text-2xl md:text-4xl 2xl:text-7xl font-light mb-4 md:mb-12 ml-0 md:ml-12">
                {t("service_page.title_2")}
              </h2>
              <p className="text-gris/60 mb-4 md:mb-8 text-sm md:text-sm 2xl:text-2xl ml-0 md:ml-12 pr-0 md:pr-12">
                {t("service_page.subtitle_2_pt_1")}
              </p>
              <p className="text-gris/60 mb-4 md:mb-8 text-sm md:text-sm 2xl:text-2xl ml-0 md:ml-12 pr-0 md:pr-12">
                {t("service_page.subtitle_2_pt_2")}
              </p>
              <Link
                href="/services/application-web"
                className="group relative inline-flex items-center gap-2 mt-4 md:mt-6 text-base md:text-base 2xl:text-2xl py-1 transition-colors ml-0 md:ml-12 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 md:size-6 mr-2 group-hover:text-deepblue relative z-10"
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
                  {t("service_page.link_2_2")}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-white transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>
            <div 
              className="relative w-full md:w-1/2 aspect-video order-1 md:order-2"
            >
              <Image
                src="/img/app.png"
                alt="Application Web"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;