const quotes = ["“Try not. Do or do not. There is no try.”", 
"“Your eyes can deceive you; don’t trust them.”",
"“Luminous beings we are, not this crude matter.”", 
"“Who’s the more foolish: the fool or the fool who follows him?",
'“Your focus determines your reality.” ',
'“No longer certain that one ever does win a war, I am.”',
'“In a dark place we find ourselves and a little more knowledge lights our way.”',
'“Sometimes we must let go of our pride and do what is requested of us.”',
'“We’ll always be with you. No one’s ever really gone. A thousand generations live in you now.” ',
'“The ability to speak does not make you intelligent.”'];
const author = ['—Yoda, Star Wars Episode V: The Empire Strikes Back', '—Obi-Wan Kenobi, Star Wars Episode IV: A New Hope', '—Yoda, The Empire Strikes Back',
'—Obi-Wan Kenobi, A New Hope', '—Qui-Gon Jinn, Star Wars Episode I: The Phantom Menace', ' —Yoda, The Clone Wars', '—Yoda, Star Wars Episode III: Revenge Of The Sith',
'—Anakin Skywalker, Star Wars Episode II: Attack Of The Clones', '—Luke Skywalker, Star Wars Episode IX: The Rise of Skywalker', '—Qui-Gon Jinn, The Phantom Menace']

const newQuote = () => {
    var randNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
    document.getElementById('authorDisplay').innerHTML = author[randNum];

}