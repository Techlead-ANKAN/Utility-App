const left_arrow = document.getElementById("left_img");
const right_arrow = document.getElementById("right_img");
const pic = document.getElementsByClassName("util_pic")[0];
const detail_div = document.getElementsByClassName("details")[0];
const open = document.getElementsByClassName("open")[0];
const code = document.getElementsByClassName("src")[0];



const images = ["calculator.png", "clock_13564729.png", "checklist_10552402.png", "notes_8521476.png", "FD.jpg"];

const util_name = ["Simple Calculator", "Stopwatch", "To Do List App", "Note Taking App", "FD Calculator"]

const details = [

    "This is a Simple Calculator built using HTML5, CSS, JavaScript. It includes all the basic operations of a simple Calculator. The layout is done using HTML5, where as the styling is done with CSS and Js for the functionality.",

    "This is a Stopwacth built using HTML5, CSS, JavaScript. It includes all the basic operations of a simple Calculator. The layout is done using HTML5, where as the styling is done with CSS and Js for the functionality.", 

    "This is a To Do List App built using HTML5, CSS, JavaScript. It includes all the basic operations of a simple Calculator. The layout is done using HTML5, where as the styling is done with CSS and Js for the functionality.",

    "This is a Note Taking App built using HTML5, CSS, JavaScript. It includes all the basic operations of a simple Calculator. The layout is done using HTML5, where as the styling is done with CSS and Js for the functionality.",

    "This is a FD Calculator App built using HTML5, CSS, JavaScript. It includes all the basic operations of a simple Calculator. The layout is done using HTML5, where as the styling is done with CSS and Js for the functionality."

];

const html_file = ["1_Simple Calculator/index.html", "3_Stopwatch App/index.html", "2_To do List App/index.html", "5_Note Taking App/index.html", "FD_Calculator/index.html"];

const code_link = ["https://github.com/Techlead-ANKAN/Simple-Calculator.git", "https://github.com/Techlead-ANKAN/Stopwatch.git", "https://github.com/Techlead-ANKAN/To-Do-List-App.git", "https://github.com/Techlead-ANKAN/Note-Taking-App.git", "https://github.com/Techlead-ANKAN/FD-Calculator.git"];

let i = 0;

function moveLeft(){

    if (i == 0) i < util_name.length;

    else{
        i--;
    }

    pic.style.backgroundImage = `url(${images[i]})`;
    detail_div.children[0].innerText = util_name[i];
    detail_div.children[3].innerText = details[i];
    open.children[0].setAttribute("href", html_file[i]);
    code.children[0].setAttribute("href", code_link[i]);


}


function moveRight(){

    if (i == (util_name.length - 1)) i = 0;

    else{
        i++;
    }

    pic.style.backgroundImage = `url(${images[i]})`;
    detail_div.children[0].innerText = util_name[i];
    detail_div.children[3].innerText = details[i];
    open.children[0].setAttribute("href", html_file[i]);
    code.children[0].setAttribute("href", code_link[i]);

}


