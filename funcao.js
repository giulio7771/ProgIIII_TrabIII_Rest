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