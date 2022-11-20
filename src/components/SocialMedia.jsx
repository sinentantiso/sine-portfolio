import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/sydneyntantiso">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://www.instagram.com/sydneyntantiso/">
               <BsInstagram />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/sydney-sinethemba-ntantiso-767648116/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:sinethemberntantiso@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;