const c_URL = "http://localhost:1234/";
var usuarios = [];
var livros = [];
var v_index = false;

function getNav()
{
	let resultado = "";
	let v1 = "";
	let v2 = "";
	if (v_index)
	{
		v1 = "<a class='nav-link active' style='color:#FFFFFF;padding-top:13px;' href='#' onclick='doLogin();'><img src='imagens/icone_login.jpg' style='height:27.5px;width:26px;' /></a>";
		v2 = "<li class='nav-item' style='width:37%;'></li>";
	}
	else
	{
		//debugger;
		if (localStorage.getItem('token_usuario') != null)
		{
			v1 = "<a class='nav-link active' style='color:#FFFFFF;padding-top:13px;' aria-current='page' href='#' id='doLogout'><img src='imagens/icone_logoff.jpg' style='height:27.5px;width:26px;' /></a>";
			v2 += "<li class='nav-item' style='width:11%;text-align:center;font-weight:bold;padding-top:11px;color:#FFFFFF;'></li>";
			v2 += "<li class='nav-item' style='width:7%;text-align:center;font-weight:bold;padding-top:5px;color:#FFFFFF;'><a class='nav-link' style='color:#FFFFFF;' href='#' id='conteudos1'>CRUD's</a></li>";
			v2 += "<li class='nav-item' style='width:1%;text-align:center;font-weight:bold;padding-top:11px;color:#FFFFFF;'>|</li>";
			v2 += "<li class='nav-item' style='width:7%;text-align:center;font-weight:bold;padding-top:5px;color:#FFFFFF;'><a class='nav-link' style='color:#FFFFFF;' href='#' id='conteudos2'>Livros</a></li>";
			v2 += "<li class='nav-item' style='width:11%;text-align:center;font-weight:bold;padding-top:11px;color:#FFFFFF;'></li>";
		}
	}
	resultado += "<div class='container-fluid' style='background-color:#000000;width:100%;'>";
	resultado += "	<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>";
	resultado += "		<span class='navbar-toggler-icon'></span>";
	resultado += "	</button>";
	resultado += "	<div class='collapse navbar-collapse' style='width:100%;' id='navbarNav'>";
	resultado += "		<ul class='navbar-nav me-auto mb-2 mb-lg-0' style='width:1510px;'>";
	resultado += "			<li class='nav-item' style='width:7%;'></li>";
	resultado += "			<li class='nav-item' style='width:35%;text-align:center;font-weight:bold;padding-top:5px;'><div id='login'></div></li>";
	resultado += "			<li class='nav-item' style='width:16%;text-align:center;'>";
	resultado += "				<div class='nav-link active' style='color:#FFFFFF;font-size:20px;font-weight:bold;text-align:center;padding:10px 0px 10px 0px;'>Minha Estante</div>";
	resultado += "			</li>";
	resultado += "			{2}";
	resultado += "			<li class='nav-item' style='width:5%;text-align:center;'>{1}</li>";
	resultado += "		</ul>";
	resultado += "	</div>";
	resultado += "</div>";
	
	resultado = resultado.replace("{1}", v1);
	resultado = resultado.replace("{2}", v2);
	
	$("nav").html(resultado);
}

function getNavOut()
{
	let resultado = "";
	let v1 = "";
	let v2 = "";
	if (v_index)
	{
		v1 = "<a class='nav-link active' style='color:#FFFFFF;padding-top:13px;' href='#' onclick='doLogin();'><img src='imagens/icone_login.jpg' style='height:27.5px;width:26px;' /></a>";
		v2 = "<li class='nav-item' style='width:37%;'></li>";
	}
	resultado += "<div class='container-fluid' style='background-color:#000000;width:100%;'>";
	resultado += "	<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>";
	resultado += "		<span class='navbar-toggler-icon'></span>";
	resultado += "	</button>";
	resultado += "	<div class='collapse navbar-collapse' style='width:100%;' id='navbarNav'>";
	resultado += "		<ul class='navbar-nav me-auto mb-2 mb-lg-0' style='width:1510px;'>";
	resultado += "			<li class='nav-item' style='width:7%;'></li>";
	resultado += "			<li class='nav-item' style='width:35%;text-align:center;font-weight:bold;padding-top:5px;'><div id='login'></div></li>";
	resultado += "			<li class='nav-item' style='width:16%;text-align:center;'>";
	resultado += "				<div class='nav-link active' style='color:#FFFFFF;font-size:20px;font-weight:bold;text-align:center;padding:10px 0px 10px 0px;'>Minha Estante</div>";
	resultado += "			</li>";
	resultado += "			{2}";
	resultado += "			<li class='nav-item' style='width:5%;text-align:center;'>{1}</li>";
	resultado += "		</ul>";
	resultado += "	</div>";
	resultado += "</div>";
	
	resultado = resultado.replace("{1}", v1);
	resultado = resultado.replace("{2}", v2);
	
	$("nav").html(resultado);
}

