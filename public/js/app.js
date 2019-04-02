const form = document.querySelector(".food-form");


// form submit event
form.addEventListener("submit", e => {
    e.preventDefault();

    // get form data
    const nameInput = e.target[0].value;
    const foodInput = e.target[1].value;
    const isVeg = e.target[2].checked;
    const isPaid = e.target[3].checked;

    const formInfo = [nameInput, foodInput, isVeg, isPaid];
    
    // NOTE: does this need a string RATHER than an array?
    // postRequest(formInfo); - old version
    requestFunction("POST", '/sendDetails', insertInDOM, formInfo);

});




// insert database info from DOM - after form submit
const insertInDOM = function(data) {
  const ul = document.querySelector("#people_list ul");
  const list = data.map(item => `<li> ${item.name} <span class="lunch">Food:</span> <span class="veg">Vegetarian:</span> <span class="paid">Paid:</span> </li>`).join("");
  ul.innerHTML = list;

  // clear the form values
  form.reset();
};




// populate dropdown - on load
const populateSelect = function(data) {
    const ul = document.querySelector("#food");
    const defaultItem = '<option value="" disabled selected>Select your food option...</option>';

    let list = data.map(item => `<option value="${item.lunch.toLowerCase()}"> ${item.lunch} </option>`);
    list.unshift(defaultItem);
    list.join("");
    ul.innerHTML = list;
};

// run request - populate dropdown on load
// getRequest(); - old version
requestFunction("GET", '/getFoods', populateSelect);






// form validation
form.addEventListener("input", e => {

    // get form data
    const nameInput = e.target;
    if (!nameInput.validity.valid){
        nameInput.classList.add('error');
    } else {
        nameInput.classList.remove('error');
    }

});
