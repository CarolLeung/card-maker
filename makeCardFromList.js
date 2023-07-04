const iconList = ["eye", "rabbit", "stretch", "fire", "fan"]

// x = element, data = location in cardlist data
function createCard(x, data) {
  if (data.full) {
    document.getElementsByClassName("cardBorder")[x].classList.add('fullcard');
    document.getElementsByClassName("cardBorder")[x].style.backgroundColor = data.mainColor;
  } else {
    document.getElementsByClassName("cardBorder")[x].className = "cardBorder";
    document.getElementsByClassName("cardBack")[x].style.backgroundColor = data.mainColor;
    // document.getElementsByClassName("cardBorder")[x].style.backgroundColor = "#ffec9d";
  }

  document.getElementsByClassName("mainImg")[x].src = "images/" + data.src;
  document.getElementsByClassName("cardName")[x].innerHTML = data.name;
  document.getElementsByClassName("topRight")[x].children[0].innerHTML = data.numberDesc;
  document.getElementsByClassName("topRight")[x].children[1].innerHTML = data.numberValue;
  // icon
  // document.getElementsByClassName("topRight")[x].children[2].style.background = `radial-gradient(farthest-corner at 4px 4px, white, ${data.mainColor} 60%)`;
  document.getElementsByClassName("topRight")[x].children[2].style.background = "radial-gradient(white, transparent 70%), " + data.mainColor;
  document.getElementsByClassName("topRight")[x].children[2].children[0].className = data.icon;

  if(data.stage){
    document.getElementsByClassName("basic")[x].style.display = "none";
    document.getElementsByClassName("hasStage")[x].style.display = "block";
    document.getElementsByClassName("stageNumber")[x].innerHTML = data.stage;
    document.getElementsByClassName("evolvesFrom")[x].innerHTML = data.evolvesFrom;
  } else {
    document.getElementsByClassName("basic")[x].style.display = "block";
    document.getElementsByClassName("hasStage")[x].style.display = "none";
  }

  for (var mainImgStyle in data.mainImg) {
    document.getElementsByClassName("mainImg")[x].style[mainImgStyle] = data.mainImg[mainImgStyle];
  }
  document.getElementsByClassName("imageDesc")[x].innerHTML = data.imageDesc;

  let attacks = "";
  for (var i = 0; i < data.attacks.length; i++) {
    attacks += `
      <div class="attackName">${data.attacks[i].name}</div>
      <div class="attackDescription">${data.attacks[i].description}</div>
    `;
  }

  document.getElementsByClassName("attackHalf")[x].innerHTML = attacks;
  document.getElementsByClassName("otherDescription")[x].innerHTML = data.mainDescription;
}

function updateCard(key) {
  switch (key) {
    case "icon-select":
      if(document.getElementById(key).value == ""){
        document.getElementById("icon-link").style.display = "block";
      } else {
        document.getElementById("icon-link").style.display = "none";
        template.icon = document.getElementById(key).value;
      }
      break;
    case "attacks_name_1":
    case "attacks_description_1":
    case "attacks_name_2":
    case "attacks_description_2":
      template[key.split("_")[0]][key.split("_")[2]-1][key.split("_")[1]] = document.getElementById(key).value;
      break;
    case "mainImg_height":
    case "mainImg_width":
    case "mainImg_top":
    case "mainImg_left":
      template[key.split("_")[0]][key.split("_")[1]] =
        document.getElementById(key).value == ""? "auto" : document.getElementById(key).value + "%";
      break;
    case "full":
      template[key] = !template[key];
      break;
    case "stage":
      template[key] = document.getElementById(key).value == "0"? false : document.getElementById(key).value;
      break;
    case "src":
      let selectedFile = document.getElementById(key).files[0];
      template[key] = selectedFile.name;
      break;
    default:
      template[key] = document.getElementById(key).value;
  }
  createCard(0, template);
}

function makeData() {
  document.getElementById("cardData").innerHTML += JSON.stringify(template);
}

function zoom() {
  document.getElementsByClassName("card")[0].style.transform = `scale(${document.getElementById('zoom').value})`;
}

for (var i = 0; i < cardDataList.length; i++) {
  if(i<cardDataList.length-1){
    var original = document.getElementsByClassName("card")[0];
    var clone = original.cloneNode(true);
    clone.removeAttribute("id");
    document.getElementsByClassName("cardList")[0].appendChild(clone);
  }
  createCard(i, cardDataList[i]);
}

window.updateCard = updateCard;
window.makeData = makeData;
