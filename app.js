<<<<<<< HEAD
console.log("Joke App Started");

const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const copy_btn=document.getElementById("copy_btn"); 

async function getJoke(){

    setup.textContent = "😂 Loading Joke...";
    punchline.textContent = "";

    try{

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await response.json();

         setup.textContent= data.setup;
        punchline.textContent = data.punchline;

    }






    catch(error){

        setup.textContent = "❌ Failed to load joke.";
        punchline.textContent = "Check your internet connection.";

        console.log(error);

    }
    copy_btn.addEventListener("click",()=>{
        const joke=(`${setup.textContent}  ,${punchline.textContent}   `);
        navigator.clipboard.writeText(joke);
        // alert("Joke copied");
        copy_btn.textContent="copied..!"
})

        setTimeout(()=>{
        copy_btn.textContent="Copy joke"},2000
        );






    }







btn.addEventListener("click",getJoke);

// First joke automatically
=======
console.log("Joke App Started");

const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const copy_btn=document.getElementById("copy_btn"); 

async function getJoke(){

    setup.textContent = "😂 Loading Joke...";
    punchline.textContent = "";

    try{

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await response.json();

         setup.textContent= data.setup;
        punchline.textContent = data.punchline;

    }






    catch(error){

        setup.textContent = "❌ Failed to load joke.";
        punchline.textContent = "Check your internet connection.";

        console.log(error);

    }
    copy_btn.addEventListener("click",()=>{
        const joke=(`${setup.textContent}  ,${punchline.textContent}   `);
        navigator.clipboard.writeText(joke);
        // alert("Joke copied");
        copy_btn.textContent="copied..!"
})

        setTimeout(()=>{
        copy_btn.textContent="Copy joke"},2000
        );






    }







btn.addEventListener("click",getJoke);

// First joke automatically
>>>>>>> d6536b648e0af306d0850f7b97a9b0dc9a385b87
getJoke();