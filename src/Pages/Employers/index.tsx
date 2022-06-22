import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection";
import Wrapper from "../../components/Organism/Wrapper/index";
import Button from "../../components/Atoms/button";
import Stepper from "../../components/Molecules/stepper";
const Employers = () => {
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
      <Wrapper bgColor="bg-employee-Color">
        <div className="grid grid-cols-2 gap-10 pt-20 pb-20">
          <div>
            <p className="text-4xl font-bold text-aqua-color">
              Struggling to hire quality tech talent in Canada?
            </p>
            <p className="pt-10">
              Path to Canada has played a huge role in recruiting and hiring top
              talent to meet the needs of growing technology companies in
              Canada. Companies like yours all over the country are experiencing
              unprecedented growth, and unfortunately, a corresponding tech
              shortage.
            </p>
            <p className="pt-10">
              Did you know that Canada has a secret weapon to acquire tech
              talent – Global Talent Stream, the best work visa program in the
              world? We can help you use this program to acquire highly-skilled
              tech talent from around the world and the US and bring them to
              Canada permanently in less than 90 days.
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lcGgjS6U3vA"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20 text-center">
          <p className="text-5xl font-bold text-aqua-color">What We Do?</p>
          <p className="pt-5  pb-5">
            Path to Canada is solving the Canadian tech talent shortage. We have
            a vetted pool of international tech talent (75% US H-1B visa holders
            and 25% global) that are eager to permanently move to Canada. You
            interview, decide who to hire, and then sponsor their Canadian work
            visa (via Global Talent Stream). Relocating tech talent into Canada
            using a world-class immigration program is our specialty.
          </p>
          <p>
            Our personal, individualized high-touch service will not only save
            you time and effort, but we put our years of experience to work for
            you, finding you quality candidates that will help grow your company
            and so you can compete on the North American tech stage.
          </p>
          <p className="pt-5 pb-5">
            Our team partners with you to understand your specific talent
            requirements. In the following stages, we carefully vet experienced
            and educated US and global talent and present you with only the
            strongest candidates suited to your job.
          </p>
          <p>
            Access our hands-on, full-service model for the same fee as a
            typical recruitment agency.
          </p>
          <p className="pt-5">
            No upfront fees — you only pay once we find you your perfect
            employee.
          </p>
          <div className="flex justify-center pt-8">
            <Button text={"LETS CONNECT"} primary />
          </div>
        </div>
      </Wrapper>
      {/* Canada  Secret  Section Starts*/}
      <Wrapper bgColor="bg-aqua-color text-white pt-20 pb-20">
        <div className="text-center pb-20 pt-20">
          <p className="text-5xl font-bold pb-5">Canada’s Secret Weapon</p>
          <p>
            Global Talent Stream (GTS), Canada’s best-in-the-world immigration
            program, was created to specifically support the growth and
            scalability of the Canada’s tech market. GTS allows us to
            efficiently and quickly relocate the most outstanding, sought-after
            candidates to fulfill your open roles right here in Canada.
          </p>
          <p className="pt-4 text-3xl font-bold">Timeline​</p>
          <p className="pt-4 text-1xl font-bold">(8-10 Weeks)</p>
        </div>
        <div className="flex">
          <Stepper count={1} heading="Application Prep" paragraph="2 Weeks" />
          <Stepper
            count={2}
            heading="Labor Market Impact Assessment"
            paragraph="5 Weeks"
          />
          <Stepper
            count={3}
            heading="Work Visa Application"
            paragraph="4-6 Weeks"
          />
        </div>
        <div className="text-center pt-5 pb-5">
          <p className="pt-10 pb-5">
            Two-year work visa (renewable) which includes an open work visa for
            spouse.
          </p>
          <p className="font-bold text-2xl pt-10">
            Canada’s more flexible work visa and immigration systems, including
            the Global Talent Stream provide opportunities for foreign workers
            to move to Canada and live the “Canadian Dream”.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Employers;