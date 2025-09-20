let quizData = []

function getQuiz(file) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                quizData.push(JSON.parse(this.responseText))
            }
            if (this.status == 404) {
                console.error("Couldn't access file");
            }
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    return;
}

function loaded(){
	/*files.forEach((value) => {
        getQuiz(value)
    })
    console.log(quizData)*/
}
 