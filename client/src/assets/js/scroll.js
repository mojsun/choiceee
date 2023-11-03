export default function HandleScroll() {
  const leftToRightElements = document.querySelectorAll(".left-to-right");
  const rightToLeftElements = document.querySelectorAll(".right-to-left");

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      const index = parseInt(target.dataset.index, 10);

      if (isIntersecting) {
        if (target.classList.contains("left-to-right")) {
          target.classList.add(`left-to-right-${index}`);
        } else if (target.classList.contains("right-to-left")) {
          target.classList.add(`right-to-left-${index}`);
        }
      }
    });
  });

  leftToRightElements.forEach((element, index) => {
    element.dataset.index = index + 1; // Store the index as a data attribute
    observer.observe(element);
  });

  rightToLeftElements.forEach((element, index) => {
    element.dataset.index = index + 1; // Store the index as a data attribute
    observer.observe(element);
  });
}
