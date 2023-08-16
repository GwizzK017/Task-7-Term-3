// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  }); 

  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

  $(document).ready(function() {
    // Add event listener to the remove buttons
    $(".remove-btn").click(function() {
      // Find the parent row (tr) and remove it from the table
      $(this).closest("tr").remove();
    });
  });

  // Sample plant data
const plants = [
  {
    name: "Ficus Tree",
    price: "R320",
    description: "Graceful and lush...",
    onSale: true
  },
  // Add more plant objects here
];

// Function to display plants based on current filters and sorting
function displayPlants(plantsData) {
  const plantsContainer = document.querySelector(".row");
  plantsContainer.innerHTML = "";

  plantsData.forEach(plant => {
    const plantCard = `
      <div class="col-4">
        <div class="card">
          <img src="assets/plant1.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${plant.name}</h4>
            <p class="card-text" id="priceText">${plant.price}</p>
            <p class="card-text mt-4" id="descriptionText">${plant.description}</p>
          </div>
        </div>
      </div>
    `;
    plantsContainer.innerHTML += plantCard;
  });
}

// Initial display of all plants
displayPlants(plants);

// Filter button click event
document.querySelector("#filterButton").addEventListener("click", () => {
  const onSalePlants = plants.filter(plant => plant.onSale);
  displayPlants(onSalePlants);
});

// Sort button click event
document.querySelector("#sortButton").addEventListener("click", () => {
  const sortedPlants = [...plants].sort((a, b) => a.name.localeCompare(b.name));
  displayPlants(sortedPlants);
});

$("#onSaleBtn").click(function() {
  $(".card").hide();
  plants.filter(plant => plant.onSale)
        .forEach(plant => $(`[data-plant="${plant.name}"]`).show());
});

$("#alphabeticalBtn").click(function() {
  $(".card").hide();
  plants.sort((a, b) => a.name.localeCompare(b.name))
        .forEach(plant => $(`[data-plant="${plant.name}"]`).show());
});

$("#showAllBtn").click(function() {
  $(".card").show();
});


  // main.js


