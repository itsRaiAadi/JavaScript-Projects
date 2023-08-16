function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let Output = document.getElementById("output");

  Output.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";

  Output.contentWindow.eval(jsCode);
}
