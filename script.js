const jokeText = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

async function gemerateJoke() {

    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    try {
        const response = await fetch("https://icanhazdadjoke.com/", config)
        const data = await response.json();

        if (response.status === 429) {
            jokeText.textContent = "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.";
        } else {
            jokeText.textContent = data.joke;
        }
        
    } catch (error) {
        jokeText.textContent = "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
    }

} gemerateJoke();

jokeBtn.addEventListener("click", () => {
    gemerateJoke();
})