document.getElementById("button").onclick = function() {
    let x = document.getElementById("example");
    let y = document.getElementById("gwa");
    let math = parseFloat(document.getElementById("first-sub").value);
    let english = parseFloat(document.getElementById("second-sub").value);
    let science = parseFloat(document.getElementById("third-sub").value);
    let values = parseFloat(document.getElementById("fourth-sub").value);
    let pe = parseFloat(document.getElementById("fifth-sub").value);
    let result = math + english + science + values + pe;
    let gwa = result / 5;
    y.innerHTML = gwa;
    switch(true){
        case gwa <= 74:
            x.innerHTML = "You got F! " + "that means you failed";
            break;
        case gwa >= 90:
            x.innerHTML = "You got A! " + "that means you passed";
            break;
        case gwa >= 85:
            x.innerHTML = "You got B! " + "that means you passed";
            break;
        case gwa >= 80:
            x.innerHTML = "You got c! " + "that means you passed";
            break;
        case gwa >= 75:
            x.innerHTML = "You got D! " + "that means you barely passed";
            break;
        default:
            x.innerHTML = "please input grades!";
    }
}

