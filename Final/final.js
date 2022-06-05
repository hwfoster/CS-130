let currentIndexTops = 0;

const topsimages = [
    "images/tops/blacktank.png",
    "images/tops/browntank.png",
    "images/tops/coorsshirt.png",
    "images/tops/dareshirt.png",
    "images/tops/blackcrop.png",
    "images/tops/grayhoodie.png",
    "images/tops/pinkcrop.png",
    "images/tops/nikesweater.png",
    "images/tops/whitecrop.png",
    "images/tops/whitetank.png" // 9
];

let currentIndexBottoms = 0;

const bottomsimages = [
    "images/bottoms/bdgshort.png",
    "images/bottoms/blackshorts.png",
    "images/bottoms/gapsweatshorts.png",
    "images/bottoms/aeriesweatshorts.png",
    "images/bottoms/aejeans.png",
    "images/bottoms/afblackjeans.png",
    "images/bottoms/afdenimjeans.png",
    "images/bottoms/f21rippedjeans.png",
    "images/bottoms/madewellpants.png",
    "images/bottoms/nikeredsweatpants.png",
    "images/bottoms/gapsweatpants.png",
    "images/bottoms/brandysweats.png" // 11
];

let currentIndexShoes = 0;

const shoesimages = [
    "images/shoes/hokas.png",
    "images/shoes/chelseas.png",
    "images/shoes/nikes.png",
    "images/shoes/birks.png",
    "images/shoes/docs.png" // 4
];

const initScreen = () => {
    topsimages.forEach((topimage, idx) => {
        document.querySelector('.task-3 .menu').innerHTML += `
            <button class="topimage"
                onclick="handleThumbnailClick(event)"
                style="background-image:url('${topimage}')"
                data-index=${idx}"
                aria-label="Displays image of ${topimage} in the main panel.">
            </button>`;
    });
};

const initScreenB = () => {
    bottomsimages.forEach((bottomimage, idx) => {
        document.querySelector('.task-3 .menu').innerHTML += `
            <button class="bottomimage"
                onclick="handleThumbnailClickB(event)"
                style="background-image:url('${bottomimage}')"
                data-index=${idx}"
                aria-label="Displays image of ${bottomimage} in the main panel.">
            </button>`;
    });
};

const initScreenS = () => {
    shoesimages.forEach((shoeimage, idx) => {
        document.querySelector('.task-3 .menu').innerHTML += `
            <button class="shoeimage"
                onclick="handleThumbnailClickS(event)"
                style="background-image:url('${shoeimage}')"
                data-index=${idx}"
                aria-label="Displays image of ${shoeimage} in the main panel.">
            </button>`;
    });
};

const handleThumbnailClick = ev => {
    const elem = ev.currentTarget;
    console.log(elem);
    const bgImage = elem.style.backgroundImage;
    document.querySelector('.task-3 .tops').style.backgroundImage = bgImage;
    currentIndexTops = parseInt(elem.dataset.index);
    console.log(currentIndexTops);
}

const handleThumbnailClickB = ev => {
    const elem = ev.currentTarget;
    console.log(elem);
    const bgImage = elem.style.backgroundImage;
    document.querySelector('.task-3 .bottoms').style.backgroundImage = bgImage;
    currentIndexBottoms = parseInt(elem.dataset.index);
    console.log(currentIndexBottoms);
}

const handleThumbnailClickS = ev => {
    const elem = ev.currentTarget;
    console.log(elem);
    const bgImage = elem.style.backgroundImage;
    document.querySelector('.task-3 .shoes').style.backgroundImage = bgImage;
    currentIndexShoes = parseInt(elem.dataset.index);
    console.log(currentIndexShoes);
}

const previousTops = () => {
    if (currentIndexTops > 0) {
        currentIndexTops -= 1;
    } else {
        currentIndexTops = 9;
    }
    console.log('show previous image', currentIndexTops);
    console.log(topsimages[currentIndexTops]);
    document.querySelector('.task-3 .tops').style.backgroundImage = `
    url('${topsimages[currentIndexTops]}')`
};

const nextTops = () => {
    if (currentIndexTops < 9) {
        currentIndexTops += 1;
    } else {
        currentIndexTops = 0;
    }
    console.log('show next image', currentIndexTops);
    console.log(topsimages[currentIndexTops]);
    document.querySelector('.task-3 .tops').style.backgroundImage = `
    url('${topsimages[currentIndexTops]}')` 
};

const previousBottoms = () => {
    if (currentIndexBottoms > 0) {
        currentIndexBottoms -= 1;
    } else {
        currentIndexBottoms = 11;
    }
    console.log('show previous image', currentIndexBottoms);
    console.log(bottomsimages[currentIndexBottoms]);
    document.querySelector('.task-3 .bottoms').style.backgroundImage = `
    url('${bottomsimages[currentIndexBottoms]}')`
};

const nextBottoms = () => {
    if (currentIndexBottoms < 11) {
        currentIndexBottoms += 1;
    } else {
        currentIndexBottoms = 0;
    }
    console.log('show next image', currentIndexBottoms);
    console.log(bottomsimages[currentIndexBottoms]);
    document.querySelector('.task-3 .bottoms').style.backgroundImage = `
    url('${bottomsimages[currentIndexBottoms]}')` 
};

const previousShoes = () => {
    if (currentIndexShoes > 0) {
        currentIndexShoes -= 1;
    } else {
        currentIndexShoes = 4;
    }
    console.log('show previous image', currentIndexShoes);
    console.log(shoesimages[currentIndexShoes]);
    document.querySelector('.task-3 .shoes').style.backgroundImage = `
    url('${shoesimages[currentIndexShoes]}')`
};

const nextShoes = () => {
    if (currentIndexShoes < 4) {
        currentIndexShoes += 1;
    } else {
        currentIndexShoes = 0;
    }
    console.log('show next image', currentIndexShoes);
    console.log(shoesimages[currentIndexShoes]);
    document.querySelector('.task-3 .shoes').style.backgroundImage = `
    url('${shoesimages[currentIndexShoes]}')` 
};

initScreen();
initScreenB();
initScreenS();
