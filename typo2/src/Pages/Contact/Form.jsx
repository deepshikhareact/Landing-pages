import { useState } from "react"

const icons = [
    {
        imgUrl: "/assets/Contact/Group.png",
        label: "Consulting"
    },
    {
        imgUrl: "/assets/Contact/Icon.png",
        label: "Media"
    },
    {
        imgUrl: "/assets/Contact/_x34_.png",
        label: "Production"
    },
    {
        imgUrl: "/assets/Contact/Group (1).png",
        label: "Design"
    },
    {
        imgUrl: "/assets/Contact/Group 17.png",
        label: "Digital"
    }
]


const ContactForm = () => {

    const [category, setCategory] = useState(null)

    return (
        <form onSubmit={(e) => e.preventDefault()} className='Form'>
            <h2 className='text-42 text-600'>Drop a line and we will get in touch with you.</h2>
            <div className="fields">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Address" />
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Organization" />
                <input type="text" placeholder="Designation" />
            </div>
            <h2 className='text-42 text-600'>Interested in....</h2>
            <div className="flex-icons">
                {icons.map((icon, i) => {
                    return <div
                        onClick={() => setCategory(icon.label)}
                        key={i} className={`item ${category === icon.label ? "active" : ""}`}>
                        <img className="icon" height={80} width={120} src={icon.imgUrl} alt={icon.label} />
                        <p className="text-28 text-400">{icon.label}</p>
                        <img className="check" src="/assets/Contact/check.png" height={34} width={34} />
                    </div>
                })}
            </div>

            <textarea name="" id="" placeholder="Your Message"></textarea>
            <div className="submit">
                <button className="button">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm