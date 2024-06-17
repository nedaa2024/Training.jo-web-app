// Assuming you have an array of objects like this:
let dataArray = [
  {
    imgSrc: "images/tahalof.png",
    companyName: "Tahaluf Al Emarat",
    major: "IT Services and IT Consulting",
    city: "Aqaba",
  },
  {
    imgSrc: "images/Orange.png",
    companyName: "Orange",
    major: "Telecommunications Company",
    city: "Irbid",
  },
  {
    imgSrc: "images/har.png",
    companyName: "Harmony IT Solutions",
    major: "Information Technology",
    city: "Amman",
  },
  {
    imgSrc: "images/opti.png",
    companyName: "Optimiza",
    major: "IT Services and IT Consulting",
    city: "Amman",
  },
  {
    imgSrc: "images/aspire.png",
    companyName: "Aspire IT Services",
    major: "IT Services and IT Consulting",
    city: "Irbid",
  },
  {
    imgSrc: "images/ins.png",
    companyName: "Inspire Solutions Dev",
    major: "IT Services and IT Consulting",
    city: "Amman",
  },
  {
    imgSrc: "images/b,h,line.png",
    companyName: "BH Line",
    major: "Web Developing",
    city: "Ajloun",
  },
  {
    imgSrc: "images/yolo.jpg",
    companyName: "YALO Programming",
    major: "Web Developing",
    city: "Irbid",
  },
  {
    imgSrc: "images/tamat.png",
    companyName: "Tamatem Games",
    major: "Mobile Gaming Apps",
    city: "Amman",
  },
  {
    imgSrc: "images/prog.png",
    companyName: "Progress Soft",
    major: "IT Services and IT Consulting",
    city: "Amman",
  },
  {
    imgSrc: "images/download 03.png",
    companyName: "INT@J Company",
    major: "Telecommunications",
    city: "Amman",
  },
  {
    imgSrc: "images/est.png",
    companyName: "Estarta Solutions",
    major: "IT Services and IT Consulting",
    city: "Amman",
  },
  {
    imgSrc: "images/download05.png",
    companyName: "GOLDEN EAGLE CO",
    major: "Manufacturing",
    city: "Mafraq",
  },
  {
    imgSrc: "images/download07.png",
    companyName: "GreenArt Company",
    major: "Art & craftsmanship",
    city: "Amman",
  },
  {
    imgSrc: "images/shai.png",
    companyName: "SHAI For AI ",
    major: "IT Services and IT Consulting",
    city: "Amman",
  },
  {
    imgSrc: "images/aty.png",
    companyName: "Atypon",
    major: "Software Development",
    city: "Amman",
  },
  {
    imgSrc: "images/mena.png",
    companyName: "MENADevs",
    major: "Technology and Information ",
    city: "Amman",
  },
];
dataArray.forEach((data) => {
  let cardHTML = `
      <div class="col-lg-3 col-sm-6 mb-4 cards cardcompany">
          <div class="card bg-white rounded shadow-sm">
              <img src="${data.imgSrc}" alt="" class="card-img-top img-fluid imgcompany">
              <div class="card-body p-4 cardbody">
                  <h6 class="card-title companyName"> <a href="#" class="text-dark">${data.companyName}</a></h6>
                  <p id="maj" class="medium mb-0 font-weight-300 maj">${data.major}</p><br>
                  <p id="city" class="medium  mb-0 font-weight-400 place city">
                      <span class="icon-location"></span> 
                      <span class="citty">${data.city}</span>
                  </p>
                  <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4 info">
                      <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold"></span></p>
                      <div class="badge badge-danger px-3 rounded-pill font-weight-normal colore more-info"style="color:blue">More Info ></div>
                  </div>
              </div>
          </div>
      </div>`;

  // Then you can append this HTML to the parent container:
  document.querySelector("#parentContainer").innerHTML += cardHTML;
});

// Add event listener to all "More Info" buttons
document.querySelectorAll(".more-info").forEach((button, index) => {
  button.addEventListener("click", () => {
    if (dataArray[index].companyName === "Orange") {
      window.location.href = "orange.html";
    }
  });
});
