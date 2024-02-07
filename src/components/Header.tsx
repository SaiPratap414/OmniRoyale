import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar1}>
        <div className={styles.navbar2}>
          <div className={styles.container}>
            <div className={styles.group981Parent}>
              <img
                className={styles.group981}
                alt=""
                src="/group-98-1@2x.png"
              />
              <div className={styles.columnWrapper}>
                <div className={styles.column}>
                  <div className={styles.column1}>
                    <div className={styles.link}>About</div>
                    <div className={styles.link}>Features</div>
                    <div className={styles.link}>How to Play</div>
                    <div className={styles.link}>Docs</div>
                  </div>
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.mingcutetelegramFillParent}>
                  <img
                    className={styles.mingcutetelegramFillIcon}
                    alt=""
                    src="/mingcutetelegramfill.svg"
                  />
                  <img
                    className={styles.mingcutetelegramFillIcon}
                    alt=""
                    src="/ritwitterxfill.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
