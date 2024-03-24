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

const handleOnlyCopy = (mail, elem) => {
  navigator.clipboard.writeText(mail);
  elem.style.opacity = "1";
  elem.style.visibility = "visible";
  setTimeout(() => {
    elem.style.opacity = "0";
    elem.style.visibility = "hidden";
  }, 2000);
};

export { handleCopyText, handleOnlyCopy };
