// STYLES
import "@styles/Gallery.scss";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

// INFO
import { links, srbInfo, engInfo } from "@info/info-array";

// GSVariable
import { languageChange, darkMode } from "@global/store.js";

// HELPER FUNCTIONS
import {
  handlePicChangeDecrease,
  handlePicChangeIncrease,
} from "@helpers/helpers";

// SVG ASSET
import Arrow from "@svg/arrow.svg";

const Gallery = () => {
  // GSVariable
  const langChange = useAtomValue(languageChange);
  const darkModeState = useAtomValue(darkMode);

  // INFO VARIABLE
  const linkLenght = links.link.length - 1;

  // STATE VARIABLE
  let [counter, setCounter] = useState(0);
  const [key, setKey] = useState(0);

  return (
    <>
      <main className={darkModeState ? "darkG" : null} id="gallery">
        <div>
          <h1>{langChange ? engInfo.gallery.name : srbInfo.gallery.name}</h1>
          <p>
            {langChange
              ? engInfo.gallery.description
              : srbInfo.gallery.description}
          </p>
        </div>
        <section>
          <button
            id="back"
            onClick={() => {
              handlePicChangeDecrease(counter, setCounter, linkLenght);
              setKey((prev) => prev - 1);
            }}
            title={langChange ? "Back" : "Nazad"}
          >
            <img src={Arrow} alt="back" />
          </button>
          <img
            key={key}
            className="centralImage"
            src={links.link[counter]}
            alt={
              langChange ? links.descr.eng[counter] : links.descr.srb[counter]
            }
            title={
              langChange ? links.descr.eng[counter] : links.descr.srb[counter]
            }
          />
          <button
            id="forward"
            onClick={() => {
              handlePicChangeIncrease(counter, setCounter, linkLenght);
              setKey((prev) => prev + 1);
            }}
            title={langChange ? "Forward" : "Napred"}
          >
            <img src={Arrow} alt="fwd" />
          </button>
        </section>
      </main>
    </>
  );
};

export default Gallery;
