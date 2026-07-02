import Category from "./category";
import FAQ from "./faq";
import Introduction from "./introduction";
import Reviews from "./reviews";
//@ts-ignore
import React, { useEffect } from "react";
import VestaBetter from "./vesta-better";

export default function WelcomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="th-bgGray-100">
      <Introduction />
      <Category />
      <Reviews />
      <VestaBetter />
      <FAQ />
    </div>
  );
}
