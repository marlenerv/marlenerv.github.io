var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Administradora de TI Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Hagas lo que hagas, hazlo con pasión')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>amor!</strong>')
    .pauseFor(2500)
    .start();