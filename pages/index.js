import Head from "next/head";
import Navbar from "../components/Navbar";
import Homepage from "./homepage";
import Projects from "./projects";
import About from "./about";
import Resume from "./resume";
import Fun from "./threecs";
import Footer from "../components/Footer";
import ThreeCs from "./threecs";

export default function Home() {
  return (
    <>
      <Head>
        <title>shelleymcq</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <section id="homepage">
          <Homepage />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="threecs">
          <ThreeCs />
        </section>
        <Footer />
      </main>
    </>
  );
}
