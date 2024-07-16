const checkSliderPosition = () => {
  const slider = sliderRef.current;
  if (slider) {
    const isStart = slider.scrollLeft === 0;
    const isEnd = slider.scrollWidth === slider.clientWidth + slider.scrollLeft;
    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  }
};

//  for automatic slide
useEffect(() => {
  const interval = setInterval(() => {
    if (!isHovering) {
      slideAutomatically();
    }
  }, 1500); // Slide every second

  return () => clearInterval(interval);
}, [isHovering, isAtEnd]);

//  for automatic slide
const slideAutomatically = () => {
  const slider = sliderRef.current;
  if (slider) {
    if (isAtEnd) {
      slider.scrollLeft = 0; // Reset to start
    } else {
      slider.scrollLeft += 500; // Adjust the value as needed
    }
  }
};
useEffect(() => {
  const slider = sliderRef.current;
  if (slider) {
    slider.addEventListener("scroll", checkSliderPosition);
    // Initial check in case the slider is already at the end when the component mounts
    checkSliderPosition();
    return () => slider.removeEventListener("scroll", checkSliderPosition);
  }
}, []);

let startPos = 0;
let isDragging = false;

const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  isDragging = true;
  startPos = e.clientX; // For touch events, use `e.touches[0].clientX`
  if (slider) {
    slider.style.scrollBehavior = "auto";
    slider.classList.add("no-select");
  } // Disable text selection
  e.preventDefault(); // Prevent default behavior like text selection
};

const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (isDragging) {
    const currentPos = e.clientX;
    const diff = currentPos - startPos;

    if (slider) slider.scrollLeft -= diff;
    startPos = currentPos;
  }
};

const onMouseUp = () => {
  isDragging = false;
  if (slider) slider.style.scrollBehavior = "smooth";
  document.body.classList.remove("no-select"); // Re-enable text selection
};
// const onDragStart = (e) => {
//   e.preventDefault(); // This prevents the image from being dragged
// };
const slideLeft = () => {
  if (slider)
    slider.scrollLeft =
      slider.scrollLeft -
      ((window.innerWidth < 480 && 300) ||
        (window.innerWidth < 680 && 350) ||
        500);
};

const slideRight = () => {
  if (slider)
    slider.scrollLeft =
      slider.scrollLeft +
      ((window.innerWidth < 480 && 300) ||
        (window.innerWidth < 680 && 350) ||
        500);
};
