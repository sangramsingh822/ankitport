import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const details = [
    {
      title: "Branding",
      description: "lore asdfasdfasdfasdfasdfc",
    }
  ]



  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>MY STRENGTH</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Creativity</h2>
          <p>
            Possesses a strong creative vision, consistently generating innovative and visually
            appealing designs that engage audiences and effectively communicate brand messages.</p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Technical Proficiency</h2>
          <p>
            Expert in using industry-standard design software such as Adobe Creative
            Suite (Photoshop, Illustrator, InDesign) and other relevant tools, ensuring high-quality and precise
            design output.</p>
          <button></button>

        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Adaptability</h2>
          <p>
            Capable of quickly learning new tools and techniques, staying updated with the latest
            design trends and technologies to keep work fresh and contemporary.</p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem-Solving</h2>
          <p>
            Proactively identifies and resolves design issues, finding creative solutions to meet
            project requirements and client expectations.</p>
          <button></button>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
