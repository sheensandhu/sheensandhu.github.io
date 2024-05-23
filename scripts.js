const funFacts = [
    "My favourite artist is Lana Del Rey",
    "I played the clarinet for 10 years",
    "My favourite movie genres are horror and romance",
    "I have a Sonny Angel collection",
    "I'm a morning showerer"
];

function popBubble(element) {
    element.src = 'https://freepngtransparent.com/wp-content/uploads/2021/04/Gold-Star.png';  // Change to the path of your "popped" bubble image
    element.onclick = null;

    const factIndex = Math.floor(Math.random() * funFacts.length);
    const factElement = element.nextElementSibling;
    factElement.textContent = funFacts[factIndex];
}
