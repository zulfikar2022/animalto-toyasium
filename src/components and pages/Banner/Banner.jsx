import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="">
        <div className="slider-image-container">
          <img
            className="d-block w-100 carousel-image"
            src={`https://i.ibb.co/b3DTdZ2/lion3.jpg`}
            alt="Third slide"
            style={{ height: "75vh" }}
          />
          <div className="overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>Mr. Lion</h3>
          <p className="text-white">Unleash your wild imagination with our ferocious Lion toy! Let your little ones embark on thrilling safari adventures, channeling their inner bravery and strength. Our cuddly Lion will be their loyal companion in every playtime expedition.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slider-image-container ">
          <img
            className="d-block w-100 carousel-image "
            src={`https://i.ibb.co/hZWZrxH/elephant.jpg`}
            alt="Third slide"
            style={{ height: "75vh" }}
          />
          <div className="overlay"></div>
        </div>

        <Carousel.Caption>
          <h3>Mr. Elephant</h3>
          <p className="text-white">Join the enchanting world of the gentle giants with our adorable Elephant toy! Your children will discover the wonders of the animal kingdom as they nurture their empathy and compassion. Our huggable Elephant will be a reminder of the importance of kindness and friendship.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-image-container">
          <img
            className="d-block w-100 carousel-image"
            src={`https://i.ibb.co/CzMgdLG/panda.jpg`}
            alt="Third slide"
            style={{ height: "75vh" }}
          />
          <div className="overlay"></div>
        </div>

        <Carousel.Caption>
          <h3>Mr. Panda</h3>
          <p>
          Experience the magic of the bamboo forests with our delightful Panda toy! Your little adventurers will be captivated by the playful nature of these iconic creatures. Our cuddly Panda will spark their curiosity and inspire them to explore the beauty of nature, one bamboo bite at a time
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
