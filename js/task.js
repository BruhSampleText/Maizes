let taskQue = 1
let levelQue = 1

let currentTask = ''

let task = {}

let startTaskExe = false
let nextTask = true

function createTask (id, type, objectName, objectVariable, amount, messageCompl, messageFail, time) {
    task[id] = {
        type : type,
        objectName : objectName,
        objectVariable : objectVariable,
        amount : amount,
        time : time,
        messageCompl : messageCompl,
        messageFail : messageFail,
        //Not sure about the false/true booleans
        taskComplete : false,
        taskFailed : false
    }
    currentTask = id

    timeThen = seconds
    timeTrack = 0
}

function updateTask(id) {

    switch (task[id].type) {
        case 1:
            //Fetch quest
            shortSide = `Collect ${task[id].amount} ${task[id].objectName}. (${task[id].objectVariable}/${task[id].amount})`
            break
        case 2:
            //Timed fetch quest
            timeTrack = time-(seconds-timeThen)
            shortSide = `Collect ${task[id].amount} ${task[id].objectName} in the next ${timeTrack} seconds. (${task[id].objectVariable}/${task[id].amount})`
            break
    }
}

function gressusTask(id, byWhat, moral) {
   
    if (moral === 0) {
        task[id].objectVariable -= byWhat
    } else {
        task[id].objectVariable += byWhat
    } 
}

function checkTask(id) {
    switch (task[id].type) {
        case 1:
            //Fetch quest
            if (task[id].objectVar === task[id].amount) {
                shortSide = task[id].messageCompl
                task[id].taskComplete = true
            }
            break
        case 2:
            //Timed fetch quest
            if (timeTrack === 0 && !task[id].taskComplete) {
                shortSide = task[id].messageFail
                task[id].taskFailed = true
            } else if (task[id].objectVar === task[id].amount) {
                shortSide = task[id].messageCompl
                task[id].taskComplete = true
                timeThen = 0
                timeTrack = 0
            } else {
                timeTrack = time-(seconds-timeThen)
            }
            break
    }
}

function clearMessage(clearWhat) {

    switch (clearWhat) {
        case 1:
            shortHand.innerHTML = ''
        case 2: 
            fullHand.innerHTML = ''
        case 3:
        shortHand.innerHTML = ''
        fullHand.innerHTML = ''
    }
}

function clearTask(id) {
    task[id] = {}
}

function clearTaskes() {
    task = {}
}

function removeTask(id) {
    delete task[id]
}

function removeTaskes() {
    task = []
}




//[id] = string   [type] = value   [objectName] = string   [objectVariable] = value   [amount] = value
//[messageCompl] = string   [messageFail] = string   [time] = value
//Types:    1 is fetch quest    2 is timed fetch quest
function executeTaskes() {
    // console.log()

    if (!startTaskExe) {
        return
    }
    if (nextTask) {

        if (opacityTask > 0) {
            opacityTask -= opacityChangeSpeed
        } else {
            opacityTask = 0

            switch (levelQue) {
                case 1:

                    switch (taskQue) {
                        case 1:
                            //example
                            createTask("can", 1, "Pie", 0, 3, "hurray", "nay")
                            break
                        case 2:
                            //example
                            createTask('trauck', 1, 'sea', 0, 4, 'blanc', 'french')
                            break
                    }
            }

            updateTask(currentTask)
            ++taskQue
            nextTask = false
        }
    } else {
        if (opacityTask >= opacityFadeInTime + 120) {
            opacityTask = opacityFadeInTime + 120

            checkTask(currentTask)
            updateTask(currentTask)
        } else {
            opacityTask += opacityChangeSpeed
        }
    }
}