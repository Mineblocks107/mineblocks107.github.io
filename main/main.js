var footer = document.getElementById("footer")

var body = document.body
var html = document.documentElement

readjustFooter()

function readjustFooter() {
    var height = body.style.height;

    if (height < window.innerHeight) {
        footer.style.position = "absolute";
        footer.style.bottom = "0";
    }
    else{
        console.log(height, window.innerHeight)
    }
}
