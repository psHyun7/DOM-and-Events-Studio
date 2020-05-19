// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
  
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function(event) {
        let confirmed = confirm("Confirm that the shuttle is ready for take off");
        if (confirmed) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function(event) {
        let confirmed = confirm("Confirm that you want to abort the mission.");
        if (confirmed) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });

    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    let verticalMoved = 250;
    // set initial vertical rocket position
    rocket.style.top = verticalMoved + "px";
    //declared global variable
    horizontalMoved = 0;

    let up = document.getElementById("up");
    up.addEventListener("click", function(event) {
        verticalMoved -= 10;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        rocket.style.top = verticalMoved +"px";
    })
    let down = document.getElementById("down");
    down.addEventListener("click", function(event) {
        verticalMoved += 10;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        rocket.style.top = verticalMoved + "px";
    })
    let right = document.getElementById("right");
    right.addEventListener("click", function(event) {
        horizontalMoved += 10;
        rocket.style.left = horizontalMoved + "px";
    });
    
});

//Trying out different way to handle event.
function moveLeft() {
    horizontalMoved -= 10;
    rocket.style.left = horizontalMoved + "px";
}
