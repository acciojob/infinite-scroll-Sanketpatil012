document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("infi-list");

    // Function to add new list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    // Add initial 10 items
    addItems(10);

    // Infinite Scroll Logic
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addItems(2); // Add 2 new items when scrolled to bottom
        }
    });
});

