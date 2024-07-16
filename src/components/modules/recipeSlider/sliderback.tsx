import React, { Component } from "react";

class RecipeSlider extends Component {
  // Assuming you have similar methods for mouse events
  handleMouseDown = (e) => {
    // Your existing mouse down logic
  };

  handleMouseMove = (e) => {
    // Your existing mouse move logic
  };

  handleMouseUp = (e) => {
    // Your existing mouse up logic
  };

  // New touch event handlers
  handleTouchStart = (e) => {
    e.preventDefault(); // Prevents the default touch action to improve responsiveness
    this.handleMouseDown(e.touches[0]); // e.touches[0] contains the first touch point
  };

  handleTouchMove = (e) => {
    e.preventDefault(); // Consider preventing the default action to avoid scrolling/zooming
    this.handleMouseMove(e.touches[0]);
  };

  handleTouchEnd = (e) => {
    this.handleMouseUp(e.changedTouches[0]);
  };

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        {/* Your slider content */}
      </div>
    );
  }
}

export default RecipeSlider;

//  ppppppppppppppoeeeeeeeeeeeeee------------->>.
let startPos = 0;
let isDragging = false;
const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  startDragging(e);
};

const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  startDragging(e.touches[0]);
};

const startDragging = (
  e:
    | React.TouchEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  isDragging = true;
  if (e instanceof TouchEvent) {
    startPos = e.touches[0].clientX;
  } else {
    startPos = e.clientX;
  }
  if (slider) {
    slider.style.scrollBehavior = "auto";
    slider.classList.add("no-select");
  }
};
const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  if (isDragging) {
    // e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  }
};

const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (isDragging) {
    updateSliderPosition(e.clientX);
  }
};
const updateSliderPosition = (currentPos: number) => {
  const diff = currentPos - startPos;
  if (slider) slider.scrollLeft -= diff;
  startPos = currentPos;
};

const onMouseUp = () => {
  stopDragging();
};

const onTouchEnd = () => {
  stopDragging();
};

const stopDragging = () => {
  isDragging = false;
  if (slider) slider.style.scrollBehavior = "smooth";
  document.body.classList.remove("no-select");
};

const slideLeft = () => {
  if (slider) {
    slider.scrollLeft -=
      window.innerWidth < 480 ? 300 : window.innerWidth < 680 ? 350 : 500;
  }
};

const slideRight = () => {
  if (slider) {
    slider.scrollLeft +=
      window.innerWidth < 480 ? 300 : window.innerWidth < 680 ? 350 : 500;
  }
};
