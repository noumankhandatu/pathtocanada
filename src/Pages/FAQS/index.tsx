import React from "react";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection/index";
import HomePageFirstSection from '../../components/Organism/homePageFirstSection/index';
const FAQS = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Is your company looking for senior tech talent?"
        paragraph="Gain exclusive access to a vetted pool of quality tech candidates that are expertly matched to your open roles. Let’s work together."
        bgImage={
          "https://path2canada.ca/wp-content/uploads/2022/05/employers_hero.svg"
        }
        showFirstBtn={true}
      />
      <BlackBannerLeafSection />
    </div>
  );
};

export default FAQS;
