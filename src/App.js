import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [preventClearAnimation, setPreventClearAnimation] = useState(false);

  useEffect(() => {
    colorOriginal();
    const intervalId = setInterval(rotateColors, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const colorOriginal = () => {
    const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector(".original").style.backgroundColor = randColor;
  };

  const splitOriginal = (event) => {
    const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    for (let i = 0; i < 4; i++) {
      const splitDiv = document.createElement("div");
      splitDiv.className = "split";
      splitDiv.style.backgroundColor = randColor;
      event.target.appendChild(splitDiv);
    }
  };

  const handleMouseOver = (event) => {
    if (event.target.classList.contains("split")) {
      const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      for (let i = 0; i < 4; i++) {
        const splitDiv = document.createElement("div");
        splitDiv.className = "split";
        splitDiv.style.backgroundColor = randColor;
        event.target.appendChild(splitDiv);
      }
    }
  };

  const eraseBoard = () => {
    const element = document.getElementById("about");
    const elementPosition = element.offsetTop;
    const screenHeight = window.innerHeight;
    const activationOffset = 0.4;
    const activationPoint = elementPosition - screenHeight * activationOffset;
    const maxScrollHeight = document.body.offsetHeight - screenHeight - 5;

    window.addEventListener("scroll", () => {
      const yScrollPos = window.pageYOffset;
      const elementInView = yScrollPos > activationPoint;
      const hasReachedBottomOfPage =
      maxScrollHeight <= yScrollPos && !elementInView;

      if (elementInView || hasReachedBottomOfPage) {
        document.querySelectorAll(".split").forEach((splitDiv) => {
          splitDiv.style.opacity = 0;
          setTimeout(() => {
            splitDiv.remove();
          }, 1000);
        });
      }
    });
  };

  const rotateColors = () => {
    const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector(".original").style.backgroundColor = randColor;
  };

  useEffect(() => {
    document
      .querySelector(".original")
      .addEventListener("mouseover", splitOriginal);
    document.addEventListener("mouseover", handleMouseOver);
    eraseBoard();
  }, []);

  return (
    <div className="App">
      <div className="original"></div>
      <div id="about">
      </div>
    </div>
  );
}

export default App;
