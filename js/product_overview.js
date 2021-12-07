//切換語言
function changeLanguage(language) {
  window.localStorage.setItem("index_language", language);
  document.cookie = `index_language=${language}`;

  const urls = location.href.split("/");
  const pageName = urls[urls.length - 1].replace("_en", "");
  const isZh = !urls[urls.length - 1].includes("en");

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

let selectButtons = document.getElementsByClassName("selectBtn");
let hiddenSections = document.getElementsByClassName("product_info_grid");

for (let i in selectButtons) {
  let buttonId = selectButtons[i].id;
  if (buttonId == undefined) {
    continue;
  }

  let button = selectButtons[i];
  // Add Event Listener
  button.addEventListener("click", function (item) {
    // Remove btn Parent Active
    let buttonParents =
      document.getElementsByClassName("product_info_btn")[0].children[0]
        .children;
    for (let j in buttonParents) {
      let buttonParentId = buttonParents[j].id;
      if (buttonParentId == undefined) {
        continue;
      }
      buttonParents[j].classList.remove("active");
    }
    // Add clicked btn Parent Active
    button.parentElement.classList.add("active");

    // Show/Hide Section
    for (let j in hiddenSections) {
      let sectionId = hiddenSections[j].id;
      if (sectionId == undefined) {
        continue;
      }
      if (sectionId.indexOf(buttonId.replace("Btn", "")) >= 0) {
        hiddenSections[j].classList.remove("hidden");
      } else {
        hiddenSections[j].classList.add("hidden");
      }
    }
  });
}

//Sign Up Form
let footerRequired = document.getElementById("footer_required");
let calloutRequired = document.getElementById("callout_required");

function requiredValue(url) {
  if (footerRequired.value == undefined || footerRequired.value == "") {
    footerRequired.style.border = "solid 2px #C84031";
    calloutRequired.style.border = "solid 2px #C84031";
  } else {
    submitFunction(url);
  }
}

function submitFunction(url) {
  window.location.href = `./${url}.html?email=${footerRequired.value}&`;
}

footerRequired.addEventListener("input", function (e) {
  calloutRequired.value = e.target.value;
});

calloutRequired.addEventListener("input", function (e) {
  footerRequired.value = e.target.value;
});
