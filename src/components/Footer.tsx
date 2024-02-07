import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  group981?: string;

  /** Style props */
  footerAlignSelf?: CSSProperties["alignSelf"];
  footerWidth?: CSSProperties["width"];
  footerAlignSelf1?: CSSProperties["alignSelf"];
};

const Footer: FunctionComponent<FooterType> = ({
  group981,
  footerAlignSelf,
  footerWidth,
  footerAlignSelf1,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: footerAlignSelf,
    };
  }, [footerAlignSelf]);

  const footer1Style: CSSProperties = useMemo(() => {
    return {
      width: footerWidth,
      alignSelf: footerAlignSelf1,
    };
  }, [footerWidth, footerAlignSelf1]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footer1} style={footer1Style}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.group981Parent}>
              <img className={styles.group981} alt="" src={group981} />
              <b className={styles.stakeYourClaimContainer}>
                <p className={styles.stakeYourClaim}>Stake Your Claim in</p>
                <p className={styles.stakeYourClaim}> the Omniverse!</p>
              </b>
              <div className={styles.frameGroup}>
                <div className={styles.headingWrapper}>
                  <b className={styles.heading}>Join Telegram</b>
                </div>
                <div className={styles.headingWrapper}>
                  <b className={styles.heading1}>follow on X</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.credits}>
            <div className={styles.divider} />
            <div className={styles.row}>
              <div className={styles.text}>
                © 2023 Omniroyale. All rights reserved.
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.link}>Privacy Policy</div>
                <div className={styles.link}>Terms of Service</div>
                <div className={styles.link}>Cookies Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
