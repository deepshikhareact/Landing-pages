
import TestimonialsSlider from "@/Components/Testomonials/Slider";
import "./style.scss"

const BehindUs = () => {
  return (
    <div className='BehindUs'>
  <div className="usersList">
        <UserCard imgSrc={"/assets/girl.jpg"} />
        <UserCard imgSrc={"/assets/woman.jpg"} />
        <UserCard imgSrc={"/assets/woman1.jpg"} />
        <UserCard imgSrc={"/assets/woman2.jpg"} />

        <UserCard imgSrc={"/assets/girl.jpg"} />
        <UserCard imgSrc={"/assets/woman.jpg"} />
        <UserCard imgSrc={"/assets/woman1.jpg"} />
        <UserCard imgSrc={"/assets/woman2.jpg"} />
        
        <UserCard imgSrc={"/assets/girl.jpg"} />
        <UserCard imgSrc={"/assets/woman.jpg"} />
        <UserCard imgSrc={"/assets/woman1.jpg"} />
        <UserCard imgSrc={"/assets/woman2.jpg"} />
        </div>
        <div className="testimonials">
        <h3 className="text-32 text-700 text-container">Testimonial</h3>
      <TestimonialsSlider/>
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function UserCard({ imgSrc, name, tag }) {
    name = name || "Name";
    tag = tag || "Designation";

    return (
      <div className="userCard">
        <img loading="lazy" height={200} width={200} src={imgSrc} alt={name} />
        <div className="bottom">
          <h3>{name}</h3>
          <p>{tag}</p>
        </div>
      </div>
    );
  }
export default BehindUs