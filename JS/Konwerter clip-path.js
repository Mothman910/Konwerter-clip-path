const form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
//Funkcja obsługi formularza
function handleSubmit(event) {
    event.preventDefault(); // zapobiega przeładowaniu strony po wysłaniu formularza

    const polygonPoints = document.querySelector("#polygonPoints").value;
    const viewBoxWidth = document.querySelector("#viewBoxWidth").value;
    const viewBoxHeight = document.querySelector("#viewBoxHeight").value;

    const pointsArray = polygonPoints.split(" ");
    const pointsPercentArray = pointsArray.map((point, index) => {
        if (index % 2 === 0) {
            return ((point / viewBoxWidth) * 100).toFixed(2) + "%";
        } else {
            return ((point / viewBoxHeight) * 100).toFixed(2) + "%";
        }
    });

    let polygonPointsPercent = "";
    for (let i = 0; i < pointsPercentArray.length; i += 2) {
        polygonPointsPercent +=
            pointsPercentArray[i] + " " + pointsPercentArray[i + 1];
        if (i < pointsPercentArray.length - 2) {
            polygonPointsPercent += ", ";
        }
    }

    //  return(polygonPointsPercent);

    // utworzenie nowego elementu HTML i wstawienie go na stronę
    //  resultDiv.textContent = polygonPointsPercent;

    //const resultDiv = return(polygonPointsPercent);
    //document.getElementById("result").innerHTML = resultDiv;
    document.getElementById("result").innerHTML = polygonPointsPercent;
//    event.preventDefault(); // zapobiega przeładowaniu strony po wysłaniu formularza
}
