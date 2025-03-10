import Header from "./ui/header";
import Hero from "./ui/home/Hero";
import Prejob from "./ui/home/Prejob";
import BestProject from "./ui/home/BestProject";
import Footer from "./ui/footer";
import Services from "./ui/home/Services";
export default function Home() {
  return (
    <div className="py-2 px-8 2xl:py-8  bg-deepblue scroll-smooth">
      <Header />
      <Hero />
      <Prejob />
      <Services />
      <BestProject />
      <Footer />
    </div>
  );
}
