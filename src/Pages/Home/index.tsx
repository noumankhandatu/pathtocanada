import React from "react";
import Button from "../../components/Atoms/button";
import Input from "../../components/Atoms/input";
import Wrapper from "../../components/Organism/Wrapper";
import RoadMapCards from "../../components/Molecules/RoadMapCards";
import RoadMapArray from "../../components/array/roadmaparray";
const Home = () => {
  return (
    <div className="pt-24">
      <div
        style={{
          backgroundSize: "80%",
          height: "80vh",
          backgroundPosition: "right -41% bottom -16%",
        }}
        className=" auto bg-no-repeat bg-[url('https://path2canada.ca/wp-content/uploads/2022/05/home_hero.svg')] "
      >
        <div className="pt-10 pl-10 pr-10 md:pl-20 md:pr-20">
          <p className="text-6xl font-bold tracking-widest text-cyan-900	">
            Solving the
            <p className="break-words tracking-widest	"> Canadian tech</p>
            <p className="break-words tracking-widest">talent shortage.</p>
          </p>
          <p className="pt-10">
            We are a marketplace that expertly matches highly experienced global
            talent with
            <p className="break-words">
              hiring Canadian companies. Relocating talent into Canada using a
              world-class
            </p>
            <p className="break-words">immigration program is our specialty.</p>
          </p>
          <div className="mt-10 md:flex ">
            <Button text="AM I CANDIDATE ?" primary />
            <div className="mr-4 mt-10 "></div>
            <Button text="HELP ME FIND A CANDIDATE ?" secondary />
          </div>
        </div>
      </div>
      <div className="h-12 bg-red-50"></div>
      {/* Orange Mark => */}
      <Wrapper bgColor="bg-light-red">
        <p className="text-4xl text-center font-bold pt-20  pb-10  text-cyan-900">
          Path to Canada has a deep understanding
          <p className="breaks-words">
            of the current hiring challenges in the
          </p>
          <p className="breaks-words ">North American tech ecosystem.</p>
        </p>
        <p className="break-words pt-10 pb-16 font-semibold ">
          Utilizing Global Talent Stream, Path to Canada expertly connects only
          the most qualified H-1Bs and global tech talent with Canadian tech
          companies. Global Talent Stream is the best work visa program in the
          world, and it can help Canadian tech companies scale and recruit the
          best talent. It truly is Canada’s secret weapon — it is an unknown
          resource that can quickly provide immigration solutions for qualified
          tech workers.
        </p>
        {/* grid =>  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pb-20 gap-10">
          <div>
            <p className="text-red-600 text-xl	 font-bold tracking-wide	">
              TECH PROFESSIONALS
            </p>
            <p className=" text-2xl	font-bold  pb-10 pt-4 tracking-wide	">
              Facing immigration or permanent resident challenges in the US?
            </p>
            <img
              className="w-6/7"
              src="https://path2canada.ca/wp-content/uploads/2022/05/home_techProfessionals.svg"
              alt=""
            />
            <p className="break-words pt-10 pb-10 font-semibold leading-loose	 ">
              Have an H-1B work visa, or working in the US but are tired of
              waiting for a US Green Card? Disillusioned with the US immigration
              system and looking for a way to stay in North America? Already
              tried the US immigration option and have been forced to exit and
              move back to your home country? Open to exploring Canada as a
              permanent option for living and working?
            </p>
            <p className="break-words  font-semibold leading-loose	 ">
              If any of the above applies to you, complete your profile today
              and let us match you with a Canadian Tech Company who is actively
              hiring for someone exactly like you.
            </p>
            <p className="text-red-600 mt-20 hover:text-fuchsia-900 cursor-pointer	 font-bold tracking-wide	">
              AM I A CANDIDATE?
            </p>
          </div>
          <div>
            <p className="text-red-600 text-xl  	font-bold tracking-wide	">
              CANADIAN EMPLOYERS
            </p>
            <p className="text-2xl pt-4  pb-10	font-bold tracking-wide	">
              Struggling to access and to hire extraordinary, quality talent?
            </p>
            <img
              className="w-6/7"
              src="https://path2canada.ca/wp-content/uploads/2022/05/home_employers.svg"
              alt=""
            />
            <p className="break-words pt-10 pb-10 font-semibold leading-loose	 ">
              Path to Canada has a Tech Talent Relocation Program that utilizes
              Canada’s Global Talent Stream, the best immigration program in the
              world, that was specifically created to support Canada’s tech
              sector.
            </p>
            <p className="break-words  font-semibold leading-loose	 ">
              We match our candidates to your open roles and provide you with a
              curated, carefully vetted group of top-quality, significantly
              <p>
                experienced and educated US and global talent. These highly
                skilled workers are ready to move to Canada to continue their
                tech careers.
              </p>
              <p className="text-red-600 mt-20 hover:text-fuchsia-900 cursor-pointer	 font-bold tracking-wide	">
                HELP ME FIND A CANDIDATE
              </p>
            </p>
          </div>
        </div>
      </Wrapper>
      {/* Road Map Start */}
      <Wrapper bgColor="bg-road-map-color text-white">
        <div className=" pt-20 pb-72">
          <p className="text-5xl text-center   font-bold ">
            The Path to Canada Road Map
          </p>
          <p className="text-center pt-16 pb-16">
            From the moment you submit your online profile to the day you walk
            into your new office and start working in Canada, your journey will
            take approximately 90 days. Compared to waiting decades to get a
            green card in the US, the Canada’s Global Talent Stream process is
            relatively quick. Path to Canada partners with clients and employees
            providing high-touch individualized service every step of the way.
          </p>
          {RoadMapArray.map((items: any) => {
            return <RoadMapCards {...items} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
