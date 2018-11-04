console.log("test")

const footer = document.createElement("footer");
footer.innerText = "@yshayy";

const header = document.createElement("header");
const logo = document.createElement("img");
logo.src = "./soluto.svg"
header.append(logo);
logo.style.width = "65px"

Reveal.addEventListener( 'ready', function( event ) {

document.querySelectorAll('.slide-background').forEach(x=> {
    x.append(footer.cloneNode(true))
    x.append(header.cloneNode(true))
});

} );