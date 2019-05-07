var rota_raiz = 'http://dummy.restapiexample.com/api/v1';

function getAll(){
	$.ajax({
		url: 'http://dummy.restapiexample.com/api/v1/employees',
		type: 'GET',
		success: function (response){
			var result = JSON.parse(response);
			for (var i of result){
				if(i['employee_name'] === 'Gatuno'){
					var id = i['id'];
					console.log(i['id']);
					deleteById(id);
					
					
				}
			}
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})
}

function get(){
	$.ajax({
		url: 'http://dummy.restapiexample.com/api/v1/employee/32247',
		type: 'GET',
		success: function (response){
			console.log(response)
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})
}

function post(){
	$.ajax({
		url: 'http://dummy.restapiexample.com/api/v1/create',
		type: 'POST',
		dataType:'JSON',
		data:'{"name":"Gatuno","salary":"5000","age":"20"}',
		success: function (response){
			console.log(response)
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})
}

function put(){
	$.ajax({
		url: 'http://dummy.restapiexample.com/api/v1/update/32247',
		type: 'PUT',
		dataType:'JSON',
		data:'{"name":"Gatuno","salary":"8000","age":"20"}',
		success: function (response){
			console.log(response)
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})
}

function deleteId(){
	deleteById('32247');
}

function deleteNome(){
	$.ajax({
		url: 'http://dummy.restapiexample.com/api/v1/employees',
		type: 'GET',
		success: function (response){
			console.log(response)
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})
}

function searchNome(json,nome){
	
}

function deleteById(id){
	$.ajax({
		url: 'http://dummy.restapiexample.com/api/v1/delete/'+id,
		type: 'DELETE',
		success: function (response){
			console.log(response)
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})
}

function A(){
	$.ajax({
		url: rota_raiz+'/employees',
		type: 'GET',
		success: function(response){
			let employees = JSON.parse(response);
			console.log(employees);
			let count = 0;
			for(let i of employees){
				count++;
				if(count == 15){
					break;
				}else{
					putEmployee(i);
				}
			}
		},
		error: function(msgerror){
			
		}
	})
}
function putEmployee(employee){
	let table = document.querySelector('#employees table');
	let tr = document.createElement('tr');
	table.appendChild(tr);
	
	let attribs = ['id','employee_name','employee_salary','employee_age']
	for(i of attribs){			
		let tdID = document.createElement('td');
		tr.appendChild(tdID);
		let idValue = document.createTextNode(employee[i]);
		tdID.appendChild(idValue);
	}
	
}


function B(){
	var TA = document.getElementById("test");
	console.log(TA);
	let input = document.querySelector('#B');
	let rota = rota_raiz + "/employee/" + input.value;
	console.log(rota);
	$.ajax({
		url: rota,
		type: 'GET',
		success: function(result){
			let person = JSON.parse(result);
			let valuePrint = JSON.stringify(person);
			console.log(valuePrint);
			TA.value = valuePrint;
			
		},
		error: function(result){
			
		}
	})
}