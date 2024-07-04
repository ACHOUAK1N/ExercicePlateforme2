document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.addEventListener("DOMContentLoaded", () => {
      const colorBox = document.getElementById("color-box");
      const changeColorBtn = document.getElementById("change-color-btn");

      const getRandomColor = () => {
        return (
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
        );
      };

      changeColorBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor();
      });
    });

    return color;
  }

  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
