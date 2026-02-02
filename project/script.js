const newOrder = document.getElementById("new-order"),
  closeBtn = document.getElementById("close"),
  newOrderPage = document.getElementById("new-order-page"),
  package = document.getElementById("package-choice"),
  dropBtn = document.getElementById("drop-btn"),
  dropIcon = document.getElementById("drop-icon"),
  dropList = document.getElementById("drop-list"),
  dropItem = document.querySelectorAll(".drop-item");

newOrder.addEventListener("click", () => {
  newOrderPage.classList.add("opacity-100");
  newOrderPage.classList.remove("pointer-events-none");
  newOrderPage.classList.add("pointer-events-auto");
  newOrder.classList.add("opacity-0");

  closeBtn.classList.add("opacity-100");
  closeBtn.classList.remove("pointer-events-none");
  closeBtn.classList.add("pointer-events-auto");
});

closeBtn.addEventListener("click", () => {
  newOrderPage.classList.remove("opacity-100");
  newOrderPage.classList.add("pointer-events-none");
  newOrderPage.classList.remove("pointer-events-auto");

  closeBtn.classList.remove("opacity-100");
  closeBtn.classList.add("pointer-events-none");
  closeBtn.classList.remove("pointer-events-auto");
  newOrder.classList.remove("opacity-0");
});

newOrder.click();

dropBtn.addEventListener("click", () => {
  dropIcon.classList.toggle("rotate-180");
  dropList.classList.toggle("opacity-0");
  dropList.classList.toggle("translate-y-0");
  dropList.classList.toggle("pointer-events-none");
});

dropItem.forEach((item) => {
  item.addEventListener("click", () => {
    package.textContent = item.textContent;
  });
});
