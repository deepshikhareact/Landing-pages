import TestimonialSlider from "@/Components/Testomonials/Slider";
import "./style.scss";

const headingText = "Big Heading Text";
const subHeadingText = "Subheading text line goes here.";
const descriptionText =
  "Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.";

// eslint-disable-next-line react/prop-types
const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
};
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img src="/assets/Banner.png" alt="Banner" />
        <div className="overlay">
          <h1 className="text-84 text-700">{headingText}</h1>
          <h3 className="text-48 text-500">{subHeadingText}</h3>
          <h4 className="text-32 text-500">{descriptionText}</h4>
          <KnowMoreBtn />
        </div>
      </div>
      <div className="home-section-2">
        <h4 className="text-32 text-600">Small Category Tag</h4>
        <h3 className="text-60 text-600">
          Big statement sentence goes here in one or two lines.
        </h3>
        <KnowMoreBtn btnClass="purple" lable="View Services" />
      </div>
      <div className="cards-section">
        <div className="card">
          <img
            src="/assets/blue-particle.jpg"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">CATEGORY</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Introduction line heading or value proposition goes here in 4
                lines.
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/red-rays.jpg"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">CATEGORY</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Introduction line heading or value proposition goes here in 4
                lines.
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/blue-ball.jpg"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">CATEGORY</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Introduction line heading or value proposition goes here in 4
                lines.
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h3 className="text-32 text-700 text-container">Testimonial</h3>
        <TestimonialSlider />
      </div>
      <div id="section6" className="Big-container">
        <div className="left parent">
          <img
            className="backImage"
            src="/assets/red-rays.jpg"
            alt="bg-image"
            height="700"
            width="500"
          />
          {/* <h1>Big Heading Text goes here</h1> */}
        </div>
        <div className="right">
          <div className="card">
            <div className="all">
              <div className="text-wrapper">
                <h2 className="text-60 text-700">HEADING GOES HERE</h2>
                <p className="text-32 text-400">
                  Small descriptive text in 3-4 lines can go here. They can be a
                  single line or short paragraph too. Small descriptive text in
                  3-4 lines can go here. They can be a single line or short
                  paragraph too. Small descriptive text in 3-4 lines can go
                  here. They can be a single line or short paragraph too. Small
                  descriptive text in 3-4 lines can go here. They can be a
                  single line or short paragraph too.
                </p>
              </div>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
