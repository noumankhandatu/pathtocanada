import React, { useEffect } from "react";
import HomePageFirstSection from "../../components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../../components/Organism/blackBannerLeafSection";
import BlogCard from "../../components/Atoms/blogCard";
import Wrapper from "../../components/Organism/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../../Redux/blogSlicer/index";
const Blog = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.BlogSlicer.data);
  console.log(state, "my state");
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Stay informed about working in Canadian tech"
        bgImage="https://path2canada.ca/wp-content/uploads/2022/05/blog_hero.svg"
        paragraph="Our industry and immigration blog is designed to help you decide if Canada is the right path for you, and prepare you to make the move."
      />
      <Wrapper>
        <div className="pt-10 pb-20">
          <div className="grid grid-cols-3 gap-10">
            {state ? (
              <>
                {state.map((items: any) => {
                  return <BlogCard items={items} />;
                })}
              </>
            ) : (
              `Loading`
            )}
          </div>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Blog;
