//切換語言
function changeLanguage(language) {
  window.localStorage.setItem("index_language", language);
  document.cookie = `index_language=${language}`;

  const urls = location.href.split("/");
  var pageName = urls[urls.length - 1].replace("_en", "");
  const isZh = !urls[urls.length - 1].includes("en");
  pageName = pageName.includes(".html") ? pageName : "index.html";

  if (language.includes("zh")) {
    // 中文網址
    if (!isZh) {
      location.href = `../${pageName}`;
    }
  } else {
    // 英文網址
    if (isZh) {
      location.href = `./en/${pageName.replace(".html", "_en.html")}`;
    }
  }
}

//Scorlling Animation
let aosItems = [...document.querySelectorAll(".aos_target")];
console.log(aosItems);

let options = {
  rootMargin: "10px",
  threshold: 0,
};

let setItemActive = (entries) => {
  //console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos");
      return;
    }
  });
};

let observer = new IntersectionObserver(setItemActive, options);

aosItems.forEach((item) => {
  observer.observe(item);
});

//Submit
let heroRequired = document.getElementById("hero_required");
let footerRequired = document.getElementById("footer_required");
let calloutRequired = document.getElementById("callout_required");

function requiredValue(url) {
  if (footerRequired.value == undefined || footerRequired.value == "") {
    footerRequired.style.border = "solid 2px #C84031";
    heroRequired.style.border = "solid 2px #C84031";
    calloutRequired.style.border = "solid 2px #C84031";
  } else {
    submitFunction(url);
  }
}

function submitFunction(url) {
  window.location.href = `./${url}.html?email=${footerRequired.value}&`;
}

heroRequired.addEventListener("input", function (e) {
  footerRequired.value = e.target.value;
  calloutRequired.value = e.target.value;
});

footerRequired.addEventListener("input", function (e) {
  heroRequired.value = e.target.value;
  calloutRequired.value = e.target.value;
});

calloutRequired.addEventListener("input", function (e) {
  heroRequired.value = e.target.value;
  footerRequired.value = e.target.value;
});
