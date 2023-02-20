const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(
    'Podaj punkty w formacie "x1 y1 x2 y2 ... xn yn": ',
    (polygonPoints) => {
        rl.question("Podaj szerokość viewBox: ", (viewBoxWidth) => {
            rl.question("Podaj wysokość viewBox: ", (viewBoxHeight) => {
                // Rozdzielenie punktów na osobne wartości
                const pointsArray = polygonPoints.split(" ");

                // Konwersja wartości pikselowych na wartości procentowe
                const pointsPercentArray = pointsArray.map((point, index) => {
                    // Konwersja wartości X
                    if (index % 2 === 0) {
                        return ((point / viewBoxWidth) * 100).toFixed(2) + "%";
                    }
                    // Konwersja wartości Y
                    else {
                        return ((point / viewBoxHeight) * 100).toFixed(2) + "%";
                    }
                });

                // Połączenie punktów w ciąg procentowy z przecinkami między punktami
                let polygonPointsPercent = "";
                for (let i = 0; i < pointsPercentArray.length; i += 2) {
                    polygonPointsPercent +=
                        pointsPercentArray[i] + " " + pointsPercentArray[i + 1];
                    if (i < pointsPercentArray.length - 2) {
                        polygonPointsPercent += ", ";
                    }
                }

                console.log(polygonPointsPercent);

                rl.question("Wciśnij ENTER, aby zakończyć...", () => {
                    rl.close();
                });
            });
        });
    }
);
