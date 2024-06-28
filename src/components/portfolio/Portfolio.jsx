import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Conceptualization and Ideation",
    img: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Brainstorming and developing creative concepts and visual ideas.",
  },
  {
    id: 2,
    title: "Design Software Proficiency",
    img: "https://images.pexels.com/photos/21326539/pexels-photo-21326539/free-photo-of-futuristic-lamp-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Expertise in using design tools like Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
  },
  {
    id: 3,
    title: "Typography and Layout",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Skill in typography, layout design, and understanding of visual hierarchy.",
  },
  {
    id: 4,
    title: "Brand Identity Development",
    img: "https://images.pexels.com/photos/413279/pexels-photo-413279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Creating logos, brand guidelines, and visual identities that align with client or company goals.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>By: Ankit Verma</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Explore My Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
