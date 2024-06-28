import React from 'react'

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import logo1 from './logo/1.jpg';
import logo2 from './logo/5.jpg';
import logo3 from "./logo/6.jpg";
import logo4 from "./logo/17.jpg";
import logo5 from "./logo/18.jpg";
import logo6 from "./logo/11.jpg";
import logo7 from "./logo/16.jpg";
import logo8 from "./logo/15.jpg";
import {
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
  poster10,
  poster11,
  poster12,
  poster13,
  poster14,
  poster15,
  poster16,
  poster17,
  poster18,
  poster19,
  poster20,
  poster21,
  poster22,
  poster23,
  poster24,
  poster25,
  poster26,
  poster27,
  poster28,
  poster29,
  poster30,
  poster31,
  poster32,
  poster33,
  poster34,
  poster35,
  poster36,
  poster37,
  poster38,
  poster39,
  poster40,
  poster41,
  poster42,
  poster43,
  poster44,
  poster45,
  poster46,
  poster47,
  poster48,
  poster49,
  poster50,
  poster51,
  poster52,
  poster53,
  poster54,
  poster55,
  poster56,
  poster57,
  poster58,
  poster59,
  poster60,
  poster61,
  poster62,
  poster63,
  poster64,
  poster65,
  poster66,
  poster67,
  poster68,
} from './Images'


const images = [
  {
    original: logo1,
    thumbnail: logo1,
  },
  {
    original: logo2,
    thumbnail: logo2,
  },
  {
    original: logo3,
    thumbnail: logo3,
  },
  {
    original: logo4,
    thumbnail: logo4,
  },
  {
    original: logo5,
    thumbnail: logo5,
  },
  {
    original: logo6,
    thumbnail: logo6,
  },
  {
    original: logo7,
    thumbnail: logo7,
  },
  {
    original: logo8,
    thumbnail: logo8,
  },
];

for (let i = 1; i <= 68; i++) {
  let posterVariable = `poster${i}`;
  images.push({ original: eval(posterVariable), thumbnail: eval(posterVariable) });
}

export default function Gallery() {

  return (
    <ImageGallery items={images}
    infinite={true}
    autoPlay={true}
    showNav={true}
    showIndex={true}
    thumbnailPosition="left"
    />

  )
}


