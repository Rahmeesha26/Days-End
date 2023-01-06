function drawImage() {
    const horror = document.getElementById('horror');
    if (horror.getContext) {
        const ctx = horror.getContext('2d');
    }

    const img = new Image();
    ctx.drawImage(3, 3, 32, 32, 1, 1, 32, 32);
}   

// function copyImageToCanvas() {
//     const img = document.querySelector('img');
//     const canvas = document.querySelector('canvas');

//     const ctx = canvas.getContext('2d');

//     ctx.drawImage(img, 3, 3, 32, 32, 1, 1, 32, 32);

// }


// ctx.drawImage(img, 
// 0, 0, tilesheet x, y (top left corner of grab) 
// 500, 20, how big of a grab
// 0, 0, where you want the crop the be placed
// 100, 100 size of placement of what was grabbed
// ); 

// setTimeout(() => {
//    copyImageToCanvas(); 
// }, 300);


// class image {
//     constructor(imagePath, xpos, ypos, width, height) {
//         this.imagePath = imagePath;
//         this.xpos = xpos;
//         this.ypos = ypos;
//         this.width = width;
//         this.height = height;
//     }
// }

// function createImage(context, imagePath, xpos, ypos, width, height) {
//     const myImage = document.createElement('img');
//     myImage.src = imagePath;
//     myImage.onload = function() {
//         context.drawImage(myImage, xpos, ypos, width, height);
//     }
// }

// const image = new Image('patrick-perkins-DP4dLbZdybA-unsplash.jpg', 100, 50, 300, 200);
// createImage(context, image.imagePath, image.xpos, image.ypos, image.width, image.height);