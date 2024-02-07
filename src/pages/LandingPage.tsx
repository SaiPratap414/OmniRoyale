import { FunctionComponent } from "react";
import Header from "../components/Header";
import HomepageContainer from "../components/HomepageContainer";
import AboutContainer from "../components/AboutContainer";
import GameFeaturesContainer from "../components/GameFeaturesContainer";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <HomepageContainer />
      <AboutContainer />
      <GameFeaturesContainer />
      <div className={styles.howToPlay}>
        <div className={styles.howToPlay1}>
          <div className={styles.content}>
            <div className={styles.sectionTitle}>
              <div className={styles.tagline}>Tagline</div>
              <div className={styles.content1}>
                <b className={styles.howToPlay2}>How to Play</b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.headingWrapper}>
                  <b className={styles.heading}>Step 1</b>
                </div>
              </div>
              <div className={styles.text}>
                Connect your crypto wallet and deposit $OMNI tokens.
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.headingWrapper}>
                  <b className={styles.heading}>Step 2</b>
                </div>
              </div>
              <div className={styles.text}>
                Choose your match and wager amount.
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.headingWrapper}>
                  <b className={styles.heading}>Step 3</b>
                </div>
              </div>
              <div className={styles.text}>
                Engage in fast-paced, strategic gameplay and outmaneuver your
                opponents.
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.headingWrapper}>
                  <b className={styles.heading}>Step 4</b>
                </div>
              </div>
              <div className={styles.text}>
                Win and claim your $OMNI earnings.
              </div>
            </div>
          </div>
          <div className={styles.howToPlayInner}>
            <div className={styles.frameWrapper3}>
              <div className={styles.headingWrapper2}>
                <b className={styles.heading4}>Play Now</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        group981="/group-98-1@2x.png"
        footerAlignSelf="stretch"
        footerWidth="unset"
        footerAlignSelf1="stretch"
      />
    </div>
  );
};

export default LandingPage;
