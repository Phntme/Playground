const newOrder = document.getElementById("new-order");
const closeBtn = document.getElementById("close");
const newOrderPage = document.getElementById("new-order-page");

newOrder.addEventListener("click", () => {
  console.log("hello");
  newOrderPage.classList.add("opacity-100");
  newOrderPage.classList.remove("pointer-events-none");
  newOrderPage.classList.add("pointer-events-auto");

  closeBtn.classList.add("opacity-100");
  closeBtn.classList.remove("pointer-events-none");
  closeBtn.classList.add("pointer-events-auto");
});

closeBtn.addEventListener("click", () => {});
