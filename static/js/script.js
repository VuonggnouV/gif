function startAnimation() {
  const box = document.getElementById("gift-box");
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  // Đổi ảnh hộp quà mở nắp
  box.src = "/static/img/box_open.png";

  // Hiện hai hình và bay lên
  img1.classList.remove("hidden", "fly-in");
  img2.classList.remove("hidden", "fly-in");

  img1.classList.add("show", "fly-up");
  img2.classList.add("show", "fly-up");

  // Sau 1 giây bay vào gần nhau
  setTimeout(() => {
    img1.classList.remove("fly-up");
    img2.classList.remove("fly-up");

    img1.classList.add("fly-in");
    img2.classList.add("fly-in");
  }, 1000);
}
