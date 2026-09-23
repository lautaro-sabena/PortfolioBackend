import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Wallpaper from "@/components/Wallpaper";

export default function Home() {
  return (
    <>
      <Wallpaper />
      <Header />
      <main className="relative z-10 max-w-[760px] mx-auto px-4 pt-[104px] pb-6 flex flex-col gap-5">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
