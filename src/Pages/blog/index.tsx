import React from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection";
import BlogCard from "../../components/Atoms/blogCard";
import Wrapper from "../../components/Organism/Wrapper";
const Blog = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Stay informed about working in Canadian tech"
        bgImage="https://path2canada.ca/wp-content/uploads/2022/05/blog_hero.svg"
        paragraph="Our industry and immigration blog is designed to help you decide if Canada is the right path for you, and prepare you to make the move."
      />
      <Wrapper>
        <div className="pt-10 pb-20">
          <BlogCard />
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Blog;
