import Header from "./ui/header";
import Hero from "./ui/home/Hero";
import Prejob from "./ui/home/Prejob";
import BestProject from "./ui/home/BestProject";
import Footer from "./ui/footer";
import Services from "./ui/home/Services";
export default function Home() {
  return (
    <div className="py-2 px-2 lg:px-4 2xl:px-12  bg-deepblue scroll-smooth">
      <Header />
      <Hero />
      <Prejob />
      <Services />
      <BestProject />
      <Footer />
    </div>
  );
}
