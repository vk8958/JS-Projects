const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");


//API data
const APIkey = "dQlG1r5oYvJo1YXfbP3gXs4YxkX1A6pV4BzPlIAODro"
const query = "monument";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`;
console.log(apiUrl.length)


let photosArray = [];
let totalImages = 0;
let imagesLoaded = 0;
let ready = false;

async function getPhotos() {
    const query = "monument";
    const count = 10;


    try {

        const response = await fetch(apiUrl);
        photosArray = await response.json(); // Extracting data as a JSON Object from the response
        console.log(photosArray)

    } catch (error) {
        console.log(error)
    }

}

getPhotos()