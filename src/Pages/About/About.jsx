import ImageSlider from "@/Components/Image-Slider/Slider";
import "./style.scss";

const headingText = "Big Heading Text";
const subHeadingText = "Subheading text line goes here.";
const descriptionText =
  "Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.";

const About = () => {
  return (
    <div className="About">
      <div className="image-section">
        <ImageSlider />
      </div>
      <div className="section-2">
        <h1 className="text-84 text-600">
          Introduction line heading or value proposition goes here in 4 lines.
        </h1>
        <p className="text-28">
          Description text paragraph can go here in 200 words. This can be
          multi-line text. Description text paragraph can go here in 200 words.
          This can be multi-line text.{" "}
        </p>
      </div>
      <div className="hero-section">
        <img src="/assets/Banner.png" alt="Banner" />
        <div className="overlay">
          <h1 className="text-84 text-700">{headingText}</h1>
          <h3 className="text-48 text-400">{subHeadingText}</h3>
          <h4 className="text-32 text-400">{descriptionText}</h4>
        </div>
      </div>
      <div className="section-4">
        <div className="text-center-wrapper">
          <h2 className="text-72 text-600">Value Proposition Statement</h2>
          <p className="text-28">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
        </div>
      </div>
      <div id="section5" className="Big-container">
        <img
          className="main-backImage"
          src="/assets/blue-particle.jpg"
          alt="bg-image"
          height="700"
          width="500"
        />
        <div className="left parent">
          <img
            className="backImage"
            src="/assets/blue-particle.jpg"
            alt="bg-image"
            height="700"
            width="500"
          />
          <h1 className="text-72 text-700">Big Heading Text goes here</h1>
        </div>
        <div className="right">
          <div className="card">
            <div className="text-wrapper">
              <p className="text-32 text-400">
                Small descriptive text in 3-4 lines can go here. They can be a
                single line or short paragraph too. Small descriptive text in
                3-4 lines can go here. They can be a single line or short
                paragraph too. Small descriptive text in 3-4 lines can go here.
                They can be a single line or short paragraph too. Small
                descriptive text in 3-4 lines can go here. They can be a single
                line or short paragraph too.
              </p>
              <button className="button">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
