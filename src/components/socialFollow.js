import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import socialStyles from './social.module.scss';
import {Button} from '@material-ui/core';

export default function SocialFollow() {
  return (
  <div>
    <Button href="https://material-ui.com/api/button-base/">Let's email!</Button>
  
    <div className={socialStyles.container}>
      <a
        target="_blank"
        href="https://www.facebook.com/Altgrind-311652639710532/?device_id=4247a2b2-7421-4750-99f4-23b37e74efa3"
        className={[socialStyles.facebook, socialStyles.social].join(" ")}
        //className={[this.state.className, this.props.content.divClassName].join(" ")
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a 
        target="_blank"
        href="https://twitter.com/altgrind" className={[socialStyles.twitter, socialStyles.social].join(" ")}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/altgrind/"
        className={[socialStyles.instagram, socialStyles.social].join(" ")}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
    </div>
  );
}