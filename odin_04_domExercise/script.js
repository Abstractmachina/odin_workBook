const container = document.querySelector("#container");

const redP = document.createElement("p");
redP.classList.add("red");
redP.textContent = "Hey, I'm red!";
container.appendChild(redP);

const blueh3 = document.createElement("h3");
blueh3.classList.add("blue");
blueh3.textContent = "I'm a blue h3!";
container.appendChild(blueh3);

const pinky = document.createElement('div');
pinky.classList.add("pink");
pinky.style.backgroundColor = "pink";
pinky.style.borderColor = "black";
pinky.style.borderStyle = "solid";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
pinky.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
pinky.appendChild(p2);


container.appendChild(pinky);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World Again!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
    alert("Hellooooooo World!");
});