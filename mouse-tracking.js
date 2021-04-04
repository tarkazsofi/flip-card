const front = document.querySelector(".front");
const back = document.querySelector(".back");

document.addEventListener("mousemove", (event) => {
  const rotationRatio = event.clientX / window.innerWidth;
  const rotationDegree = rotationRatio * 360;
  front.style.transform = `rotateY(${rotationDegree - 180}deg)`;
  back.style.transform = `rotateY(${rotationDegree}deg)`;
});
