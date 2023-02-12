import Carousel from "react-material-ui-carousel";

function Carousell() {
  const images = [
    {
      src: "https://img.freepik.com/premium-vector/health-insurance-protection-banner_126283-205.jpg",
      alt: "Banner 1",
    },
    {
      src: "https://img.freepik.com/premium-vector/health-insurance-protection-banner_126283-205.jpg",
      alt: "Banner 2",
    },
    {
      src: "https://img.freepik.com/premium-vector/health-insurance-protection-banner_126283-205.jpg",
      alt: "Banner 3",
    },
  ];
  return (
    <Carousel interval="5000" showArrows={true} color="appBackground">
      {images.map((image) => {
        return (
          <div key={image.alt}>
            <img src={image.src} style={{ maxWidth: "100%" }} alt={image.alt} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Carousell;
