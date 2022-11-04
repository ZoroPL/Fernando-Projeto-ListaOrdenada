function retornaValor() {


	var find_Numbers = document.querySelector('input[name="fill-numbers"]');
	var write_html  = document.getElementById("result");

	const list_Numbers = find_Numbers.value.split(',');
	list_Numbers.sort();
	


	var empty_list = [];
	for (i = 0; i < list_Numbers.length; i++) {
		
		list_Numbers[i] = list_Numbers[i].replace(",NaN","");
		list_Numbers[i] = list_Numbers[i].replace("[","");
		list_Numbers[i] = list_Numbers[i].replace("]","");
		console.log(list_Numbers[i])
		empty_list.push(convert_to_float(list_Numbers[i]))

	} 

	empty_list.sort((a,b) => {
		return a -b;
		});


	write_html.innerHTML = empty_list;

	find_Numbers.value = '';

	
}


function onlynumber(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /^[0-9.,]+$/;
	//var regex = /^[0-9.]+$/; caso queira somente números
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
	   }
}


function convert_to_float(a) {
    var floatValue = +(a);
    return floatValue; 
}



function download_txt(){

	var name_arch = document.querySelector('input[name="title-arch"]').value;
	var string_random = document.querySelector('p[id="result"]').innerHTML;
	let data = string_random;
	let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
	const link= window.document.createElement('a');
	link.href = window.URL.createObjectURL(blob);
	link.download = name_arch+'.txt';
	link.click();
	window.URL.revokeObjectURL(link.href);				
}


function download_json(){

	var name_arch = document.querySelector('input[name="title-arch"]').value;
	var string_random = document.querySelector('p[id="result"]').innerHTML;

	if (name_arch == ''){
		var name_arch = "json"
	}

	let data = string_random;
	let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
	const link= window.document.createElement('a');
	link.href = window.URL.createObjectURL(blob);
	link.download = name_arch+'.json';
	link.click();
	window.URL.revokeObjectURL(link.href);				
}