function getNavIn()
{
	let resultado = "";
	let v1 = "";
	let v2 = "";
	if (v_index)
	{
		v1 = "<a class='nav-link active' style='color:#FFFFFF;padding-top:13px;' href='#' onclick='doLogin();'><img src='imagens/icone_login.jpg' style='height:27.5px;width:26px;' /></a>";
		v2 = "<li class='nav-item' style='width:37%;'></li>";
	}
	else
	{
		//debugger;
		if (localStorage.getItem('token_usuario') != null)
		{
			v1 = "<a class='nav-link active' style='color:#FFFFFF;padding-top:13px;' aria-current='page' href='#' id='doLogout'><img src='imagens/icone_logoff.jpg' style='height:27.5px;width:26px;' /></a>";
			v2 += "<li class='nav-item' style='width:11%;text-align:center;font-weight:bold;padding-top:11px;color:#FFFFFF;'></li>";
			v2 += "<li class='nav-item' style='width:7%;text-align:center;font-weight:bold;padding-top:5px;color:#FFFFFF;'><a class='nav-link' style='color:#FFFFFF;' href='#' id='conteudos1'>CRUD's</a></li>";
			v2 += "<li class='nav-item' style='width:1%;text-align:center;font-weight:bold;padding-top:11px;color:#FFFFFF;'>|</li>";
			v2 += "<li class='nav-item' style='width:7%;text-align:center;font-weight:bold;padding-top:5px;color:#FFFFFF;'><a class='nav-link' style='color:#FFFFFF;' href='#' id='conteudos2'>Livros</a></li>";
			v2 += "<li class='nav-item' style='width:11%;text-align:center;font-weight:bold;padding-top:11px;color:#FFFFFF;'></li>";
		}
	}
	resultado += "<div class='container-fluid' style='background-color:#000000;width:100%;'>";
	resultado += "	<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>";
	resultado += "		<span class='navbar-toggler-icon'></span>";
	resultado += "	</button>";
	resultado += "	<div class='collapse navbar-collapse' style='width:100%;' id='navbarNav'>";
	resultado += "		<ul class='navbar-nav me-auto mb-2 mb-lg-0' style='width:1510px;'>";
	resultado += "			<li class='nav-item' style='width:7%;'></li>";
	resultado += "			<li class='nav-item' style='width:35%;text-align:center;font-weight:bold;padding-top:5px;'><div id='login'></div></li>";
	resultado += "			<li class='nav-item' style='width:16%;text-align:center;'>";
	resultado += "				<div class='nav-link active' style='color:#FFFFFF;font-size:20px;font-weight:bold;text-align:center;padding:10px 0px 10px 0px;'>Minha Estante</div>";
	resultado += "			</li>";
	resultado += "			{2}";
	resultado += "			<li class='nav-item' style='width:5%;text-align:center;'>{1}</li>";
	resultado += "		</ul>";
	resultado += "	</div>";
	resultado += "</div>";
	
	resultado = resultado.replace("{1}", v1);
	resultado = resultado.replace("{2}", v2);
	
	$("nav").html(resultado);
}

async function getUsuario()
{
	//debugger;
	const auth = JSON.parse(localStorage.getItem('auth'));
	const isAuth = !!auth;

	if (isAuth)
	{
		$('#login').html(`<button class="nav-link" style='color:#FFFFFF;font-style:italic;' id="goToDados">${auth.user.name}</button>`);
		localStorage.setItem("dados_usuario", JSON.stringify({ user: auth.user }));
		localStorage.setItem("token_usuario", JSON.stringify({ token: auth.token }));
		return auth.user;
	}
}

