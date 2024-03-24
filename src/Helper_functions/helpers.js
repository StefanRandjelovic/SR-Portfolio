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
    document.documentElement.style.backgroundImage =
      "url(/src/Images/backgroundDark.png)";
  } else {
    document.documentElement.style.backgroundImage =
      "url(/src/Images/background.png)";
  }
};

export { handleCopyText, handleOnlyCopy, darkBackground };
