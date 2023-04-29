const asideList = document.querySelectorAll(".aside-list");
const menuIcon = document.querySelector(".menu-icon");
const asideMenu = document.querySelector("aside");
const closeMenu = document.querySelector(".close-aside");

const toggleMenu = () => {
  asideMenu.classList.toggle("active");
  document.body.style.overflow = asideMenu.classList.contains("active")
    ? "hidden"
    : "scroll";
};

menuIcon.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

asideList.forEach((dropLink) => {
  const linkList = dropLink.nextElementSibling;
  dropLink.addEventListener("click", () => {
    const activeLinkList = document.querySelector(".links-list.active");
    if (activeLinkList !== linkList) {
      activeLinkList?.classList.remove("active");
    }
    linkList.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  asideMenu.style.transition = "transform 0.3s ease-out";
});
