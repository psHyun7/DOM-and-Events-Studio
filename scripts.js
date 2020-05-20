let flightStatus = null;
let shuttleBackground = null;
let altitude = null;
let buttons = null;
let fuelLevel = null;
let chat = null;
let takeoff = null;
let land = null;
let missionAbort = null;
let rocket = null;
let yPosPxl = null;
let xPosPxl = null;
let yTotalPxl = null;
let xTotalPxl = null;
let moveUp = null;
let moveDown = null;
let moveRight = null;
let moveLeft = null;

function init () {
  flightStatus = document.getElementById("flightStatus");
  shuttleBackground = document.getElementById("shuttleBackground");
  altitude = document.getElementById("spaceShuttleHeight");
  buttons = document.getElementsByTagName("button");
  moveUp = buttons[0];
  moveDown = buttons[1];
  moveRight = buttons[2];
  moveLeft = buttons[3];
  fuelLevel = document.getElementsByTagName("p")[1];
  chat = document.getElementsByTagName("p")[2];
  takeoff = document.getElementById("takeoff");
  land = document.getElementById("landing");
  missionAbort = document.getElementById("missionAbort");
  rocket = document.getElementById("rocket")
  yTotalPxl = shuttleBackground.clientHeight;
  xTotalPxl = shuttleBackground.clientWidth;
  xTotalPxl = Math.floor(xTotalPxl/10) * 10
  yPosPxl = yTotalPxl - 70;
  rocket.style.top = yPosPxl + "px";
  xPosPxl = 0;
  rocket.style.left = xPosPxl + "px";
    
  rocket.style.position = "relative"
  land.disabled = true;
  moveUp.disabled = true;
  moveDown.disabled = true;
  moveRight.disabled = true;
  moveLeft.disabled = true;

  takeoff.addEventListener("click", function (event) {
    if (confirm("Confirm that the shuttle is ready for takeoff.")) {
      land.disabled = false;
      takeoff.disabled = true;
      moveUp.disabled = false;
      moveDown.disabled = false;
      moveRight.disabled = false;
      moveLeft.disabled = false;
      launched();
    }
  });
  land.addEventListener("click", function(event) {
    landing();
    moveUp.disabled = true;
    moveDown.disabled = true;
    moveRight.disabled = true;
    moveLeft.disabled = true;
  })
  missionAbort.addEventListener("click", function(event) {
    if(confirm("Confirm that you want to abort the mission")) {
      abort();
      moveUp.disabled = true;
      moveDown.disabled = true;
      moveRight.disabled = true;
      moveLeft.disabled = true;
    }
  })
};

function launched() {
  flightStatus.innerHTML = "Shuttle in flight.";
  shuttleBackground.style.backgroundColor = "blue";
  altitude.innerHTML = parseInt(altitude.innerHTML) + 10000;
  yPosPxl -= 10;
  rocket.style.top = yPosPxl + "px"
  
  // Movement
  moveUp.addEventListener("click", function(event) {
    if (yPosPxl > 0) {
      altitude.innerHTML = parseInt(altitude.innerHTML) + 10000;
      yPosPxl -= 10;
      rocket.style.top = yPosPxl + "px";
    } else {
      alert("Stay within the Atmosphere!")
    }
    
  });
  moveDown.addEventListener("click", function(event) {
    if (parseInt(altitude.innerHTML) !== 0) {
      altitude.innerHTML = parseInt(altitude.innerHTML) - 10000;
      yPosPxl += 10
      rocket.style.top = yPosPxl + "px";
    } else {
      alert("You are on the ground!");
    };
  });
  moveRight.addEventListener("click", function(event) {
    xTotalPxl = shuttleBackground.clientWidth;
    xTotalPxl = Math.floor(xTotalPxl/10) * 10
    if (xPosPxl < xTotalPxl/2 - 20) {
      xPosPxl += 10;
      rocket.style.left = xPosPxl + "px";
    } else {
      alert("Stay within the Atmosphere!");
    }
  });
  moveLeft.addEventListener("click", function(event) {
    xTotalPxl = shuttleBackground.clientWidth;
    xTotalPxl = Math.floor(xTotalPxl/10) * 10
    if (xPosPxl > xTotalPxl/-2 + 20) {
      xPosPxl -= 10;
      rocket.style.left = xPosPxl + "px";
    } else {
      alert("Stay within the Atmosphere!");
    }
  });

}

function landing() {
  alert("The shuttle is landing. Landing gear engaged.");
  flightStatus.innerHTML = "The shuttle has landed.";
  altitude.innerHTML = 0;
  yPosPxl = yTotalPxl -70;
  rocket.style.top = yPosPxl + "px";
  shuttleBackground.style.backgroundColor = "green";
  land.disabled = true;
  takeoff.disabled = false;
}

function abort() {
  flightStatus.innerHTML = "Mission aborted.";
  shuttleBackground.style.backgroundColor = "green";
  altitude.innerHTML = 0;
  land.disabled = true;
  takeoff.disabled = false;
  yPosPxl = yTotalPxl - 70;
  rocket.style.top = yPosPxl + "px";
  xPosPxl = 0;
  rocket.style.left = xPosPxl + "px";
}

window.onload = init;