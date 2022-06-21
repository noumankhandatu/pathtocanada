import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection/index";
import Wrapper from "../../components/Organism/Wrapper/index";
import EmployeeCard from "../../components/Molecules/employeeCard";
import EmployeeCardArray from "../../components/array/employeeCardArray";
import Input from "../../components/Atoms/input";
import Button from "../../components/Atoms/button";
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
      <Wrapper bgColor="bg-employee-Color pt-5 pb-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10  pt-20 ">
          <div>
            <img
              src="https://path2canada.ca/wp-content/uploads/2022/05/employees_manInFrontOfComputer.svg"
              alt=""
            />
          </div>
          <div>
            <p className="text-4xl font-bold  text-cyan-900">
              Facing immigration or permanent resident challenges in the US?
            </p>
            <p className="break-words pt-8 font-semibold   tracking-wider ">
              Canada may be the answer to your immigration dilemma – and your
              career dreams. The reality of the H-1B immigration situation in
              the US is that many more candidates will apply than those who will
              get selected. Unfortunately, after finding your dream job and
              starting a life in the US, losing out on the lottery means that
              you will not have a chance to work and live in the US long-term.
              Fortunately, there’s a job explosion happening in Canada, that you
              can take advantage of.
              <p className="break-words pt-8 font-semibold   tracking-wider ">
                Our team at Path to Canada focuses on matching highly skilled
                tech professionals with Canadian tech companies who are hiring
                and will sponsor your work visa. We are expertly focused on the
                North American tech marketplace. Our goal is to get you hired.
              </p>
            </p>
          </div>
        </div>
        <div className="pt-20 pb-20 grid md:grid-cols-3  grid-cols-1 gap-5">
          {EmployeeCardArray.map((items: object) => {
            return <EmployeeCard items={items} />;
          })}
        </div>
      </Wrapper>
      <Wrapper bgColor="bg-form-color">
        <div
          style={{
            backgroundSize: "40% 59%",
            backgroundPosition: "left 25% bottom -27%",
          }}
          className="pb-20 pt-20 bg-[url('https://path2canada.ca/wp-content/uploads/2022/05/employees_arrowMan_white.svg')] bg-cover	 bg-no-repeat  "
        >
          <div className="grid lg:grid-cols-[0.7fr_1fr]  grid-cols-1 text-white gap-40">
            <div>
              <p className="lg:text-4xl text-3xl font-bold  ">
                Ready to move to Canada to continue your tech career?
              </p>
              <p className="text-2xl pt-10 font-bold  ">
                Qualification is quick and easy.
              </p>
              <p className="text-lg pb-6 pt-6 font-bold  ">
                Key criteria include:
              </p>
              <div>
                <li className="list-disc pt-4 text-lg">
                  Willing to move your tech career and life to Canada
                </li>
                <li className="list-disc pt-4 text-lg">
                  A minimum of 3 years’ experience in a tech qualified role
                </li>
                <li className="list-disc pt-4 text-lg">
                  Tech Degree is preferred
                </li>
              </div>
              <p className="text-2xl pt-10 font-bold  text-white">
                SUBMIT YOUR PROFILE TODAY!
              </p>
              <p className=" pt-4 text-lg">
                Your first step is to complete the Candidate Assessment Form. Be
                sure to answer every question as carefully and accurately as
                possible.
              </p>
              <p className=" pt-4 text-lg">
                Take 5 minutes to answer a few questions — Let’s get started.
              </p>
            </div>
            {/* form below */}
            <div>
              <div className="text-center p-10 bg-red-600">
                <p className="lg:text-4xl text-3xl font-bold  text-white">
                  SUBMIT YOUR PROFILE TODAY!
                </p>
                <p className="pt-5">
                  Let’s work together to find your next role in Canada
                </p>
              </div>
              <div className=" p-10 bg-white text-black">
                <p className="lg:text-5xl text-3xl font-bold  text-aqua-color">
                  Candidate Assessment
                </p>
                <p className="pt-10 pb-10">
                  Let this be the start of a new life for you in Canada. Please
                  complete your profile as accurately and completely as possible
                  to allow us to quickly determine your qualification for our
                  Tech Talent Relocation Program.
                </p>
                <hr />
                <div className="pt-5">
                  <p className="text-base font-bold pb-10">Name*</p>
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-5">
                    <Input text="First" width={"w-full"} toggle={true} />
                    <Input text="Last " width={"w-full"} toggle={true} />
                  </div>
                  <div className="pt-5">
                    <Input text="Email" width={"w-full"} toggle={true} />
                  </div>
                  <div className="pt-10 pb-5">
                    <Button text="NEXT" primary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* guy with coffee section below */}
      <div
        className="lg:pl-32 pl-5  pt-10"
        style={{ backgroundColor: "#F2EAE1" }}
      >
        <div className="pt-20 relative  grid lg:grid-cols-[0.7fr_1fr_1fr]  grid-cols-1 gap-2">
          <div>
            <p className="lg:text-6xl text-3xl font-bold lg:tracking-wide text-cyan-900	">
              What happens once you submit your profile?
            </p>
          </div>
          <div>
            <p className="break-words tracking-wide text-lg	 font-bold pb-5">
              Our team will first determine your qualification status. We will
              then actively partner with you and match you to current or future
              open roles.
            </p>
            <p className="break-words tracking-wide font-normal pt-5 pb-5 ">
              You will be invited to a video call so we can get to know you and
              understand your specific situation and the type of role you are
              interested in. In this session, we will share our expertise on the
              Canadian tech sector, the positions that match your skill sets,
              and then begin the process of getting you connected and
              interviewed. Our number one goal is you! We want to ensure you get
              an amazing role with a great company and with a good salary to
              match!
            </p>
            <p className="break-words tracking-wide font-normal pt-5">
              We understand that moving to a new country isn’t easy and you’ll
              have lots of questions. We are here to support you every step of
              the way. You will have direct access to our team of professionals
              and informational webinars to ensure your transition to Canada is
              as smooth as possible.
            </p>
          </div>
          <div>
            <img
              src="https://path2canada.ca/wp-content/uploads/2022/05/employees_happyWorker.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Employee;
