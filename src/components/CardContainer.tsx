import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  description?: string;
  gameImageUrl?: string;
  gameDescription?: string;
  gameTitle?: string;
  gameDimensions?: string;
  gameInstructions?: string;
  gameDimensionsImageUrl?: string;
  arenaDescription?: string;
  multiChainDescription?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
  propOverflow?: CSSProperties["overflow"];
  propBackgroundImage1?: CSSProperties["backgroundImage"];
  propBackgroundImage2?: CSSProperties["backgroundImage"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  description,
  gameImageUrl,
  gameDescription,
  gameTitle,
  gameDimensions,
  gameInstructions,
  gameDimensionsImageUrl,
  arenaDescription,
  multiChainDescription,
  propBackgroundImage,
  propWidth,
  propOverflow,
  propBackgroundImage1,
  propBackgroundImage2,
}) => {
  const columnStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      overflow: propOverflow,
    };
  }, [propWidth, propOverflow]);

  const column1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const column2Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage2,
    };
  }, [propBackgroundImage2]);

  return (
    <div className={styles.row}>
      <div className={styles.column} style={columnStyle}>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              alt=""
              src={description}
              style={vectorIconStyle}
            />
            <b className={styles.heading}>{gameImageUrl}</b>
          </div>
          <div className={styles.text}>{gameDescription}</div>
        </div>
      </div>
      <div className={styles.column1} style={column1Style}>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.gameIconsswordClash}
              alt=""
              src={gameTitle}
            />
            <b className={styles.heading1}>{gameDimensions}</b>
          </div>
          <div className={styles.text}>{gameInstructions}</div>
        </div>
      </div>
      <div className={styles.column2} style={column2Style}>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.gameIconsswordClash}
              alt=""
              src={gameDimensionsImageUrl}
            />
            <b className={styles.heading1}>{arenaDescription}</b>
          </div>
          <div className={styles.text}>
            <p className={styles.battleAcrossMultiple}>
              {multiChainDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
