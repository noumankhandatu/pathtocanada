import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection/index";

const Employee = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={`Build your tech career and life in Canada`}
        paragraph={
          "Canadian tech companies are hiring and looking for experienced talent."
        }
        bgImage={`https://path2canada.ca/wp-content/uploads/2022/05/employees_hero.svg`}
        showFirstBtn={true}
      />
      <BlackBannerLeafSection />
    </div>
  );
};

export default Employee;
