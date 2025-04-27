getText('./quizes/ang/unit4_kl3_slownictwo.json');

let quizData

async function getText(file) {
  	let object = await fetch(file);
  	let text = await object.text();
  	quizData = JSON.parse(text)
	Object.freeze(quizData)
}

