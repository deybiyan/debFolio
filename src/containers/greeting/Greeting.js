import React, {useContext, useEffect} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import blackDp from "../../assets/images/blackdp.png";
import whiteDp from "../../assets/images/whitedp.png";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    // Preload both theme images so toggling does not wait on image decode/load.
    [blackDp, whiteDp].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <div
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                <p>{greeting.subTitle}</p>
                <p>{greeting.subtext}</p>
              </div>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div
                className={
                  isDark
                    ? "dark-mode button-greeting-div"
                    : "button-greeting-div"
                }
              >
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="Download my resume"
                    href={require("./DMO_CV_2026.pdf")}
                    download="Resume.pdf"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <>
                {isDark ? (
                  <img alt="profile portrait" src={blackDp} loading="eager" />
                ) : (
                  <img alt="profile portrait" src={whiteDp} loading="eager" />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
