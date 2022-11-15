const playbtn = document.querySelector(".playbtn");
const contentContainer = document.querySelector(".vdoContainer");
const state = document.querySelector(".vdo-state-photo");
const newContainer = document.createElement("div");
/* - */

 /* center video section replacement: */
playbtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    newContainer.classList.add("newVdoContainer");
    newContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/f7ATiPTeejo?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>';
    contentContainer.insertAdjacentElement("beforeend", newContainer);
    /* X - appendChild */
    newContainer.style.margin = "5rem auto 5rem auto";
    state.classList.remove("vdo-state-photo");
    state.classList.add("vdo-state-play");
});

/* ------------------------------------------- */

/* center video section replacement by clicking img: */

const recommandImgAll = document.querySelectorAll(".recommandVDO");
const layerAll = document.querySelectorAll(".layer");

recommandImgAll.forEach((recommandImg) => {
    recommandImg.addEventListener("click", clickEffect = () => {

        if (recommandImg.classList.contains("recommandVDO_1")) {
            contentContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/kVxTrhojpFI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (recommandImg.classList.contains("recommandVDO_2")) {
            contentContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/Bxo2JkiqG_o?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (recommandImg.classList.contains("recommandVDO_3")) {
            contentContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/zleIaEIBs2M?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    })
})

/* center video section replacement by clicking play img(triangle svg): */

layerAll.forEach((layer) => {
    layer.addEventListener("click", () => {

        if (layer.classList.contains("layer1")) {
            console.log(layer);
            contentContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/kVxTrhojpFI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (layer.classList.contains("layer2")) {
            console.log(layer);
            contentContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/Bxo2JkiqG_o?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (layer.classList.contains("layer3")) {
            console.log(layer);
            contentContainer.innerHTML = '<iframe width="940" height="528" src="https://www.youtube-nocookie.com/embed/zleIaEIBs2M?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    })
})

/* ------------------------------------------- */

