document.addEventListener("DOMContentLoaded", function () {
  const quantityPlusButtons = document.querySelectorAll(".fas.fa-plus-circle");
  const quantityMinusButtons = document.querySelectorAll(
    ".fas.fa-minus-circle"
  );
  const deleteButtons = document.querySelectorAll(".fas.fa-trash-alt");
  const likeButtons = document.querySelectorAll(".fas.fa-heart");
  const totalPriceElement = document.querySelector(".total");

  let totalPrice = 0;

  // Function to update total price
  function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll(".card-body").forEach((card) => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const unitPrice = parseInt(card.querySelector(".unit-price").textContent);
      total += quantity * unitPrice;
    });
    totalPrice = total;
    totalPriceElement.textContent = total + " $";
  }

  // Event listeners for quantity adjustment
  quantityPlusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    });
  });

  quantityMinusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    });
  });

  // Event listeners for deleting item
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardBody = button.closest(".card-body");
      const quantityElement = cardBody.querySelector(".quantity");
      const unitPrice = parseInt(
        cardBody.querySelector(".unit-price").textContent
      );

      totalPrice -= parseInt(quantityElement.textContent) * unitPrice;
      quantityElement.textContent = 0;
      updateTotalPrice();
    });
  });

  // Event listener for liking item
  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.toggle("liked");
      if (button.classList.contains("liked")) {
        button.style.color = "red"; // Liked color
      } else {
        button.style.color = "black"; // Reset color
      }
    });
  });
});
