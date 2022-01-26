// create function that looks up id and adds class selected
function select(id) {
    points = parseInt(document.getElementById(id+"_number").innerHTML);

    //if element has class
    if (document.getElementById(id).classList.contains("selected")) {
        //remove class
        document.getElementById(id).classList.remove("selected");
        score(0, score(0) - points, true);
        return false;
    } else {
        //add class
        document.getElementById(id).classList.add("selected");
        score(0, score(0) + points, true);
        return true;
    }
}



document.getElementById('0_score').onclick = () => {
        control = window.open("control.html", "_blank", "width=540,height=540,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no");
}

//show a certain amount of crosses with class crs
function show_crosses_crs(amount) {
    //get all elements with class crs
    let crs = document.getElementsByClassName("crs");
    //loop through all elements
    for (let i = 0; i < crs.length; i++) {
        //if i is less than amount
        if (i < amount) {
            //show element
            crs[i].classList.remove("hidden");
            //set interval to hide element
            setTimeout(() => {
                crs[i].classList.add("hidden");
            }, 2000);
        }
    }
}

function score (team, pts, rw){
    //rw = true is write
    //rw = false or not set is read
    if (rw == true){
        document.getElementById(team +'_score').innerHTML = pts;
        control.document.getElementById(team +'_score').innerHTML = pts+" pts.";
    } else {
        return parseInt(document.getElementById(team +'_score').innerHTML);
    }
}

window.onbeforeunload = () => {
    control.close();
};


var actual_level = 0;
var title ="";
function loadLevel(id) {
title="";
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "levels.json", 0);
  xhttp.send();
    var levels = JSON.parse(xhttp.responseText);
    var level = levels[id].answers;
    title = levels[id].info.title;
    for( var i in level){
        document.getElementById(i+'_answer').innerHTML = level[i].clue;
        document.getElementById(i+'_number').innerHTML = level[i].pts;
    }
    //get all elements with class selected and remove class
    let selected = document.getElementsByClassName("selected");
    while (selected.length > 0) {
        selected[0].classList.remove("selected");
    }
    actual_level = id;
    score(0,0,true);
    control.get_data();
}

 
