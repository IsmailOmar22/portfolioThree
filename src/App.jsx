import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Reviews from "./sections/Reviews.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import { Experience } from "./sections/Experience.jsx";
import Head from "next/head"; // If this is a Next.js project

const App = () => {
    return (
        <>
            <Head>
                <title>Ismail's Portfolio</title>
                <meta name="description" content="Welcome to Ismail's portfolio website. Explore my projects, experience, and more." />
                <meta name="keywords" content="Ismail, Portfolio, Web Developer, Projects, Experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-7xl mx-auto">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Reviews />
                <Experience />
                <Contact />
                <Footer />
            </main>
        </>
    );
};

export default App;
