import React, { FunctionComponent } from "react";
import styles from "./HomepageContainer.module.css";

const HomepageContainer: FunctionComponent = () => {
  return (
    <div className={styles.backgroundVideo}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/public/o.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <div className={styles.homepage}>
          <div className={styles.homepage1}>
            <div className={styles.homepageInner}>
              <div className={styles.frameParent}>
                <div className={styles.enterTheOmniverseConquerThParent}>
                  <b className={styles.enterTheOmniverseContainer}>
                    <p className={styles.enterTheOmniverse}>Enter the Omniverse</p>
                    <p className={styles.enterTheOmniverse}>Conquer the Chains</p>
                  </b>
                  <div className={styles.poweredByOmni}>Powered by $OMNI</div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.headingWrapper}>
                      <b className={styles.heading}>Play Now</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContainer;
