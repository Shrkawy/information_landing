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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
