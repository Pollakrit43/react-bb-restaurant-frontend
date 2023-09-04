import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef1} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/* <img src={images.quote} alt="" /> */}
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque facilisis ipsum augue, eu tempus massa consectetur vel.
            Fusce quam leo, iaculis ut efficitur nec, faucibus molestie leo.
            Nunc quis suscipit augue. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. In interdum metus ut
            mattis egestas. Aenean enim ligula, bibendum vitae neque ut,
            porttitor dignissim quam. Maecenas pretium posuere sem semper
            sodales. In ante odio, tempor vel semper a, gravida eu lorem.
          </p>
        </div>
        <p className="p__opensans">
          Nunc quis suscipit augue. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. In interdum metus ut mattis
          egestas. Aenean enim ligula, bibendum vitae neque ut, porttitor
          dignissim quam. Maecenas pretium posuere sem semper sodales. In ante
          odio,
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Roberto</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
