import { HomeHero } from "@/components/HomeHero";
import { HomeCategories } from "@/components/HomeCategories";
import { HomeCollection } from "@/components/HomeCollection";
import { HomeTrust } from "@/components/HomeTrust";
import { HomeBest } from "@/components/HomeBest";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeCollection />
      <HomeTrust />
      <HomeBest />
      <Faq />
    </>
  );
}
