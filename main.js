
const cropsData = {
    Wheat: "Rabi Season",
    Barley: "Rabi Season",
    Mustard: "Rabi Season",
    Gram: "Rabi Season",
    Peas: "Rabi Season",
    Lentils: "Rabi Season",
    Rice: "Kharif Season",
    Millet: "Kharif Season",
    Cotton: "Kharif Season",
    Pulses: "Kharif Season",
    Soybean: "Kharif Season",
    Sorghum: "Kharif Season",
    Watermelon: "Zaid Season",
    Cucumber: "Zaid Season",
    Vegetables: "Zaid Season",
    Cabbage: "Zaid Season",
    Pumpkin: "Zaid Season",
    Tomato: "Zaid Season"
 
};


function findCrops() {
    const seasonInput = document.getElementById("season").value.toLowerCase();

    const resultContainer = document.getElementById("result");
    let resultHTML = "<p>Recommended Crops:</p><ul>";

    for (const crop in cropsData) {
        const cropSeason = cropsData[crop].toLowerCase();

        if (cropSeason.includes(seasonInput)) {
            resultHTML += `<li>${crop}</li>`;
        }

    }

    resultHTML += "</ul>";
    resultContainer.innerHTML = resultHTML;
}