var userBlocks = [];
var hourBlocks = [
	  "09:00",
	  "10:00",
	  "11:00",
	  "12:00",
	  "13:00",
	  "14:00",
	  "15:00",
	  "16:00",
	  "17:00",
	];
	//variable to save current time to reference if time slot has passed
var currentTime = moment().format("HH") + ":00";
var domContainer = document.querySelector("#timeslot-container");
	//inserting time and day and time into Current day
	
window.setInterval(function () {
	  $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
	}, 1000);
	
//creates row to store time block
var displayTimeBlocks = function () {
	  localTasks();
	
//for loop runs for each time stored in hourBlocks
for (i = 0; i < hourBlocks.length; i++) {
  var taskRow = document.createElement("div");
	    taskRow.classList = "row time-block justify-content-center";
	    taskRow.id = hourBlocks.indexOf(hourBlocks[i]);
	var timeSlot = document.createElement("h4");
	    timeSlot.classList = "hour col-md-2";
	    timeSlot.id = hourBlocks.indexOf(hourBlocks[i]);
	    timeSlot.textContent = hourBlocks[i];
	    taskRow.appendChild(timeSlot);
	//create input feild
	var taskInput = document.createElement("input");
	    taskInput.classList = "time-block clearable col-md-9 description p-0";
	    taskInput.id = "input" + hourBlocks.indexOf(hourBlocks[i]);
	  if (userBlocks[i]) {
	    taskInput.value = userBlocks[i];
	  }
	  taskRow.appendChild(taskInput);

	  taskRow.appendChild(taskInput);
//create save button
	  var saveBtn = document.createElement("button");
	    saveBtn.classList = "saveBtn col-md-1";
	    saveBtn.id = "btn" + hourBlocks.indexOf(hourBlocks[i]);
	    saveBtn.innerHTML = "<i class='far fa-save fa-lg'></i>";

	    taskRow.appendChild(saveBtn);
	
	    domContainer.appendChild(taskRow);
	  if (currentTime === hourBlocks[i]){
	    taskInput.classList = "present col-md-9 description p-0"
	    }
	    
	  if (currentTime < hourBlocks[i]){
	        taskInput.classList = "future col-md-9 description p-0"
	        }
	        
	  if (currentTime > hourBlocks[i]){
	        taskInput.classList = "past col-md-9 description p-0"
	        }
	  }
	};
	displayTimeBlocks();
	

	//code for save button
	$("button").on("click", function () {
	    var tempTask = [];
	    for (var i = 0; i < hourBlocks.length; i++){
	        tempTask.push(document.getElementsByTagName("input")[i].value);
	    }
	    userBlocks = tempTask;
	    localStorage.setItem("tasks", JSON.stringify(userBlocks));
	});
	

	//function to grab local storage
	function localTasks() {
	    if (JSON.parse(localStorage.getItem("tasks"))){
	        userBlocks = JSON.parse(localStorage.getItem("tasks"));
	    }
	}
	
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

