function validateform(event) {
  event.preventDefault();
  var name = document.login.name.value;
  var password = document.login.password.value;
  var email = document.login.email.value;
  console.log("name:" + name);
  console.log("email:" + email);
  console.log("password:" + password);

  if (name == null || name == "") {
    document.getElementById("errorname").innerHTML = "Name can't be blank";
    document.getElementById("errorname").style.color = "#ef042f";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
  var x = document.login.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    document.getElementById("erroremail").innerHTML =
      "Please enter a valid e-mail address.";
    document.getElementById("erroremail").style.color = "#ef042f";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
  if (password.length < 8) {
    document.getElementById("errorpassword").innerHTML =
      "Password must be at least 8 characters long.";
    document.getElementById("errorpassword").style.color = "#ef042f";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
}
// slide

var nextBtn = document.getElementById("nextButton");
var preBtn = document.getElementById("preButton");
var slider = document.getElementById("slider");
var widthItem = document.querySelector(".item").offsetWidth;
var numItem = slider.querySelectorAll(".item").length;
var currentPosition = 0;
// 1 biến để giúp ta control được slider đang ở đâu
var widthSlider = numItem * widthItem;
// ta sẽ lấy số lượng item trong slide nhân với width của mỗi item để ra toàn bộ width của slider
nextBtn.addEventListener("click", nextSlider);
preBtn.addEventListener("click", backSlider);
const createClone = function genClone() {
  const numItems = slider.getElementsByClassName("item").length;
  const firstChild = slider.getElementsByClassName("item").item(0); // xác định first slide
  const lastChild = slider.getElementsByClassName("item").item(numItems - 1); // xác định last slide
  const cloneLastChild = lastChild.cloneNode(true); // thực hiện tạo ra 1 last slide mới
  const cloneFirstChild = firstChild.cloneNode(true); // thực hiện tạo ra 1 first slide mới
  cloneLastChild.classList += " clone"; //
  cloneFirstChild.classList += " clone"; // add class clone (bạn có thể add bất cứ class gì bạn muốn)
  slider.insertBefore(cloneLastChild, firstChild); // thêm last slide vào phía trước slide đầu tiên
  slider.insertBefore(cloneFirstChild, lastChild.nextSibling); // thêm first slide vào cuối slider
  numItem += 2;
};
createClone(); // gọi hàm createClone đầu tiên để slide khởi tạo sẽ tạo clone trước
function nextSlider() {
  currentPosition -= widthItem;
  checkPosition(currentPosition);
}

function backSlider() {
  currentPosition += widthItem;
  checkPosition(currentPosition);
}
// currentPosition là vị trí hiện tại của slider
// mỗi lần slide , slider sẽ di chuyển 1 đoạn đúng bằng với width của 1 slide item (widthItem)
// hàm checkPosition thực hiện di chuyển slider
function checkPosition(newValue) {
  distantSlide = "translate(" + newValue + "px)";
  slider.style.transform = distantSlide;
  // xử lý mỗi lần di chuyển sẽ gán giá trị mới cho thuộc tính transform của slider
}
function checkPosition(newValue) {
  distantSlide = "translate(" + currentPosition + "px)";
  slider.style.transform = distantSlide;

  if (currentPosition == -(widthItem * (numItem - 2))) {
    slider.style.transform = "translateX(" + currentPosition + "px)";
    setTimeout(function () {
      slider.style.transition = "0s";
      currentPosition = 0;
      slider.style.transform = "translateX(" + currentPosition + "px)";
    }, 400);
  } else {
    slider.style.transition = "0.5s";
  }
  // khi slider tới vị trí của slide cuối cùng nếu bấm next slide tiếp thì sẽ thực hiện translate đến vị trí của clone element cuối slide
  // clone element cuối slide ở đây là
  // <div class="item red clone">1</div>
  // ngay khi slide đến clone element cuối ngay lập tức remove transition của slider và dịch chuyển về slide đầu tiên của slider
  // và sau khi dịch chuyển về slide đầu tiên add transition trở lại slider
  if (currentPosition == widthItem) {
    console.log(currentPosition);
    slider.style.transform = "translateX(" + currentPosition + "px)";
    setTimeout(function () {
      slider.style.transition = "0s";
      currentPosition = -(widthItem * (numItem - 3));
      slider.style.transform = "translateX(" + currentPosition + "px)";
    }, 400);
  } else {
    slider.style.transition = "0.5s";
  }
  // khi slider lùi tới vị trí của slide đầu tiên  nếu bấm back slide tiếp thì sẽ thực hiện translate đến vị trí của clone element đầu slide
  // clone element cuối cùng ở đây là:
  // <div class="item yellow clone">3</div>
  // ngay khi slide đến clone element đầu slide ngay lập tức remove transition của slider và dịch chuyển về slide cuối  của slider
  // và sau khi dịch chuyển về slide cuối add transition trở lại slidern
}
