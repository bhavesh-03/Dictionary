const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";;
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inputword = document.getElementById("input-word").value;
    console.log(inputword);
    fetch(`${url}${inputword}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML =
            `
            <div class="result">
                <h3>${data[0].word}</h3>
                <p>${data[0].phonetics[0].text}</p>
                <audio id="sound"src=${data[0]?.phonetics[0]?.audio}>sound</audio>
            
                <button onclick="document.getElementById('sound').play()">Listen</button>
                <p>${data[0].meanings[0].definitions[0].definition}</p>
                <p>${data[0].meanings[0].partOfSpeech}</p>
            
            </div>
            `
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
});