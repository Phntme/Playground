const newOrder = document.getElementById("new-order"),
  closeBtn = document.getElementById("close"),
  newOrderPage = document.getElementById("new-order-page"),
  dropBtn = document.querySelectorAll(".judul_dropdown"),
  dropIcon = document.getElementById("drop-icon"),
  dropList = document.getElementById("drop-list"),
  dropItem = document.querySelectorAll(".drop-item");

// ketika tombol plus di-klik, maka akan muncul window form untuk diisi informasi akun klien
newOrder.addEventListener("click", () => {
  newOrderPage.classList.add("opacity-100");
  newOrderPage.classList.remove("pointer-events-none");
  newOrderPage.classList.add("pointer-events-auto");
  newOrder.classList.add("opacity-0");

  closeBtn.classList.add("opacity-100");
  closeBtn.classList.remove("pointer-events-none");
  closeBtn.classList.add("pointer-events-auto");
});

// ketika tombol silang di-klik, maka akan menutup window form
closeBtn.addEventListener("click", () => {
  newOrderPage.classList.remove("opacity-100");
  newOrderPage.classList.add("pointer-events-none");
  newOrderPage.classList.remove("pointer-events-auto");

  closeBtn.classList.remove("opacity-100");
  closeBtn.classList.add("pointer-events-none");
  closeBtn.classList.remove("pointer-events-auto");
  newOrder.classList.remove("opacity-0");
});

// development purpose(window langsung terbuka ketika page ini di-load)
newOrder.click();

// untuk setiap tombol drop pada dropdown custom, ketika diklik akan memunculkan menu dropdown-nya
dropBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    const container = btn.closest(".paket-container");

    const list = container.querySelector(".drop-list");
    const icon = container.querySelector(".drop-icon");
    icon.classList.toggle("rotate-180");
    list.classList.toggle("opacity-0");
    list.classList.toggle("translate-y-0");
    list.classList.toggle("pointer-events-none");
    list.classList.toggle("z-50");
  }),
);

// untuk setiap list item pada dropdown custom, ketika diklik akan mengubah value pada custom dropdown
dropItem.forEach((item) => {
  item.addEventListener("click", () => {
    const container = item.closest(".paket-container");

    const textArea = container.querySelector(".selected-text");

    textArea.textContent = item.textContent;

    textArea.classList.remove("opacity-75");
  });
});

// dev area
