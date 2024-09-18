// STYLES
import "@styles/Gallery.scss";

// DEV DEPENDENCIES
import { useAtomValue } from "jotai";
import { useState } from "react";

// INFO
import { links } from "@info/info-array";

// GSVariable
import { languageChange } from "@global/store.js";

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

  const linkLenght = links.link.length - 1;
  let [counter, setCounter] = useState(0);

  return (
    <>
      <main id="gallery">
        <section>
          <button
            id="back"
            onClick={() =>
              handlePicChangeDecrease(counter, setCounter, linkLenght)
            }
          >
            <img src={Arrow} alt="back" />
          </button>
          <img src={links.link[counter]} alt="" />
          <button
            id="forward"
            onClick={() =>
              handlePicChangeIncrease(counter, setCounter, linkLenght)
            }
          >
            <img src={Arrow} alt="fwd" />
          </button>
        </section>
      </main>
    </>
  );
};

export default Gallery;
