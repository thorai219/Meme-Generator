const meme = document.getElementById('meme');
const imgUrl = document.getElementById('imgUrl');
const textTop = document.getElementById('textTop');
const textBot = document.getElementById('textBot');

document.getElementById('memeForm').addEventListener("submit", function (e) {
    e.preventDefault();

    if (imgUrl.value === "") {
        alert('Please type in an image address!')
    } else {
        const newDiv = document.createElement('div');
        const imgDiv = document.createElement('img');
        const top = document.createElement('h2');
        const bot = document.createElement('h2');
        imgDiv.src = imgUrl.value;
        top.innerText = textTop.value;
        bot.innerText = textBot.value;
        newDiv.className = 'memeDiv';
        newDiv.addEventListener('click', function (e) {
            meme.removeChild(newDiv)
        });
        top.className = 'textToTop';
        bot.className = 'textToBot';
        newDiv.appendChild(imgDiv);
        newDiv.appendChild(top);
        newDiv.appendChild(bot);
        meme.appendChild(newDiv);
        imgUrl.value = "";
        textBot.value = "";
        textTop.value = "";
    }
})
