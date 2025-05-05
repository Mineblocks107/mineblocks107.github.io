var footer = document.getElementById("footer")

var body = document.body
var html = document.documentElement

var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

if(height < window.innerHeight){
    footer.style.position = "absolute";
    footer.style.bottom = "0";
}

footer.style.position