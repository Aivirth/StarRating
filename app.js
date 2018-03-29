(function() {
  const ratings = {
    sony: 4.7,
    samsung: 3.4,
    visio: 2.3,
    panasonic: 3.6,
    philips: 4.1
  };
  //total stars
  const starsTotal = 5;

  //run get ratings on dom load
  document.addEventListener("DOMContentLoaded", getRatings);

  //form elements
  const productSelect = document.querySelector("#product-select");
  const ratingControl = document.querySelector("#rating-control");

  //Init Product
  let product;

  //product select change
  productSelect.addEventListener("change", e => {
    product = e.target.value;
    //enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
  });

  //rating control change
  ratingControl.addEventListener("blur", e => {
    const rating = e.target.value;
    //check if rating is under 6
    if (rating > 5) {
      alert("Please rate 1-5");
      return;
    }

    //change rating
    ratings[product] = rating;
    getRatings();
  });

  //get ratings
  function getRatings() {
    for (let rating in ratings) {
      //get % value
      const starPercentage = ratings[rating] / starsTotal * 100;
      //round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      //set width of stars-inner to percentage
      document.querySelector(
        `.${rating} .stars-inner`
      ).style.width = starPercentageRounded;
      //add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML =
        ratings[rating];
    }
  }
})();
