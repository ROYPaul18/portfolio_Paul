"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="text-white mt-20">
      <div className="px-4 md:px-8 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-col"
        >
          <h1 className="text-2xl md:text-4xl font-medium mb-24">
            Services - Conception de sites Web sur mesure en React/Next.js, avec
            des solutions adaptées. Je transforme vos idées en expériences
            digitales performantes et engageantes.
          </h1>{" "}
          <div className="flex mb-24">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                Je suis prêt à vous aider ! Que vous souhaitiez lancer un
                nouveau projet, améliorer votre site existant, demander un devis
                ou discuter d’une collaboration potentielle, n’hésitez pas à me
                contacter.
              </p>
              
              <div className="flex justify-start mt-10 space-x-12 text-lg">
                <Link
                  href="/work"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  Mon travail
                </Link>
                <Link
                  href="/idea"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  Une idée ?
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/2 pr-4">
              <h2 className="text-5xl font-light pl-12 mb-12">Site Vitrine</h2>
              <p className="text-gray-600 pl-12 mb-8">
                Votre site vitrine est la vitrine de votre entreprise en ligne,
                et il doit être attrayant et performant. C'est pourquoi je me
                spécialise dans la création de sites vitrines évolutifs et axés
                sur le client.
              </p>
              <Link
                href="/services/site-vitrine"
                className="inline-flex items-center gap-2 mt-6 text-white transition-opacity text-xl pl-12"
              >
                <span>→</span> Site vitrine
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video w-full md:w-1/2"
            >
              <Image
                src="/img/paul.png"
                alt="Site Vitrine"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video w-full md:w-1/2"
            >
              <Image
                src="/img/paul.png"
                alt="Application Web"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="pl-12">
              <h2 className="text-5xl font-light mb-12">Application Web</h2>
              <p className="text-gray-600 max-w-xl mb-8">
                Une application web est essentielle pour votre entreprise
                moderne. Je me spécialise dans la création d'applications web
                sur mesure, conçues pour répondre aux besoins spécifiques de
                votre activité.
              </p>
              <Link
                href="/services/application-web"
                className="inline-flex items-center gap-2 mt-6 text-xl text-white transition-opacity"
              >
                <span>→</span> Application web
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
