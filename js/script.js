
function notfound() {
  let not = this.document.getElementById("not");

  not.innerHTML = "Results Not Found !";

}

onload = function () {

  let inputbox1 = document.getElementById("companyname"); //input of company name
  let fields = document.getElementById("field"); //input of feild
  let select = this.document.getElementById("select").value;//option of select list
  let sel = this.document.getElementById("select");//id select list
  let comp = document.getElementsByClassName("companyName"); // all clases of company name
  let maj = document.getElementsByClassName("maj"); // all clases majour

  let cards = document.getElementsByClassName("cards");// class of all company cards
  let city = this.document.getElementsByClassName("city");// class of all city
  let search = document.getElementById("search"); // id search button

  const urlPar = new URL(window.location.href).searchParams; //access to the GET arguments contained in the URL.
  let inp = urlPar.get("major");
  let inp2 = urlPar.get("field");
  let inp3 = urlPar.get("select");

  inputbox1.value = inp;//store the input value to inp
  fields.value = inp2;//store the input fields to inp2
  select.value = inp3;//store the option in select value to inp3

  for (let i = 0; i < comp.length; i++) {
    if (
      comp[i].childNodes[1].innerHTML
        .toLocaleLowerCase()
        .includes(inputbox1.value.toLocaleLowerCase()) &&

      maj[i].innerHTML
        .toLocaleLowerCase()
        .includes(fields.value.toLocaleLowerCase())
      &&

      city[i].innerHTML.includes(inp3) ||
      (select[i] == "" &&
        city[i].innerText.indexOf(inp3) > -1)) {
      cards[i].classList.add("show");
      cards[i].classList.remove("hide");
      console.log("test1");
      city[i].classList.remove("hide");
      city[i].classList.add("show");
      sel.value = inp3;
      // let notfound = document.getElementsByClassName("notfound");
      // notfound.classList("hide");
      // not.innerHTML = "";
    }

    // else if (inp == "" && inp2 == "" && inp3 == "") {
    //   not.innerHTML = "";
    // }


    else {
      cards[i].classList.add("hide");
      console.log("test2");
      console.log(inp3);

      // notfound();











    }
  }
};
