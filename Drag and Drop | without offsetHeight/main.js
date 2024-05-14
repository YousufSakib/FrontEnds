const masterContainer = document.querySelectorAll(".masterContainer ul");
const leftCon = document.querySelector(".leftList");
const rightCon = document.querySelector(".rightList");
let fromContainer;
let draggingItem;
// console.log(
//     "leftCon: \n",
//     leftCon.offsetHeight,
//     leftCon.offsetWidth,
//     leftCon.offsetParent,
//     leftCon.offsetTop,
//     leftCon.offsetLeft,
// );
// console.log(
//     "leftCon: \n",
//     rightCon.offsetHeight,
//     rightCon.offsetWidth,
//     rightCon.offsetParent,
//     rightCon.offsetTop,
//     rightCon.offsetLeft,
// );
const a = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    masterContainer.forEach((container) => {
        if (
            x > container.offsetLeft &&
            x < container.offsetLeft + container.offsetWidth &&
            y > container.offsetTop &&
            y < container.offsetTop + container.offsetHeight
        ) {
            // console.log(fromContainer);
            if (fromContainer !== container) {
                // fromContainer.removeChild(draggingItem);
                container.appendChild(draggingItem);
            }
        }
    });
    draggingItem.classList.remove("dragging");
};

masterContainer.forEach((container) => {
    const listItem = container.querySelectorAll(".listItem");
    listItem.forEach((item) => {
        item.addEventListener("dragstart", () => {
            item.classList.add("dragging");
            fromContainer = item.parentElement;
            draggingItem = item;
        });
        item.addEventListener("dragend", (e) => a(e));
    });
});
