/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

let currentIndex = 0;

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image"
                onclick="handleThumbnailClick(event)"
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button> 
        </li>`;
    });
};

const handleThumbnailClick = ev => {
    // figure out which element user clicked on
    const elem = ev.currentTarget;
    console.log(elem);
    // store the elements bg image in a variable
    const bgImage = elem.style.backgroundImage;
    // update featured image's bg image with the bg image of the thumbnail we just clicked
    document.querySelector('.featured_image').style.backgroundImage = bgImage;
    // update current index to the index associated with the thumbnail the user clicked on
    currentIndex = parseInt(elem.dataset.index);
    console.log(currentIndex);
}

// 1. create function that handles previous
const previous = () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = 7;
    }
    console.log('show previous image', currentIndex);
    console.log(images[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = `
    url('${images[currentIndex]}')`
};

// 2. create function that handles next
const next = () => {
    if (currentIndex < 7) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    console.log('show next image', currentIndex);
    console.log(images[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = `
    url('${images[currentIndex]}')` 
};

initScreen();