// Load shared data
let items = JSON.parse(localStorage.getItem("items")) || [];
let blockchain = JSON.parse(localStorage.getItem("chain")) || [];

// Add item
function addItem() {
  let item = document.getElementById("item").value;
  let type = document.getElementById("type").value;

  if (!item) {
    alert("Enter item name");
    return;
  }

  let record = {
    item,
    type,
    time: new Date().toLocaleString(),
    prevHash: blockchain.length ? blockchain[blockchain.length - 1].hash : "0",
    hash: Math.random().toString(36).substring(2)
  };

  blockchain.push(record);
  items.push(record);

  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("chain", JSON.stringify(blockchain));

  showItems();
}

// Show items on any page
function showItems() {
  let list = document.getElementById("list");
  if (!list) return;

  list.innerHTML = "";
  items.forEach(i => {
    let li = document.createElement("li");
    li.innerText = `${i.item} - ${i.type} (Tracked)`;
    list.appendChild(li);
  });
}

showItems();
