import photo from "./headerbackground.jpg";

export default function Heading() {
  return (
    <img
      src={photo}
      style={{
        width: "100%",
        position: "absolute",
        maxHeight: "100%",
        display: "inline-block",
        minHeight: "100%",
        left: "0",
        top: "0",
        objectFit: "cover",
        zIndex: "-5",
      }}
    ></img>
  );
}
