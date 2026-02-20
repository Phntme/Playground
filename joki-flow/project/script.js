const newOrder = document.getElementById("new-order"),
  closeBtn = document.getElementById("close"),
  newOrderPage = document.getElementById("new-order-page"),
  form = document.getElementById("order-form"),
  klien = document.getElementById("klien"),
  dropBtn = document.querySelectorAll(".judul_dropdown"),
  dropIcon = document.getElementById("drop-icon"),
  dropList = document.getElementById("drop-list"),
  dropItem = document.querySelectorAll(".drop-item"),
  startDate = document.getElementById("start-date"),
  deadlineDate = document.getElementById("deadline-date"),
  statusPlaceholder = document.getElementById("status-placeholder"),
  packagePlaceholder = document.getElementById("package-placeholder"),
  table = document.getElementById("order-list");

// user data
const userPackage = document.getElementById("user-package"),
  userStatus = document.getElementById("user-status");

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
    const user = container.querySelector(".user");

    textArea.textContent = item.textContent;
    user.value = item.textContent.trim();

    textArea.classList.remove("opacity-75");
  });
});

// validasi deadline agar tidak bisa lebih awal dari tanggal mulai
startDate.addEventListener("change", () => {
  if (startDate) {
    deadlineDate.min = startDate.value;

    if (deadlineDate.value && deadlineDate.value < startDate.value) {
      deadlineDate.value = "";
      const errMsg = `Ups, tanggal deadline harus lebih maju dari ${startDate.value} ya`;
      alert(errMsg);
    }
  }
});

// btn submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    klien: klien.value,
    package: userPackage.value,
    status: userStatus.value,
    start: startDate.value,
    deadline: deadlineDate.value,
    price: price.value,
  };

  const isValid = Object.values(data).every((items) => items.trim() !== "");

  if (!isValid) {
    alert("salah satu form ada yang belum diisi");
    return;
  }
  console.log(data);

  // masukin ke table

  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  tableRow.innerHTML = `<tr>
              <td class="py-3 px-5 whitespace-nowrap">
                <div class="font-medium">${data.klien}</div>
                <div class="text-slate-500 text-sm">Deadline: ${data.deadline}</div>
              </td>
              <td class="py-3 px-5 whitespace-nowrap">${data.package}</td>
              <td class="py-3 px-5 whitespace-nowrap">100.000</td>
              <td class="py-3 px-5 whitespace-nowrap">
                <span
                  class="px-2 py-1 bg-blue-200 text-blue-600 text-xs font-medium rounded-full"
                  >${data.status}</span
                >
              </td>
              <td class="py-3 px-5 whitespace-nowrap">
                <a href="#" class="mr-5 text-indigo-500">Edit</a>
                <button class="text-emerald-500">Done</button>
              </td>
            </tr>`;

  // reset data
  klien.value = "";
  userPackage.value = "";
  userStatus.value = "";
  startDate.value = "";
  deadlineDate.value = "";
  packagePlaceholder.textContent = "Pilih Paket Anda";
  statusPlaceholder.textContent = "Pilih Status Pesanan Anda";

  closeBtn.click();
});
