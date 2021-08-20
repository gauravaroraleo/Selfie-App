var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();

}

function takepic() {
    Webcam.snap(function (data_uri) {
            document.getElementById("result").innerHTML = '<img id="myimage" src="' + data_uri + '">';
        }
    );
}
function save(){
    l=document.getElementById("link");
    i=document.getElementById("myimage").src;
    l.href=i;
    l.click();
}
function speak() {
    var synth = window.speechSynthesis;
    Say = "Taking Your Selfie In 5 Seconds";
    var saythis = new SpeechSynthesisUtterance(Say);
    synth.speak(saythis);
    Webcam.attach(cam);
    setTimeout(function () {
takepic();
        save();
        },5000
    );
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
cam = document.getElementById("camera");
