function addTask(description, dueTime){
    var listitem = document.createElement('li')
    tasklist.appendChild(listitem)
    var button = document.createElement('button')
    listitem.innerText = description
    button.classList.add('btn', 'btn-sm', 'btn-outline-danger', 'done')
    button.setAttribute('type', 'button')
    button.innerText = 'Done'
    button.addEventListener('click', function(){
        listitem.remove()
    })
    if(dueTime){
        var span = document.createElement('span')
        span.classList.add('due')
        span.innerText = 'due ' + new Date(dueTime).toLocaleString('en-US')
        listitem.appendChild(span)
    }
    listitem.appendChild(button)
}
var tasklist = document.getElementById("task_list")

var addtask = document.getElementById('add_task')

var taskdescription = document.getElementById('task_description_input')
addtask.addEventListener('click', function(){
    addTask(taskdescription.value, dateAndTimeToTimestamp(dudedateinput, duetimeinput))
    dudedateinput.value = ''
    duetimeinput.value = ''
    taskdescription.value = ''
})

taskdescription.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        addTask(taskdescription.value, dateAndTimeToTimestamp(dudedateinput, duetimeinput))
        dudedateinput.value = ''
        duetimeinput.value = ''
        taskdescription.value = ''
    }
})



var dudedateinput = document.getElementById('duedate_input')

var duetimeinput = document.getElementById('duetime_input')

dudedateinput.value = ""

duetimeinput.value = ''

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}
