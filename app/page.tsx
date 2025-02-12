import Header from "./ui/header";
import Hero from "./ui/home/Hero";
import Prejob from "./ui/home/Prejob";
import BestProject from "./ui/home/BestProject";
import PreService from "./ui/home/PreService";
import Footer from "./ui/footer";
import Services from "./ui/home/Services";
export default function Home() {
  return (
    <div className="px-4 bg-deepblue">
      <Header />
      <Hero />
      <Prejob />
      <Services />
      <BestProject />
      <Footer />
    </div>
  );
}
