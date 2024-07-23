
function CoverPageImage({ src }) {
    return <img style={{ objectFit: "cover", margin: "calc(var(--main-p-y) * 3) 0" }} height={250} width={"100%"} src={src} alt={src} />
}

export default CoverPageImage