import Header from "./ui/header";
import Hero from "./ui/home/Hero";
import Prejob from "./ui/home/Prejob"
export default function Home() {
  return (
    <div className="px-4 md:px-12 lg:px-16">
      <Header />
      <Hero />
      <Prejob />
      <section>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl my-8">
          BEST PROJECT
        </h1>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl my-8">
          SERVICES
        </h1>
      </section>
    </div>
  );
}
