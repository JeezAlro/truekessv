
	
	var $menuUser = $('.menuUser'),
		$mostrarMenu = $('.miavatar'),
		$categorias = $('.categoriasMobil'),
		$mostrarCateg = $('.menuMobil'),
		$mostrarMensajes = $('.mail'),
		$mostrarNotificaciones = $('.icon-bell'),
		$mostrarOrdenes = $('.icon-orden'),
		$notimjs = $('.notimjs'),
		$notinot = $('.notinot'),
		$notiord = $('.notiord'),
		$popmsm = $('.mjs'),
		$popnot = $('.not'),
		$popord = $('.ord'),
		$omobil = $('.omobil'),
		//Prueba de incio
		$iniciar = $('.iniciar'),
		$menu = $('.menu'),
		$opublicados = $('.opublicados'),
		$publicados = $('.publicados'),
		$opuntos = $('.opuntos'),
		$puntos = $('.puntos'),
		$ocontactame = $('.ocontactame'),
		$contactame = $('.contactame'),
		$sobredes = $('.sobredes'),
		$sobremi = $('.sobremi'),
		$selecUbicacion = $('#selecUbicacion'),
		$iconSelecUbicacion = $('#iconSelecUbicacion'),
		$ubicaciones = $('#ubicaciones')



/*setInterval(function(){
	var $ph = ['iphone','cama','televisor','honda','guitarra','play station','samsung','lapto','moto','bicicleta'],
		$min = 0,
		$max = $ph.length,
	   	$alea = Math.floor(Math.random() * ($max - $min + 1)) + $min;
	$('#search').attr('placeholder', $ph[$alea])
}, 2000);*/

function mostrarMenuUser(e){
	if($(document).width() < 1000){
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarCateg.removeClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.removeClass('active')
	$menuUser.slideToggle();
	$categorias.slideUp();
	return false
}else{
	$popmsm.hide(0);
	$popnot.hide(0);
	$popord.hide(0);
	$mostrarCateg.removeClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.removeClass('active')
	$menuUser.fadeToggle(200);
	$categorias.hide();
	return false
}

}
/*function mostrarCategorias(e){
	if($(document).width() < 1000){
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarCateg.toggleClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.removeClass('active')
	$categorias.slideToggle(300);
	$menuUser.slideUp();
	$('.omobil').children("ul").slideUp();
	$('.omobil').children('a').removeClass('icono-menos active').addClass('icono-mas');
	return false
}else{
	$popmsm.hide();
	$popnot.hide();
	$popord.hide();
	$mostrarCateg.toggleClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.removeClass('active')
	$categorias.slideToggle(300);
	$menuUser.slideUp();
	$('.omobil').children("ul").slideUp();
	$('.omobil').children('a').removeClass('icono-menos active').addClass('icono-mas');
	return false
}
}*/

