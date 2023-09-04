import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          fringilla velit in erat suscipit, in laoreet nunc laoreet. Duis ut
          blandit augue. Suspendisse aliquam finibus mollis. Pellentesque
          tincidunt interdum est at placerat. Ut aliquam blandit commodo. Donec
          tortor mauris, maximus nec tortor vel, hendrerit posuere metus.
          Pellentesque commodo malesuada nunc. Donec vel massa ante.
        </p>
        <button type="button" className="custom__button">Know more</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>


      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Out History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          fringilla velit in erat suscipit, in laoreet nunc laoreet. Duis ut
          blandit augue. Suspendisse aliquam finibus mollis. Pellentesque
          tincidunt interdum est at placerat. Ut aliquam blandit commodo. Donec
          tortor mauris, maximus nec tortor vel, hendrerit posuere metus.
          Pellentesque commodo malesuada nunc. Donec vel massa ante.
        </p>
        <button type="button" className="custom__button">Know more</button>
      </div>
    </div>
    AboutUs
  </div>
);

export default AboutUs;
