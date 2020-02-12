/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction () {


	var shipName = document.getElementById("shippingName").value;
	var shipZip = document.getElementById("shippingZip").value;

	if (document.getElementById("same").checked) {

		document.getElementById("billingName").value = shipName;
		document.getElementById("billingZip").value = shipZip;
		}
	else {
		document.getElementById("billingName").value = null;
		document.getElementById("billingZip").value = null;
		}

}

function checking () {

	var shipName = document.getElementById("shippingName").value;
	var shipZip = document.getElementById("shippingZip").value;

	var billName = document.getElementById("billingName").value;
	var billZip = document.getElementById("billingZip").value;

	if (shipName === billName && shipZip === billZip ){
		alert("Shipping and Billing Information are the same. Data Sent to Server");
	}

	else {
		alert('Data Sent To Server')
	}

}