function mostrarMjs(e){
 if($(document).width() < 1000){
	$notimjs.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$popmsm.slideToggle();
	$mostrarCateg.removeClass('active');
	$mostrarNotificaciones.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarMensajes.toggleClass('active')
	
}else{
	$notimjs.addClass('none');
	$menuUser.hide();
	$categorias.hide();
	$popnot.hide();
	$popord.hide();
	$popmsm.fadeToggle(200);
	$mostrarCateg.removeClass('active');
	$mostrarNotificaciones.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarMensajes.toggleClass('active')
	
}

return false
}
function mostrarNot(e){
	if($(document).width() < 1000){
	$notinot.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popmsm.slideUp();
	$popord.slideUp();
	$popnot.slideToggle();
	$mostrarCateg.removeClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.toggleClass('active')
}else{
	$notinot.addClass('none');
	$menuUser.hide();
	$categorias.hide();
	$popmsm.hide();
	$popord.hide();
	$popnot.fadeToggle(200);
	$mostrarCateg.removeClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.toggleClass('active')
}
	return false


}
function mostrarOrd(e){
	$notiord.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideToggle();
	$mostrarCateg.removeClass('active');
	$mostrarMensajes.removeClass('active')
	$mostrarNotificaciones.removeClass('active')
	$mostrarOrdenes.toggleClass('active')

	return false

}
function ocultarMenus(e){
	$menuUser.hide();
	$popmsm.hide();
	$popnot.hide();
	$popord.hide();
	$mostrarMensajes.removeClass('active')
	$mostrarOrdenes.removeClass('active')
	$mostrarNotificaciones.removeClass('active')
}
/**function mostraSubCategorias(e){
	 $(this).children('a').toggleClass('icono-mas icono-menos active');
	 $(this).siblings('.omobil').children('a').removeClass('icono-menos active').addClass('icono-mas');
	 $(this).siblings(".omobil").children("ul").slideUp();
	 $(this).children("ul").slideToggle();
}*/
function mostrarPublicados(e){
	$(this).addClass('active').siblings('a').removeClass('active')
	$publicados.removeClass('none')
	$puntos.addClass('none')
	$contactame.addClass('none')
	$('img').load(function(){
            $(".container").masonry();
        });
        $(".container").masonry();
	return false
}
function mostrarPuntos(e){

	$(this).addClass('active').siblings('a').removeClass('active')
	$puntos.removeClass('none')
	$publicados.addClass('none')
	$contactame.addClass('none')
	$(".container").masonry();
	return false

}
function mostrarContactame(e){
	$(this).addClass('active').siblings('a').removeClass('active')
	$contactame.removeClass('none')
	$puntos.addClass('none')
	$publicados.addClass('none')
	return false


}
function mostrarSobremi(e){
	$sobremi.slideToggle(100)
	return false
}
function mismoalto(){

    var altomax = 0; 
    $('.mismoalto').height('auto') 
    $('.mismoalto').each(function(){  
        if($(this).height() > altomax){  
            altomax = $(this).height();  
        }  
    });  
    $('.mismoalto').height(altomax);

}
function redimencion(e){

	$('img').load(function(){
            $(".container").masonry();
        });
        $(".container").masonry();
        if( $(document).width() > 960){
		$('.sobremi').slideDown(0)
			if($('.contactame').attr('class')== "bloque contactame center"){
				$('.contactame').addClass('none')
				$('.publicados').removeClass('none')
				$('.opublicados').addClass('active').siblings().removeClass('active')
			}
		
	}else{
		$('.sobremi').slideUp(0)
	}
	if ( $(document).width() >=510) {
		$ubicaciones.slideUp(0)
		$iconSelecUbicacion.removeClass('icon-up').addClass('icon-down')
	};
	mismoalto();



}
function mostrarUbicaciones(e){
	$ubicaciones.slideToggle(200)
	$iconSelecUbicacion.toggleClass('icon-down icon-up')
	
	return false
	
}
$( window ).resize(redimencion);
$(document).click(ocultarMenus)
$mostrarMensajes.click(mostrarMjs)
$mostrarMenu.click(mostrarMenuUser)
$mostrarNotificaciones.click(mostrarNot)
$mostrarOrdenes.click(mostrarOrd)
/*$mostrarCateg.click(mostrarCategorias)
$omobil.click(mostraSubCategorias)*/
$opublicados.click(mostrarPublicados)
$opuntos.click(mostrarPuntos)
$ocontactame.click(mostrarContactame)
$sobredes.click(mostrarSobremi)
$selecUbicacion.click(mostrarUbicaciones)
function sesion(e){
	$menu.removeClass('none')
	$iniciar.css('display','none')
	
}
//Prueba
function escribirMensaje(e){
	$('.contenedorg').fadeIn()
	$('.escribirMensaje').fadeIn()
	return false

}
function eliminarPublicado(e){
	$('.contenedorg').fadeIn()
	$('.eliminarPublicado').fadeIn()
	return false

}

function cerrar(e){
	$(".contenedorg").hide()
    $(e.target).closest('.escribirMensaje').parent('.contenedorg').show()
    $(e.target).closest('.eliminarPublicado').parent('.contenedorg').show()
    $(e.target).closest('.cancelar').parent('.eliminarPublicado').hide().parent('.contenedorg').hide()
    $(e.target).closest('.cerrar').parent().parent('.popalert').hide().parent('.contenedorg').hide()
    

}  
function teclas(){
	if (event.which == 27) {
		cerrar();
	}
}


   
        // Evento click
$('.borrarPublicado').click(eliminarPublicado)
$('.enviarMensaje').click(escribirMensaje)
$('.contenedorg').click(cerrar)
$('.cerrar').click(cerrar)
$('.cancelar').click(cerrar)
$(document).keydown(teclas)
$('.thumbnail').click(changeImgPublished).hover(changeImgPublished)
$('#imgPublished').click(changeImgPublishedBig)
var imgC = 1;
var thumbnail = $('.thumbnails').children().length;
function changeImgPublishedBig(e){
	var pos = $(this).offset();
    var posX = (e.pageX - pos.left);
    var widthI = $(this).width()/2
   

	if (imgC < thumbnail  && posX > widthI){
	imgC = imgC+1
    var srcB = $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').children().attr('src')
    $('#imgPublished').find('img').attr('src', srcB )
    $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').addClass('thumbnailActive').siblings().removeClass('thumbnailActive');
	} 
	else if(imgC <= thumbnail  && posX < widthI && imgC > 1){
		imgC = imgC-1
    var srcB = $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').children().attr('src')
    $('#imgPublished').find('img').attr('src', srcB )
    $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').addClass('thumbnailActive').siblings().removeClass('thumbnailActive');

	}
	else if(imgC ==1  && posX < widthI){
		imgC = thumbnail;
    var srcB = $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').children().attr('src')
    $('#imgPublished').find('img').attr('src', srcB )
    $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').addClass('thumbnailActive').siblings().removeClass('thumbnailActive');
  

	}else{
		imgC=1;
		var srcB = $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').children().attr('src')
    $('#imgPublished').find('img').attr('src', srcB )
    $('.thumbnails').children('.thumbnail:nth-child('+imgC+')').addClass('thumbnailActive').siblings().removeClass('thumbnailActive');
  

	}
	console.log(imgC)
	
}
function changeImgPublished(e){
	var indexP = $(this).index()+1 
	imgC = indexP
	$(this).addClass('thumbnailActive').siblings().removeClass('thumbnailActive')
	var srcN = $(this).children("img:first").attr("src");
	$('#imgPublished').children("img:first").attr("src" , srcN)
}


