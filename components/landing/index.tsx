import Head from "next/head";
import ContactUs from "./ContactUs/ContactUs";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import LogoSection from "./LogoSection/LogoSection";
import Pricing from "./Pricing/Pricing";

export default function LandingPage({ data }: { data: any }) {
  console.log(data);
  return (
    <main id="landing">
      <Head>
        <title>{data.brand.name}</title>
      </Head>
      <Header data={data.brand} />
      <HeroSection data={data.hero} />
      <Feature data={data.features} />
      <Pricing data={data.pricing} />
      <ContactUs data={data.email_collecting} />
      <LogoSection data={data.brand} />
      <Footer data={data.brand} />
    </main>
  );
}
