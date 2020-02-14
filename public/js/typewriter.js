
const text = document.querySelector('.text');
const typewriter = new Typewriter(text, {
    loop: false
});

typewriter
.typeString('Future<br>word-class<br>Developer.')
.pauseFor(3000)
.deleteAll()
.typeString('Ready to <br>learn new<br>languages and<br>technologies.')
.pauseFor(3000)
.deleteAll()
.typeString("I'm Joshua, nice to meet you.")
.stop()
.start();