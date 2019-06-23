var title = document.getElementById("title");
title.addEventListener("mouseenter", function () {
    title.style.textTransform = "uppercase";
});

title.addEventListener("mouseleave", function () {
    title.style.textTransform = "unset";
});