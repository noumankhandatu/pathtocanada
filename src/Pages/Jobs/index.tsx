import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection/index";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection/index";
import Wrapper from "../../components/Organism/Wrapper/index";
import Stepper from "../../components/Molecules/stepper";
import StepperArray from "../../components/array/stepperArray";
import Button from "../../components/Atoms/button";
import Select from "../../components/Atoms/select";
import { BsSearch } from "react-icons/bs";
import Font from "../../components/Atoms/Font";

const Jobs = () => {
  const values = ["hello", "world"];
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
          {StepperArray.map((items: any) => {
            const { count, paragraph, heading } = items;
            return (
              <Stepper count={count} heading={heading} paragraph={paragraph} />
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button text={"AM I A CANDIDATE?"} primary />
        </div>
      </Wrapper>
      <Wrapper className="bg-white pt-20 pb-20">
        <div className="bg-accordion-color  grid grid-cols-4 gap-10 p-10">
          <Select label={"Job Type"} values={values} />
          <Select label={"Location"} values={values} />
          <div className="bg-teal-700 flex items-center justify-center">
            <BsSearch className="text-white w-5 h-5" />
          </div>
        </div>
        <div className="mt-10 p-5 border border-gray-300 flex justify-between">
          <div className="flex ">
            <img
              className="w-20"
              src="https://path2canada.ca/wp-content/plugins/simple-job-board/public/images/company.png"
              alt=""
            />
            <Font className="ml-4">Team Lead – Data Science</Font>
          </div>
          <div>
            <Button text={"Apply Now"} teal />
          </div>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Jobs;
