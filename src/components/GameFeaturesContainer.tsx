import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import styles from "./GameFeaturesContainer.module.css";

const GameFeaturesContainer: FunctionComponent = () => {
  return (
    <div className={styles.features}>
      <div className={styles.features1}>
        <div className={styles.sectionTitle}>
          <div className={styles.column}>
            <b className={styles.heading}>Game Features</b>
          </div>
        </div>
        <div className={styles.content}>
          <CardContainer
            description="/vector.svg"
            gameImageUrl="Multi-Chain Mayhem"
            gameDescription="Play and wager using $OMNI from various chains, bringing a unique, chain-agnostic gaming experience."
            gameTitle="/gameiconsswordclash.svg"
            gameDimensions="Dynamic Matchmaking"
            gameInstructions="Enter death matches with casual $10 skirmishes to high-stakes $100 battles. Your risk, your reward."
            gameDimensionsImageUrl="/gameiconsabstract053.svg"
            arenaDescription="Diverse Arenas"
            multiChainDescription="Battle across multiple chains, each offering unique advantages and challenges."
          />
          <CardContainer
            description="/gameiconslaurelcrown.svg"
            gameImageUrl="Winner takes all"
            gameDescription="Triumph in battles and reap the rewards. Top players in each match take all winnings in every heart-pounding matchup."
            gameTitle="/gameiconscrownedskull.svg"
            gameDimensions="Leaderboard Legends"
            gameInstructions="Rise in the ranks based on skill to become an Omni Royale legend and bask in the glory and spoils of Omni Royale."
            gameDimensionsImageUrl="/gameiconsdropweapon.svg"
            arenaDescription="Omniwars Arsenal"
            multiChainDescription="Harness unique, chain-specific armaments and artifacts to outsmart and outlast adversaries."
            propBackgroundImage="url('/column3@3x.png')"
            propWidth="60px"
            propOverflow="hidden"
            propBackgroundImage1="url('/column4@3x.png')"
            propBackgroundImage2="url('/column5@3x.png')"
          />
        </div>
      </div>
    </div>
  );
};

export default GameFeaturesContainer;
