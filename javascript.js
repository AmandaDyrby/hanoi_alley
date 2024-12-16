// HVOR MANGE GÆSTER

function changeGuests(value) {
  const input = document.getElementById("guests");
  let currentValue = parseInt(input.value);
  if (currentValue + value >= 1) {
    input.value = currentValue + value;
  }
}

// NY KNAP NÅR MAN TRYKKER FORSÆT

function showContactFields() {
  const contactFields = document.getElementById("contactFields");
  contactFields.style.display = "block";
}

document.getElementById("menuButton").addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// MENUEN
