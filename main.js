const dropdown = document.querySelectorAll("i");
const links = document.querySelectorAll(".nav-links");

for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    let target = e.target;
    console.log(target.firstElement.nextElement.nextElement);
  });
}
