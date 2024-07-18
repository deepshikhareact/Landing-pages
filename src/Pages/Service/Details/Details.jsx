import "./style.scss";

const fakeCardData = [
  {
    category: "SERVICE",
    label: "User Research & Insights",
    imgSrc: "/assets/msg593987909-835.jpg",
  },
  {
    category: "CASE STUDY",
    label: "User Research & Insights",
    imgSrc: "/assets/msg593987909-836.jpg",
  },
  {
    category: "FEATURED WORK",
    label: "User Research & Insights",
    imgSrc: "/assets/owl.jpg",
  },
  {
    category: "HAND PICKED",
    label: "User Research & Insights",
    imgSrc: "/assets/woman2.jpg",
  },
];

// eslint-disable-next-line react/prop-types
const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
};
const DetailsPage = () => {
  return (
    <div className="Details">
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
      <div className="cards-section">
        {fakeCardData.map((card, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={card.imgSrc}
                alt={card.imgSrc}
                height={450}
                width={350}
              />
              <div className="text-container">
                <p className="text-24 text-600">{card.category}</p>
                <div className="bottom">
                  <p className="text-36 text-600">{card.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="section-3">
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
      <div id="section-4" className="Big-container">
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
      <div className="FAQ">
          <h2 className="text-72 text-600">Frequently Asked Questions</h2>
        {Array.from({ length: 4 }).map((qA, i) => {
          return (
            <details key={i}>
              <summary className="text-32 text-500">
                What is the difference between a website and a web application?
              </summary>
              <p className="text-28 text-300">
                A website is a collection of web pages that are connected to
                each other and are accessible
              </p>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsPage;
