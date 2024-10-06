import React from "react";
//import list from "../assets/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import  { useEffect, useState } from "react";

function FreeNotes() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    const getNote = async () => {
      try {
        const noteRes = await axios.get("http://localhost:4000/note");
        console.log(noteRes.data);
        const data = noteRes.data.filter((data) => data.category === "Free")
        setNote(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getNote();
  }, []);
  // const freenotes = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Notes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            adipisci aperiam incidunt aspernatur ab. Lorem, ipsum dolor. Ullam
            debitis id nostrum voluptas veniam.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {note.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeNotes;
