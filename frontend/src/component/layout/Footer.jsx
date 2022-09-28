import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Gets burg</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @getsburg</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/amangupta">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/amann.astic">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/codecraft26">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;