import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
      <h1>Follow us on socials</h1>
      <p className="social-container">
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        &nbsp;
        &nbsp;
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        &nbsp;
        &nbsp;
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        &nbsp;
        &nbsp;
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </p>
    </div>
  );
}