function doLogin()
{
	location.href = "auth/login.html";
}

function Listar(p_modulo)
{
	const token = localStorage.getItem('token_usuario').replace('{"token":"', "").replace('"}', "");
	let resultado = [];
	debugger;
	jQuery.ajax
	({
		type: "GET",
		dataType: "json",
		url: c_URL + p_modulo,
		async: false,
		headers:
		{
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": "Bearer " + token,
		},
		success: function (data)
		{
			debugger;
			if (p_modulo == "usuarios")
			{
				usuarios = [];
				for (let i = 0; i < data.length; i++)
					usuarios.push({ "_id": data[i]._id, "name": data[i].name, "email": data[i].email, "password": data[i].password });
				resultado = usuarios;
			}
			else
			{
				livros = [];
				for (let i = 0; i < data.length; i++)
					livros.push({ "_id": data[i]._id, "title": data[i].title, "cape": null });
				resultado = livros;
			}
		},
		error: function (e)
		{
			debugger;
			Swal.fire({ title: "Erro interno", text: e.responseJSON.error, icon: "error" });
		}
	});
	return resultado;
}

function Editar(p_modulo, _ID)
{
	//debugger;
	if (p_modulo == "usuarios")
	{
		for (let i = 0; i < usuarios.length; i++)
		{
			if (usuarios[i]._id == _ID)
			{
				$("#hidID").val(usuarios[i]._id);
				$("#txtName").val(usuarios[i].name);
				$("#txtEmail").val(usuarios[i].email);
				$("#txtPassword").val(usuarios[i].password);
				return;
			}
		}
	}
	else
	{
		for (let i = 0; i < livros.length; i++)
		{
			if (livros[i]._id == _ID)
			{
				$("#hidID").val(livros[i]._id);
				$("#txtTitle").val(livros[i].title);
				$("#txtCape").val(livros[i].cape);
				// (new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(products[i].price).replace("R$","").trim())
				return;
			}
		}				
	}
}

const salvarDado = (p_modulo) =>
{
	const c_ID = $("#hidID").val();
	let v_body;
	if (p_modulo == "usuarios")
	{
		v_body = { _id: null, name: $("#txtName").val(), email: $("#txtEmail").val(), password: $("#txtPassword").val() }
				
		if (v_body.name == "")
		{
			Swal.fire({ title: "Cadastro", text: "Favor inserir o nome", icon: "error" });
			return;
		}

		if (v_body.email == "")
		{
			Swal.fire({ title: "Cadastro", text: "Favor inserir o e-mail", icon: "error" });
			return;
		}

		if (v_body.password == "")
		{
			Swal.fire({ title: "Cadastro", text: "Favor inserir a senha", icon: "error" });
			return;
		}
	}
	else
	{
		v_body = { _id: null, title: $("#txtTitle").val(), cape: $("#txtCape").val() }
		
		if (v_body.title == "")
		{
			Swal.fire({ title: "Cadastro", text: "Favor inserir o título", icon: "error" });
			return;
		}
	}
	// replaceAll($("#price").val(), ".", "").replace(",", "")

	let v_method = "POST";
	debugger;
	c_URL += p_modulo + "/";
	if (c_ID != "")
	{
		v_method = "PUT";
		v_body._id = c_ID;
		c_URL = c_URL + c_ID;
	}
	fetch(c_URL,
	{
		method: v_method,
		headers: { 'Content-Type': 'application/json', Accept: 'application/json', },
		body: JSON.stringify(v_body)
	})
	Swal.fire({ title: "Cadastro", text: "Dados salvos com sucesso.", icon: "success" });
}

