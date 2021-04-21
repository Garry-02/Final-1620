const albums = [
    { name: "Alumb 1", price: 12.99, inCart: false},
    { name: "Alumb 2", price: 14.99, inCart: false},
    { name: "Alumb 3", price: 9.99, inCart: false},
    { name: "Alumb 4", price: 19.99, inCart: false}
];

function AddingImages () {
/*    for (let name in albums) {
        if (name == "Album 1") {
            document.getElementById(name).src = "Images/Album1.png";
        }
        else if (name == "Album 2") {
            document.getElementById(name).src = "Images/Album2.png";
        }
        else if (name == "Album 3") {
            document.getElementById(name).src = "Images/Album3.png";
        }
        else if (name == "Album 4") {
            document.getElementById(name).src = "Images/Album4.png";
        }
    }                   
    Not working.
*/
    Album1 = document.getElementById("Album 1").src = "Images/Album1.png";
    Album2 = document.getElementById("Album 2").src = "Images/Album2.png";
    Album3 = document.getElementById("Album 3").src = "Images/Album3.png";
    Album4 = document.getElementById("Album 4").src = "Images/Album4.png";

}

AddingImages();

for (let name in albums) {
    document.getElementbyID(name).addEventListener("click", addtoCart(name));
}

function addtoCart (name) [
    const entry = document.createElement("li");
]