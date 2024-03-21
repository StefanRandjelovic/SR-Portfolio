// STYLES
import "@styles/Home.scss";

// SVG Assets
import SrCartoon from "@svg/Cartoonify.svg";

const Home = () => {
  return (
    <>
      <main>
        <img id="avatar" src={SrCartoon} alt="" />
        <div className="homeRight">
          <p>Well hello there,</p>
          <p>My name is Stefan</p>
          <p>And I like to create wonderful digital things like this.</p>
        </div>
      </main>
    </>
  );
};

export default Home;
