function rumMe() {
  let allLI = $('li:nth-child(2)');
  console.log(allLI);
  let findLI = $('li[data-number = "four"]');
  console.log(findLI);
  findLI.text("FOUR");
  let num = findLI.text();
  console.log(num);
}
rumMe();
let saved = null;
$('ul').on('click', 'li', () => {

  if (saved === null) {
    saved = event.target;
  } else {
    let temp = event.target.innerHTML;
    event.target.innerHTML = saved.innerHTML;
    saved.innerHTML = temp;

    saved = null;
  }

});
