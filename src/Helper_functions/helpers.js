// TEXT COPYING AND LINKING - Contact.jsx
const handleCopyText = (event, link, elem) => {
  if (!event.ctrlKey) {
    navigator.clipboard.writeText(link);
    elem.style.opacity = "1";
    elem.style.visibility = "visible";
    setTimeout(() => {
      elem.style.opacity = "0";
      elem.style.visibility = "hidden";
    }, 2000);
  }
  if (event.ctrlKey) {
    window.open(link, "_blank");
  }
};

// TEXT COPYING - Contact.jsx
const handleOnlyCopy = (mail, elem) => {
  navigator.clipboard.writeText(mail);
  elem.style.opacity = "1";
  elem.style.visibility = "visible";
  setTimeout(() => {
    elem.style.opacity = "0";
    elem.style.visibility = "hidden";
  }, 2000);
};

// BACKGROUND IMG CHANGER - NavBar.jsx
const darkBackground = (darkModeState) => {
  if (darkModeState) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// GET IMG
const getImgH = (img) => {
  switch (img) {
    case "React JS":
      return "/src/Svg/react.svg";
    case "JavaScript":
      return "/src/Svg/js.svg";
    case "HTML5":
      return "/src/Svg/html.svg";
    case "CSS3":
      return "/src/Svg/css.svg";
    case "SCSS":
      return "/src/Svg/sass.svg";
    case "Canva":
      return "/src/Svg/canva.svg";
    case "Photoshop":
      return "/src/Svg/photoshop.svg";
    case "SEO":
      return "/src/Svg/seo.svg";
  }
};

const getImgS = (img) => {
  switch (img) {
    case "Communicative":
    case "Komunikativan":
      return "/src/Svg/communication.svg";
    case "Team player":
    case "Timski igrač":
      return "/src/Svg/team.svg";
    case "Problem solver":
    case "Rešavanje problema":
      return "/src/Svg/problem-solver.svg";
    case "Willing to learn and improve":
    case "Voljan da uči i usavršava se":
      return "/src/Svg/learn.svg";
    case "Creative":
    case "Kreativan":
      return "/src/Svg/butterfly.svg";
  }
};

const handlePicChangeDecrease = (counter, setCounter, linkLenght) => {
  if (counter === 0) {
    setCounter(linkLenght);
  } else {
    setCounter((prev) => prev - 1);
  }
};

const handlePicChangeIncrease = (counter, setCounter, linkLenght) => {
  if (counter < linkLenght) {
    setCounter((prev) => prev + 1);
  } else {
    setCounter(0);
  }
};

const handleImgChange = (
  counter,
  mark,
  logo,
  logo1,
  work,
  scal,
  por1,
  por2,
  por3,
  por4
) => {
  switch (counter) {
    case 0:
      return mark;
    case 1:
      return logo;
    case 2:
      return logo1;
    case 3:
      return work;
    case 4:
      return scal;
    case 5:
      return por1;
    case 6:
      return por2;
    case 7:
      return por3;
    case 8:
      return por4;
  }
};

export {
  handleCopyText,
  handleOnlyCopy,
  darkBackground,
  getImgH,
  getImgS,
  handlePicChangeDecrease,
  handlePicChangeIncrease,
  handleImgChange,
};
