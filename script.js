document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var newItem = document.getElementById("newItem").value;
    if (newItem === "") {
      return;
    }
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    document.getElementById("itemList").appendChild(listItem);
    document.getElementById("newItem").value = "";
  });