

function qouteGenerator(){

    var quotes = [
        "“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde",
        "“So many books, so little time.” <br> ― Frank Zappa",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein",
        "“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero",
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br> ― Dr. Seuss",
        "“You only live once, but if you do it right, once is enough.” <br> ― Mae West",
        "“Be the change that you wish to see in the world.” <br> ― Mahatma Gandhi",
        "“In three words I can sum up everything I've learned about life: it goes on.” <br> ― Robert Frost"
    ];

    var i = Math.floor(Math.random() * quotes.length);
    
    document.getElementById("qoute").innerHTML=quotes[i];

}