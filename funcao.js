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

function C(){
	var nome = document.getElementById("c-nome").value;
	var idade = document.getElementById("c-idade").value;
	var salario = document.getElementById("c-salario").value;
	let rota = rota_raiz + "/create";
	console.log("C rota:"+rota);

	$.ajax({
		url: rota,
		type: 'POST',
		dataType:'JSON',
		data:'{"name":"'+nome+'","salary":"'+idade+'","age":"'+salario+'"}',
		success: function (response){
			//let person = JSON.parse(response);
			person = response;
			console.log("response:"+JSON.stringify(person));
			putEmployee(person);
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})


}

function D(){
	var nome = document.getElementById("d-nome").value;
	var idade = document.getElementById("d-idade").value;
	var salario = document.getElementById("d-salario").value;
	var id = document.getElementById("d-id").value;
	let rota = rota_raiz + "/update/"+id;
	$.ajax({
		url: rota,
		type: 'PUT',
		dataType:'JSON',
		data:'{"name":"'+nome+'","salary":"'+salario+'","age":"'+idade+'"}',
		success: function (response){
			console.log(response)
			putEmployee(JSON.parse(response));
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})

}

function E(){
	var id = document.getElementById("e-id").value;
	let rota = rota_raiz + "/delete/" + id; 
	$.ajax({
		url: rota,
		type: 'DELETE',
		dataType:'JSON',
		success: function (response){
			console.log("E response: "+response)
			
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})



}

function F(){
	var name = document.getElementById("f-name").value;
	var person = null;
	person = getByNameG(name);
	console.log("F person get by name:::::::"+person);
	if(person != null){
		if(confirm("Deseja excluir?: "+person['employee_name'])){
			let id = person[id];
			let rota = rota_raiz + "/delete/" + id; 
			$.ajax({
				url: rota,
				type: 'DELETE',
				dataType:'JSON',
				success: function (response){
					console.log("E response: "+response)
					
				},
				error: function(msgerror){
					console.log(msgerror)
				}
			})
		
		}

	}

}
function getByNameG(name){
$.ajax({
		url: rota_raiz + '/employees',
		type: 'GET',
		success: function (response){
			var result = JSON.parse(response);
			for (var i of result){
				if(i['employee_name'] == name){
					return i;
					
				}
			}
		},
		error: function(msgerror){
			console.log(msgerror)
		}
	})

}






