function Excluir(p_modulo, _ID)
{
	Swal.fire({ title: "Tem certeza que deseja excluir?",  showDenyButton: true, showCancelButton: true, confirmButtonText: "OK", denyButtonText: "Cancelar" })
	.then((result) =>
	{
		if (result.isConfirmed)
		{
			let v_mensagem = "", v_icone = "";
			jQuery.ajax
			({
				type: "DELETE",
				dataType: "json",
				url: c_URL + p_modulo + "/" + _ID,
				async: false,
				success: function (data)
				{
					v_mensagem = "Dados excluídos com sucesso.";
					v_icone = "success";
				},
				error: function (e)
				{
					console.log(e.message);
					v_mensagem = "Erro na exclusão: " + e.message;
					v_icone = "error";
				}
			});
			Swal.fire({ title: "Exclusão", text: v_mensagem, icon: v_icone });
		}
	});
	/*if (confirm("Tem certeza que deseja excluir?"))
	{
		let v_mensagem = "", v_icone = "";
		jQuery.ajax
		({
			type: "DELETE",
			dataType: "json",
			url: c_URL + p_modulo + "/" + _ID,
			async: false,
			success: function (data)
			{
				v_mensagem = "Dados excluídos com sucesso.";
				v_icone = "success";
			},
			error: function (e)
			{
				console.log(e.message);
				v_mensagem = "Erro na exclusão: " + e.message;
				v_icone = "error";
			}
		});
		Swal.fire({ title: "Exclusão", text: v_mensagem, icon: v_icone });
	}*/
}

function replaceAll(palavraOuFrase, antes, depois)
{
	while (palavraOuFrase.indexOf(antes) != -1)
		palavraOuFrase = palavraOuFrase.replace(antes, depois);
	return palavraOuFrase;
}

function formatarDecimal(a, maxlength, e, r, t)
{
	if (a.value.length > maxlength) return !1;
	let n = "", h = j = 0, u = tamanho2 = 0, l = ajd2 = "",
		o = window.Event ? t.which : t.keyCode;
	if (13 == o || 8 == o)
		return !0;
	if (n = String.fromCharCode(o), -1 == "0123456789".indexOf(n))
		return !1;
	for (u = a.value.length, h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++);
	for (l = ""; h < u; h++)
		-1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
	if (l += n, 
		0 == (u = l.length) && (a.value = ""), 
		1 == u && (a.value = "0" + r + "0" + l),
		2 == u && (a.value = "0" + r + l),
		u > 2)
	{
		for (ajd2 = "", j = 0, h = u - 3; h >= 0; h--)
			3 == j && (ajd2 += e, j = 0), ajd2 += l.charAt(h),
			j++;
		for (a.value = "", tamanho2 = ajd2.length, h = tamanho2 - 1; h >= 0; h--)
			a.value += ajd2.charAt(h);
		a.value += r + l.substr(u - 2, u)
	}
	return !1
}


function doLogout()
{
	const v_link = "auth/login.html";
	localStorage.removeItem('token_usuario');
	localStorage.removeItem('dados_usuario');
	$('#login').html("<a class='nav-link' href='" + v_link + "'>Login</a>");
	window.open(v_link, "_self");
}

function mock()
{
	users = [];
	users.push({ "_id": "665482027638bfb753a6b150", "name": "Cássio Matos", "email": "cassiolrm30@gmail.com", "password": "teste" });
	users.push({ "_id": "665482027638bfb753a6b151", "name": "Fabrícia Santos", "email": "cassiolrm30@gmail.com", "password": "teste" });
	users.push({ "_id": "665482027638bfb753a6b152", "name": "Rodrigo Mori", "email": "cassiolrm30@gmail.com", "password": "teste" });
	users.push({ "_id": "665482027638bfb753a6b153", "name": "João Pimentel", "email": "cassiolrm30@gmail.com", "password": "teste" });
	users.push({ "_id": "665482027638bfb753a6b154", "name": "Renan Lôbo", "email": "cassiolrm30@gmail.com", "password": "teste" });
	
	products = [];
	products.push({ "_id": "665482027638bfb753a6b155", "name": "Produto I", "price": "457.00" });
	products.push({ "_id": "665482027638bfb753a6b156", "name": "Produto II", "price": "258.02" });
	products.push({ "_id": "665482027638bfb753a6b157", "name": "Produto III", "price": "892.79" });
	products.push({ "_id": "665482027638bfb753a6b158", "name": "Produto IV", "price": "308.35" });
	products.push({ "_id": "665482027638bfb753a6b159", "name": "Produto V", "price": "426.05" });
	
	ja_tem_carga = true;
}

$(document).ready(function ()
{
	if (localStorage.getItem('token_usuario') == null)
		getNavOut();
	else
		getNavIn();

	$('#goToDados').click(function (e)
	{
		e.preventDefault();
		window.open('../dados.html', '_self');
	});
});