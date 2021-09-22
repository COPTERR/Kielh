import React, { useLayoutEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import styled from "styled-components";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Protoys = styled.div`
  .react-multi-carousel-dot button {
    width: 8px;
    height: 8px;

    /* Main / Retinol Purple */

    border: 1px solid white;
    box-sizing: border-box;
    border-radius: 40px;
    background-color: transparent;
  }
  .react-multi-carousel-dot--active button {
    /* background: #392d8c; */
    background: white;
  }
  .react-multi-carousel-track {
    height: ${(props) => props.element && `${props.element}px`};
  }
  .Card {
    width: 200px;
    border-radius: 16px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: ${(props) => props.element && `calc(${props.element}px - 18px)`};
  }
  .img {
    height: ${(props) => props.element && `calc(${props.element}px - 18px)`};
  }
`;

const Night = () => {
  const [width, height] = useWindowSize();
  const responsive = {
    small: {
      breakpoint: { max: 329, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      // partialVisibilityGutter: 215,
    },
    iphone11pro: {
      breakpoint: { max: 340, min: 330 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 115,
    },
    iphone12pro: {
      breakpoint: { max: 370, min: 351 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 130,
    },
    iphone11: {
      breakpoint: { max: 380, min: 370 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 155,
    },
    iphone12promax: {
      breakpoint: { max: 390, min: 381 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 165,
    },
    other: {
      breakpoint: { max: 3000, min: 391 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 215,
    },
  };

  return (
    <div className="Carousel">
      <Protoys element={height}>
        <Carousel
          // additionalTransfrom={50}
          slidesToSlide={1}
          partialVisible={false}
          arrows={false}
          autoPlaySpeed={3000}
          // centerMode
          className=""
          containerClass="container_carousel"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="carousel_item"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={true}
          responsive={responsive}
          dotListClass="Container_dot"
        >
          <div className="Card">
            <img className="img" src="./img/pro_page01.png" />
            <a href="https://bit.ly/2WhuiFQ" target="_blank">
              <button className="Carousel_btn">ช้อปเลย</button>
            </a>
          </div>
          <div className="Card">
            <img className="img" src="./img/pro_page02.png" />

            <a href="https://bit.ly/2Wp50F9" target="_blank">
              <button className="Carousel_btn">ช้อปเลย</button>
            </a>
          </div>
          <div className="Card">
            <img className="img" src="./img/pro_page03.png" />
            <a href="https://bit.ly/2WkEP2G" target="_blank">
              <button className="Carousel_btn">ช้อปเลย</button>
            </a>
          </div>
          <div className="Card">
            <img className="img" src="./img/pro_page04_night.png" />
            <a href="https://bit.ly/3gUTN6X" target="_blank">
              <button className="Carousel_btn">ช้อปเลย</button>
            </a>
          </div>
          <div className="Card">
            <img className="img" src="./img/pro_page05.png" />
            <a href="https://bit.ly/38z5YSi" target="_blank">
              <button className="Carousel_btn">ช้อปเลย</button>
            </a>
          </div>
        </Carousel>
      </Protoys>
    </div>
  );
};

export default Night;
