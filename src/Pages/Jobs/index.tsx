import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection/index";

const Jobs = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Ready to get to work in Canada?"
        paragraph="We change lives by connecting global tech workers seeking to immigrate to Canada with fast-growing Canadian tech companies who are actively hiring & searching for qualified talent. Canada’s tech sector is exploding — explore our open roles and apply."
        bgImage="https://path2canada.ca/wp-content/uploads/2022/05/jobs_hero.svg"
        showFirstBtn={true}
      />
    </div>
  );
};

export default Jobs;