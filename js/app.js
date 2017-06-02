(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services"));
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;
	
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;
			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "https://d30y9cdsu7xlg0.cloudfront.net/png/7294-200.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click", function(){
				modal.classList.add("hide");
			})
		})
	});
})()

function cosita(){
	var fotos = Array.from(document.getElementsByClassName("col-4"));
	var cont = document.getElementById("contenedor");
	var caja, close, icon;

		fotos.forEach(function(pic){
			pic.addEventListener("click", function(){
				caja = document.createElement("div");
				caja.classList.add("caja-contenedora");
				caja.innerHTML = pic.innerHTML;

				cont.appendChild(caja);
				cont.classList.remove("hide");

				close = document.createElement("div");
				close.classList.add("close");
				icon = document.createElement("i");
				icon.setAttribute("class", "fa fa-times fa-2x");
				icon.setAttribute("aria-hidden", "true")

//Aqui la funcion cumple con lo que debe hacer, pero no elimina el background de fondo.
				close.appendChild(icon);
				caja.appendChild(close);
				close.addEventListener("click", function(){
					caja.classList.add("hide")
				})
	
			});
		});
}
cosita()
