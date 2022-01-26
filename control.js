//when answer is clicked get id
var answers = document.querySelectorAll('.answer');
for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function() {
        var id = this.getAttribute('id');
        if(window.opener.select(id)){
            this.classList.add("selected");
        }else{
            this.classList.remove("selected");
        }
    });
}
function get_data(){
for(var i = 1; i < 9; i++){
    clue = window.opener.document.getElementById(i+'_answer').innerHTML;
    nbr = window.opener.document.getElementById(i+'_number').innerHTML;
    document.getElementById(i).innerHTML = clue + ' - ' + nbr;
    if(window.opener.document.getElementById(i).classList.contains('selected')){
        document.getElementById(i).classList.add('selected');
    } else {
        document.getElementById(i).classList.remove('selected');
    }
}
document.getElementById('0_score').innerHTML = window.opener.document.getElementById('0_score').innerHTML +" pts.";
document.getElementById('1_score').innerHTML = window.opener.document.getElementById('1_score').innerHTML +" pts.";
document.getElementById('2_score').innerHTML = window.opener.document.getElementById('2_score').innerHTML +" pts.";
document.getElementById('level').innerHTML = window.opener.actual_level;
document.getElementById('title').innerHTML = window.opener.title;
}
document.onload = get_data();

