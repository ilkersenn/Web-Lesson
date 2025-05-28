function notOgren() {
	var not = document.getElementById("notogrenid").value;
	
	switch(true){
		case(not>=90):
		alert("A Not Aldınız");
		break;

		case(not<=89 && not>80 ):
		alert("B Not Aldınız");
		break;

		case(not<=80 && not>70 ):
		alert("C Not Aldınız");
		break;

		case(not<=70 && not>60 ):
		alert("D Not Aldınız");
		break;

		case(not<60):
		alert("F Not Aldınız");
	}

}