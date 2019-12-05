var rowId = '0';
var grandTotal = 0;
function addItem() {

    var dynamicTable = document.getElementById("dynamic-row");
    var prodectName = document.getElementById("product-name");
    var unit = document.getElementById("unit");
    var unitPrice = document.getElementById("unit-price");

    //console.log(dynamicTable);
    // var totalvalue = (parseFloat(unitPrice.value) * parseFloat(unit.value));
    // grandTotal += totalvalue;
    // dynamicTable.innerHTML = "<tr id ='" + rowId + "<td>" + prodectName.value + "</td><td>" + unit.value + "</td><td>" + unitPrice.value + "</td><td>" + totalvalue + "</td> <td><button onclick='deleteItem('dynamic-row','" + (rowId) + "')'>delete</button></td><td><button onclick='editItem('" + (rowId) + "')'>edit</button></td></tr>";


    var row = document.createElement("tr");
    row.setAttribute('id', rowId);
    var product = document.createElement("td");

    var tdUnit = document.createElement("td");

    var tdUnitPrice = document.createElement("td");

    var total = document.createElement("td");

    var editDelete = document.createElement("td");

    var deletButton = document.createElement("button");
    deletButton.textContent = 'delete';
    var functionWithArgumentForDelete = "deleteItem(" + "'dynamic-row','" + (rowId) + "')";
    deletButton.setAttribute("OnClick", functionWithArgumentForDelete);

    var editButton = document.createElement("button");
    editButton.setAttribute('id', "edit");
    editButton.textContent = 'edit';
    var functionWithArgumentForEdit = "editItem('" + (rowId++) + "')";
    editButton.setAttribute("OnClick", functionWithArgumentForEdit);

    if (unit.value == '' || unitPrice.value == '' || prodectName.value == '') {

        alert("Field requred !");
    }
    else {
        if (parseFloat(unit.value) < 0 || parseFloat(unitPrice.value) < 0) {

            alert("Unit or Unit Price should not be -'ve' !");
        }
        else {
            if (isFloat(Number(unit.value))) {
                alert("unit should be integer value !");
            }
            else {

                product.textContent = prodectName.value;
                tdUnit.textContent = unit.value;
                tdUnitPrice.textContent = unitPrice.value;
                var totalvalue = (parseFloat(unitPrice.value) * parseFloat(unit.value));
                totalvalue = totalvalue.toFixed(2);
                grandTotal += parseFloat(totalvalue);
                total.textContent = totalvalue;
                editDelete.appendChild(deletButton);
                editDelete.appendChild(editButton);
                row.appendChild(product);
                row.appendChild(tdUnit);
                row.appendChild(tdUnitPrice);
                row.appendChild(total);
                row.appendChild(editDelete);
                dynamicTable.appendChild(row);
                document.getElementById('grand-total-1').innerHTML = grandTotal;

            }

        }
    }

    document.getElementById("product-name").value = '';
    document.getElementById("unit").value = '';
    document.getElementById("unit-price").value = '';
    console.log(dynamicTable);
};

function deleteItem(tableId, rowId) {
    grandTotal -= document.getElementById(rowId).childNodes[3].innerHTML;
    document.getElementById('grand-total-1').innerHTML = grandTotal;
    document.getElementById(tableId).removeChild(document.getElementById(rowId));
};
function editItem(rowId) {
    document.getElementById(rowId).childNodes[4].innerHTML = "<button id='save' onclick='saveItem(" + rowId + ")'>save</button>"
    document.getElementById(rowId).childNodes[0].contentEditable = "true";
    document.getElementById(rowId).childNodes[2].innerHTML = "<input type='number' id='unit-price" + rowId + "'" + "value=" + document.getElementById(rowId).childNodes[2].innerHTML + ">";
    document.getElementById(rowId).childNodes[1].innerHTML = "<input type='number' id='unit" + rowId + "'" + "value=" + document.getElementById(rowId).childNodes[1].innerHTML + ">";
    grandTotal -= document.getElementById(rowId).childNodes[3].innerHTML;
};
function saveItem(rowId) {
    if (document.getElementById("unit-price" + rowId).value == '' || document.getElementById("unit" + rowId).value == '') {

        alert("Field requred !");
    }
    else {
        if (document.getElementById("unit-price" + rowId).value < 0 || document.getElementById("unit" + rowId).value < 0) {
            alert("Unit or Unit Price should not be -'ve' !");
        }
        else {
            if (isFloat(Number(document.getElementById("unit" + rowId).value))) {
                alert("unit should be integer value !");
            }
            else {
                document.getElementById(rowId).childNodes[4].innerHTML = "<button id='delete' onclick= deleteItem(" + "'dynamic-row'," + rowId + ")>delete</button><button id='edit' onclick='editItem(" + rowId + ")'>edit</button>"
                document.getElementById(rowId).childNodes[3].innerHTML = "<td>" + (document.getElementById("unit-price" + rowId).value * document.getElementById("unit" + rowId).value).toFixed(2) + "</td>";
                document.getElementById(rowId).childNodes[2].innerHTML = "<td>" + document.getElementById("unit-price" + rowId).value + "</td>";
                document.getElementById(rowId).childNodes[1].innerHTML = "<td>" + document.getElementById("unit" + rowId).value + "</td>";
                document.getElementById(rowId).contentEditable = "false";
                grandTotal += parseFloat(document.getElementById(rowId).childNodes[3].innerHTML);
                document.getElementById('grand-total-1').innerHTML = grandTotal;
            }
        }
    }
};

window.onload = function () {
    this.productId = '0';
    this.grandTotal = 0;
};

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
};