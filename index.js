var txtInput = document.querySelector("#input-text");
var sendBtn = document.querySelector("#button-send");
var parameterTxt = document.querySelector("#parameter");
var valueTxt = document.querySelector("#value");
var output = document.querySelector("#output");

function getTranslation(id) {
  return txtInput.value + "?" + parameterTxt.value + "=" + id;
}

function clickHandler() {
  var value = valueTxt.value;
  var url = getTranslation(value);
  console.log("URL:", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the data to the console
      output.innerHTML = JSON.stringify(data); // Display the data as JSON string
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

sendBtn.addEventListener("click", clickHandler);