$('#cemail').change(function(e){
	
	if($('#cemail').val() === $('#email').val()){
		$('#cemail').removeClass('inputFormB')
		$('#cemail').addClass('inputForm')
		$('.cemailB').fadeOut();

	} 
	else if($('#cemail').val() == "" ){
		$('#cemail').removeClass('inputFormB')
		$('#cemail').addClass('inputForm')
		$('.cemailB').fadeOut();
	}
	else {
		
		$('#cemail').removeClass('inputForm')
		$('#cemail').addClass('inputFormB')
		$('.cemailB').fadeIn();

	}
});
$('#email').change(function(e){
	$('#cemail').val("");
	if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
		$('#email').removeClass('inputForm')
		$('#email').addClass('inputFormB')
		$('.emailB').fadeIn();
	} else{
		$('#email').removeClass('inputFormB')
		$('#email').addClass('inputForm')
		$('.emailB').fadeOut();
	}
	if($('#email').val()==""){
		$('#email').removeClass('inputFormB')
		$('#email').addClass('inputForm')
		$('.emailB').fadeOut();
	}

	if($('#cemail').val() === $('#email').val()){
		$('#cemail').removeClass('inputFormB')
		$('#cemail').addClass('inputForm')
		$('.cemailB').fadeOut();

	} 
	else if($('#cemail').val() == "" ){
		$('#cemail').removeClass('inputFormB')
		$('#cemail').addClass('inputForm')
		$('.cemailB').fadeOut();
	}
	else {
		
		$('#cemail').removeClass('inputForm')
		$('#cemail').addClass('inputFormB')
		$('.cemailB').fadeIn();

	}
});

$('#cpassword').change(function(e){
	
	if($('#cpassword').val() === $('#password').val()){
		$('#cpassword').removeClass('inputFormB')
		$('#cpassword').addClass('inputForm')
		$('.cpasswordB').fadeOut();

	} 
	else if($('#cpassword').val() == "" ){
		$('#cpassword').removeClass('inputFormB')
		$('#cpassword').addClass('inputForm')
		$('.cpasswordB').fadeOut();
	}
	else {
		
		$('#cpassword').removeClass('inputForm')
		$('#cpassword').addClass('inputFormB')
		$('.cpasswordB').fadeIn();

	}
});
$('#password').change(function(e){
	$('#cpassword').val("");
	if($('#password').val().length < 4){
		$('#password').removeClass('inputForm').addClass('inputFormB')
		$('.cpasswordC').fadeIn()
	} else{
		$('#password').removeClass('inputFormB').addClass('inputForm')
		$('.cpasswordC').fadeOut()

	}
	if($('#password').val() == ""){
		$('#password').removeClass('inputFormB').addClass('inputForm')
		$('.cpasswordC').fadeOut()
	}
	if($('#cpassword').val() === $('#password').val()){
		$('#cpassword').removeClass('inputFormB')
		$('#cpassword').addClass('inputForm')
		$('.cpasswordB').fadeOut();

	} 
	else if($('#cpassword').val() == "" ){
		$('#cpassword').removeClass('inputFormB')
		$('#cpassword').addClass('inputForm')
		$('.cpasswordB').fadeOut();
	}
	else {
		
		$('#cpassword').removeClass('inputForm')
		$('#cpassword').addClass('inputFormB')
		$('.cpasswordB').fadeIn();

	}
});
var $zona =['todo El Salvador','Auchapán','Santa Ana','Sonsonate','La Libertad','Chalatenango','San Salvador','Cuscatlán','La Paz','San Vicente','Cabañas','Usulután','San Miguel','Morazán','La Unión']

function mostar_dep(e){
	$('#cmapa').addClass('sprinter-zone'+e)
	$('#nombreUbicacion').html($zona[e]).removeClass('btnMapa').addClass('textAzul textLarge')
}
function ocultar_dep(e){
	$('#cmapa').removeClass('sprinter-zone'+e)
	$('#nombreUbicacion').html($zona[0]).removeClass('textAzul textLarge').addClass('btnMapa')
}
