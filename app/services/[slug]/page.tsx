'use client'
import { useParams } from "next/navigation";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import BestProject from "@/app/ui/home/BestProject";
import Link from "next/link";
import ServicesProduct from "@/app/ui/services/ServicesProduct";


// Define the correct type for the props

const ServicePage = () => {
  const { t } = useTranslation("common");

  const params = useParams();
  const serviceType = typeof params.slug === "string" ? params.slug : "site-vitrine";


  const approachSteps = [
    { title: t("approach.apprendre"), description: t("approach.echange") },
    { title: t("approach.analyse"), description: t("approach.benchmark") },
    { title: t("approach.conception"), description: t("approach.design") },
    { title: t("approach.developpement"), description: t("approach.integration") },
    { title: t("approach.mise_en_ligne"), description: t("approach.validation") },
    { title: t("approach.maintenance"), description: t("approach.evolutions") },
  ];

  const isValidServiceType = (type: string): type is "site-vitrine" | "application-web" => {
    return type === "site-vitrine" || type === "application-web";
  };

  const validServiceType = isValidServiceType(serviceType) ? serviceType : "site-vitrine";

  return (
    <div className="min-h-screen bg-deepblue text-white">
      {/* Hero Section */}
      <Header />
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 flex flex-col justify-between bg-white">
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-12 w-full">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-deepblue"
            >
              {validServiceType === "site-vitrine"
                ? t("service.site_vitrine")
                : t("service.application_web")}
            </motion.h1>
          </div>
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gris/60 text-base md:text-lg max-w-2xl leading-tight"
            >
              {validServiceType === "site-vitrine"
                ? t("service.ready_to_help_site")
                : t("service.ready_to_help_app")}
            </motion.p>

            <div className="mt-6 md:mt-8">
              <Link
                href="/idea"
                className="group relative inline-flex items-center gap-2 text-base md:text-lg py-1 transition-colors text-deepblue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 md:size-6 mr-2 group-hover:text-blanc relative z-10"
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
                <span className="relative z-10 group-hover:text-blanc">
                  Une idée ?
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-full bg-deepblue transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesProduct />

      <section className="py-8 md:py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-8"
            >
              {t("approach.title")}
            </motion.h2>
          </div>
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-gris/60 font-medium my-6 md:my-24"
            >
              {t("approach.description")}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-0">
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1a1a] p-4"
            >
              <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">{step.title}</h3>
              <p className="text-gris/60 text-xs md:text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-16"
        >
          {t(`project.title.${validServiceType}`)}
        </motion.h2>

        <BestProject />
      </section>
      <Footer />
    </div>
  );
};

export default ServicePage;
