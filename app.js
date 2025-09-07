let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    if (btn.id === "yellow") {
      btn.classList.add("col_flash");
    } else {
      btn.classList.add("flash");
    }
    print_cmd(btn);
  });

  btn.addEventListener("mouseup", () => {
    if (btn.id === "yellow") {
      btn.classList.remove("col_flash");
    } else {
      btn.classList.remove("flash");
    }
  });

  // safety: if mouse leaves button while still pressed
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("col_flash", "flash");
  });
});

let l=0;

function print_cmd(button){
    screenup = document.querySelector("#upscreen");
    let val = button.getAttribute("name");
    switch (val) {
        case "one":
            screenup.innerText+= "1";
            last(last,1);
            break;

        case "two":
            screenup.innerText+= "2";
            last(last,2);
            break;

        case "three":
            screenup.innerText+= "3";
            last(last,3);
            break;

        case "four":
            screenup.innerText+= "4";
            last(last,4);
            break;

        case "five":
            screenup.innerText += "5";
            last(last,5);
            break;

        case "six":
            screenup.innerText += "6";
            last(last,6);
            break;

        case "seven":
            screenup.innerText += "7";
            last(last,7);
            break;

        case "eight":
            screenup.innerText += "8";
            last(last,8);
            break;

        case "nine":
            screenup.innerText += "9";
            last(last,9);
            break;

        case "zero":
            screenup.innerText += "0";
            last(last,0);
            console.log(l);
            break;

        case "plus":
            screenup.innerText += "+";

            break;

        case "minus":
            screenup.innerText += "-";
            break;

        case "multiply":
            screenup.innerText += "x";
            break;

        case "divide":
            screenup.innerText += "÷";
            break;

        case "clear":
            screenup.innerText = "";
            break;

        case "plus_minus":

            break;

        case "percent":

            break;

        case "equals":
            try {
                screenup.innerText = eval(screenup.innerText.replace("x", "*").replace("÷", "/"));
            } catch {
                screenup.innerText = "Error";
            }
            break;
    }

}
