interface ServiceData {
  number: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  slug: string;
}

const servicesData: Record<string, ServiceData> = {
  'site-vitrine': {
    number: "01",
    title: "Site vitrine",
    description: "Un site vitrine pour vous permet de renforcer votre présence en ligne, d'attirer de nouveaux clients ...",
    fullDescription: "Un site vitrine est la première impression que les visiteurs auront de votre entreprise sur internet. Il doit être élégant, professionnel et refléter parfaitement votre identité de marque. Je crée des sites vitrines sur mesure, optimisés pour le référencement et parfaitement adaptés à vos besoins.",
    features: [
      "Design personnalisé et responsive",
      "Optimisation SEO",
      "Intégration de contenu dynamique",
      "Interface d'administration simple",
      "Performances optimisées",
      "Sécurité renforcée"
    ],
    image: "/img/paul.png",
    slug: "site-vitrine"
  },
  'application-web': {
    number: "02",
    title: "Application web",
    description: "Une application web sur mesure pour digitaliser vos processus et améliorer votre productivité ...",
    fullDescription: "Je développe des applications web sur mesure qui répondent précisément à vos besoins métier. De la conception à la mise en production, chaque étape est réalisée avec soin pour garantir une application performante, sécurisée et évolutive.",
    features: [
      "Architecture moderne et évolutive",
      "Interface utilisateur intuitive",
      "API RESTful",
      "Base de données optimisée",
      "Tests automatisés",
      "Déploiement continu"
    ],
    image: "/img/paul.png",
    slug: "application-web"
  }
};

export function getServiceData(slug: string): ServiceData | undefined {
  return servicesData[slug];
} 