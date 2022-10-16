import React from "react";
import { motion } from "framer-motion";
import "./founder.scss"
import me from "./me.jpeg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
      <img src={me} alt="Founder" height={200} width={200} />
        <h3>Aman Kumar Gupta</h3>

        <p>
          Hey, Everyone I am Aman Kumar Gupta, A passionate full stack developer from india .
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;