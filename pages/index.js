import Head from "next/head";
import Clients from "../components/Clients/Clients";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation/Navigation";
import Product from "../components/Product/Product";

function HomePage() {
  return (
    <>
      <Head>
        <title>HooBank</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="HooBank - A place where your futures is decided"
        />
      </Head>
      <Navigation />
      <Home />
      <Features />
      <Product />
      <Clients />
      <Footer />
    </>
  );
}

export default HomePage;
