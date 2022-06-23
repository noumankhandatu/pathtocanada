import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection/index";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection/index";
import Wrapper from "../../components/Organism/Wrapper/index";
import Stepper from "../../components/Molecules/stepper";
import StepperArray from "../../components/array/stepperArray";
const Jobs = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Ready to get to work in Canada?"
        paragraph="We change lives by connecting global tech workers seeking to immigrate to Canada with fast-growing Canadian tech companies who are actively hiring & searching for qualified talent. Canada’s tech sector is exploding — explore our open roles and apply."
        bgImage="https://path2canada.ca/wp-content/uploads/2022/05/jobs_hero.svg"
        showFirstBtn={true}
      />
      <Wrapper className="bg-aqua-color pt-20 pb-20 text-white text-center">
        <p className="text-5xl font-bold">How we help you get a Canadian job</p>
        <div className="pt-20 flex">
          {StepperArray.map((items: object) => {
            return (
              <Stepper
                count={1}
                heading="Submit your profile to see if you qualify"
                paragraph="Fill out the “Candidate Assessment” form to see if you could qualify for a Canadian work visa (via Global Talent Stream) and so we can learn about your tech education and work experience."
              />
            );
          })}
          
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Jobs;
