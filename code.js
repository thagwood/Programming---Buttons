 //enables start button
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."; //Display Reading data
    document.getElementById("data").rows["longitude"].innerHTML = "Locating..."; //Display Locating...
    document.getElementById("data").rows["latitude"].innerHTML = "Locating..."; //Display Locating 
}
 //enables stop button
function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";  //time elapsed 15sec
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>93</td>";   //Longitude
    document.getElementById("data").rows["latitude"].innerHTML = "<td>Latitude:</td><td>93</td>"; //Latitude
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
