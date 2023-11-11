const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});
const linkItems = document.querySelectorAll(".nav-tab");
const changeActiveItem = () => {
    linkItems.forEach((linkItem) => {
        linkItem.classList.remove("active");
    });
};

linkItems.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
        changeActiveItem();
        linkItem.classList.add("active");
    });
});