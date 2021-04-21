const albums = [
    { name: "Alumb 1", price: 12.99, inCart: false},
    { name: "Alumb 2", price: 14.99, inCart: false},
    { name: "Alumb 3", price: 9.99, inCart: false},
    { name: "Alumb 4", price: 19.99, inCart: false}
];

const album_list = document.querySelectorAll('img.shop-item-image')

function addingImage() {
  for (let i = 0; i < album_list.length; i++) {
      album_list[i].src =  'Images/Album' + (i+1) + '.png';
  }
}

addingImage();


for (let name in albums) {
    document.getElementbyID(name).addEventListener("click", addtoCart(name));
}


/*          incomplete. 
function addtoCart (name) [
    const entry = document.createElement("img");
    entry.append()
]
*/ 