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
        
    }}

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function(event) {
        confirm("Confirm that you want to abort the mission")
    })


});