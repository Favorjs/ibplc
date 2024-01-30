const getAllNames =require("./app")

const holders = require("./models/holders");
app.get('/getAllNames', async (req, res) => {
    try {
      const getAllHolders = await holders.findAll({attributes: ['name']});
      res.json({ getAllHolders});
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  });
  

// app.js
function generateNameOptions() {
    const namesList = document.getElementById("namesList");
    names.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      namesList.appendChild(option);
    });
  }
  
  // Filter the names based on user input
  function filterNames() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const namesList = document.getElementById("namesList");
  
    for (let i = 0; i < namesList.options.length; i++) {
      if (namesList.options[i].value.toUpperCase().indexOf(filter) > -1) {
        namesList.options[i].style.display = "";
      } else {
        namesList.options[i].style.display = "none";
      }
    }
  }
  
  // Initialize the name options
  generateNameOptions();
  
  
  // Array to store API data
  

// Simulate fetching data from the server (replace with your actual API call)
const fetchDataFromServer = async () => {
    try {
        const response = await fetch('/getAllNames');
        const data = await response.json();
        return data.names;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

// Function to display names in the HTML page
const displayNames = async () => {
    const namesContainer = document.getElementById('getAllsHolders');
    const names = await fetchDataFromServer();

    // Clear previous content
    namesContainer.innerHTML = '';

    // Display names in the HTML page
    if (names.length > 0) {
        const ul = document.createElement('ul');
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
        namesContainer.appendChild(ul);
    } else {
        namesContainer.textContent = 'No names available.';
    }
};

// Display names when the page loads
window.onload = displayNames;
