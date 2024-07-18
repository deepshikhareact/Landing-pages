import TestimonialsSlider from "@/Components/Testomonials/Slider";
import "./style.scss";

const fakeDes =
  "Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text.";
const fakeImgSrc = "/assets/sofa-4.jpg";

const fakeData = [
  {
    heading: "Service 01 Title",
    description: fakeDes,
    imgSrc: fakeImgSrc,
    link: "no-link",
  },
  {
    heading: "Service 02 Title",
    description: fakeDes,
    imgSrc: fakeImgSrc,
    link: "no-link",
  },
  {
    heading: "Service 03 Title",
    description: fakeDes,
    imgSrc: fakeImgSrc,
    link: "no-link",
  },
  {
    heading: "Service 04 Title",
    description: fakeDes,
    imgSrc: fakeImgSrc,
    link: "no-link",
  },
];

const ServicePage = () => {
  return (
    <div className="Service">
      <div className="section-1">
        <h1 className="text-84 text-600">
          Introduction line heading or value proposition goes here in 4 lines.
        </h1>
        <p className="text-28">
          Description text paragraph can go here in 200 words. This can be
          multi-line text. Description text paragraph can go here in 200 words.
          This can be multi-line text.{" "}
        </p>
      </div>
      <div className="section-2">
        <img src="/assets/Banner.png" alt="Banner" />
      </div>
      <div className="section-3">
        <h4 className="text-32 text-600">Small Category Tag</h4>
        <h3 className="text-60 text-600">
          Big statement sentence goes here in one or two lines.
        </h3>
      </div>
      <div className="section-4">
        {fakeData.map((val, i) => {
          return (
            <div className="card" key={i}>
              <ServiceProductCard data={val} />
            </div>
          );
        })}
      </div>
      <div className="testimonials">
        <h3 className="text-32 text-700 text-container">Testimonial</h3>
        <TestimonialsSlider />
      </div>
    </div>
  );
};

function ServiceProductCard({ data }) {
  const {
    title = "Service title",
    description = "description",
    link = "link",
    imgSrc = "imgSrc",
  } = data;

  return (
    <>
    <div className="left">
      <img
        height={360}
        width={360}
        src={imgSrc || fakeImgSrc}
        alt={title + " image"}
      />
    </div>
      <div className="right">
        <div className="top">
          <h3 className="text-60 text-600">{title}</h3>
          <p className="text-400 text-28">{description || fakeDes}</p>
        </div>
        <KnowMoreBtn btnClass="purple" lable="View Services" />
      </div>
    </>
  );
}

function KnowMoreBtn ({ btnClass = "", link, lable = "KNOW MORE" }) {
    return (
      <button className={btnClass + " button"}>
        <a href={link || "#link"}>{lable}</a>
      </button>
    );
  }
export default ServicePage;
