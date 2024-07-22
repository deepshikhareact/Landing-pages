import "./style.scss";

const WorkPage = () => {
  const images = [
    "/assets/color-blast.jpg",
    "/assets/msg593987909-845.jpg",
    "/assets/msg593987909-846.jpg",
    "/assets/msg593987909-843.jpg",
    "/assets/msg593987909-844.jpg",
    "/assets/color-blast.jpg",
    "/assets/msg593987909-845.jpg",
    "/assets/msg593987909-846.jpg",
    "/assets/msg593987909-843.jpg",
    "/assets/msg593987909-844.jpg",
    "/assets/color-blast.jpg",
    "/assets/msg593987909-845.jpg",
    "/assets/msg593987909-846.jpg",
    "/assets/msg593987909-843.jpg",
    "/assets/msg593987909-844.jpg",

  ];

  const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
    return (
      <button className={btnClass + " button"}>
        <a href={link || "#link"}>{lable}</a>
      </button>
    );
  };

  return (
    <div className="Work">
      <div className="section-1">
        <h4 className="text-32 text-600">Small Category Tag</h4>
        <h3 className="text-60 text-600">
          Big statement sentence goes here in one or two lines.
        </h3>
      </div>
      <div className="image-gallery">
        {images.map((val, i) => {
          return (
            <img
              loading="lazy"
              src={val}
              height="400"
              width="300"
              alt="img"
              key={i}
            />
          );
        })}
      </div>
      <div className="cards-section">
        {Array.from({ length: 5 }, ((val, i) => {
          return (<div key={i} className="card">
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
          </div>)
        }))}
      </div>
    </div>
  );
};

export default WorkPage;
