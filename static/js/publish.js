$('.contentCategorie').click(selectCategorie)
$('.selectSub').click(selectSub)
$('#backSelect').click(backSelection)
$('#back').click(back)
$('.typePublish').click(modePublish)
$('#changeType').click(changeModePublish)
$('#sellPrice').numeric_input({
  decimal: '.'
});
$('#revisar').click(comprobarPublish)

function comprobarPublish(){
	if($('#typePublish').val()==""){
		$('html,body').animate({scrollTop: $('#value').offset().top}, 300)
		console.log("poner tipo")
	}
	if($('#tinymce').html()=='<p><br data-mce-bogus="1"></p>'){
		$('html,body').animate({scrollTop: $('#description').offset().top}, 300)
		console.log("poner descripcion")
	}
	if($('#imgPrimary').val()==""){
		$('html,body').animate({scrollTop: $('#imgPrimaryC').offset().top}, 300)
		console.log("poner foto")
	}
	if($('#titlePublish').val()==""){
		$('html,body').animate({scrollTop: $('#titlePublishC').offset().top}, 300)
		console.log("poner titulo")
	}
	

}

function changeModePublish(){
	$(this).hide()
	$('.typePublish').show().removeClass('active')
	$('#value').children().hide()
	$('#value').find('input').val('')

}
function modePublish()
{ 
	var $value = $(this).attr('data-value');
	$(this).addClass('active').siblings('label').hide()
	$('#changeType').show()
	$('#typePublish').val($value)
	$('#value').children('.'+$value).fadeIn().siblings().hide()

}

 function dominio_base()
{
// capturamos la url
url_site = document.location.href

// La separamos por la doble barra
url_pos = url_site.indexOf('//');

// por un lado tenemos la url sin protocolos
url_limpia = url_site.substr(url_pos+2);

// y por otro lado el protocolo usado
url_prot = url_site.substr(0,url_pos+2);

// separamos todas las posibles carpetas
url_split = url_limpia.split('/');

// y obtenemos el dominio actual
url_base = url_prot + url_split[0];

return url_base;
}
function hashHandler(){
   var $oldHash =  window.location.href;
    var $Check;


	var $baseUrl = dominio_base();
    var detect = function()
    {
        if($oldHash==($baseUrl+"/Publish/SelectCategory"))
        {
            console.log("estoy en Publish/SelectCategory");
         	$('#publisherSelect').fadeIn()
			$('#detailsPublisher').hide()
			$('#rootCate').addClass('active').removeClass('complete')
			$('#rootDetail').removeClass('active')
			$('.publisherSubCategories').hide().removeClass('active')
			$('.publisherCategories').addClass('active')
	 	}
	  	else if($oldHash==($baseUrl+"/Publish/SelectSubCategory"))
	  	{
	  		console.log("estoy en Publish/SelectSubCategory");
	  		$('#publisherSelect').fadeIn()
			$('#detailsPublisher').hide()
			$('.publisherSubCategories').fadeIn().addClass('active')
			$('.publisherCategories').removeClass('active')
			$('#rootCate').addClass('active').removeClass('complete')
		$('#rootDetail').removeClass('active')
	 	}else if($oldHash==($baseUrl+"/Publish/Details")){
	 		console.log("estoy en /Publish/Details")
			$('#rootCate').removeClass('active').addClass('complete')
			$('#rootDetail').addClass('active')
			$('#publisherSelect').hide()
			$('#detailsPublisher').fadeIn()
	 	}

         
	};
	var chageUrl= function(){
		if($oldHash!= window.location.href){
			console.log('cambio')
			$oldHash = window.location.href
			detect();
		}
		
	}
    var $Check = setInterval(function(){ chageUrl() }, 100);
}



function back(){
	$('#publisherSelect').fadeIn()
	$('#detailsPublisher').hide()
	$('#rootCate').addClass('active').removeClass('complete')
	$('#rootDetail').removeClass('active')
	window.history.back();
	
}
function backSelection(){
	$('.publisherSubCategories').hide().removeClass('active')
	$('.publisherCategories').addClass('active')
	window.history.back();
}
function selectSub(){
	var value = $(this).attr('data-value');
	var $elemName = $(this).text();
	$('#rootCate').removeClass('active').addClass('complete')
	$('#rootDetail').addClass('active')
	$('#selectionSubCategorie').val(value)

	$('#subCategorie').text($elemName)
	$('#publisherSelect').hide()
	$('#detailsPublisher').fadeIn()
	stateObj ={publicar: 'Publisher/Details'}
	history.pushState(stateObj, "publicado", "Details")
	
	
}
function selectCategorie(){
	var value = $(this).attr('data-value');
	var $elemIcon = $(this).children('b').attr('class')
 	var $elemName = $(this).children('span').text();
	$(this).addClass('active').siblings().removeClass('active');
	$(this).hide().prependTo('#labelSelectCategories').fadeIn();
	$('.subCategoriesContent').hide().fadeIn(300);
	$('html,body').animate({scrollTop: $('.panelPublisher').offset().top}, 500);
	$('.publisherCategories').removeClass('active')
	$('.publisherSubCategories').addClass('active').fadeIn()
	$showSubId = ($(this).attr('id'))+'Sub';
	$('#'+$showSubId).fadeIn().siblings().hide();
	$('#backSelect').addClass('active');
	$('#selectionCategorie').val(value);
	$('#iconCate').attr('class', $elemIcon)
	$('#categorie').text($elemName)
	stateObj ={publicar: 'Publisher/SelectionSubCategorie'}
	history.pushState(stateObj, "publicado", "SelectSubCategory")
}
function archivo(evt) {
      var files = evt.target.files; // FileList object
      var insert = ($(this).attr('id'))+"Label"
      console.log(insert)
        //Obtenemos la imagen del campo "file". 
      for (var i = 0, f; f = files[i]; i++) {         
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }
       
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
               $('#'+insert).siblings('.imgContext').addClass('disabled')
                      $("#"+insert).html( ['<div class="imgPrimaryLabel"><img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/></div>'].join(''))
              		$('#'+insert).siblings('.delete').addClass('active')

               };
           })(f);
 
           reader.readAsDataURL(f);
       }
}
   
 function archivo2(evt) {
      var files = evt.target.files; // FileList object
      var insert = ($(this).attr('id'))+"Label"
      console.log(insert)
        //Obtenemos la imagen del campo "file". 
      for (var i = 0, f; f = files[i]; i++) {         
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }
       
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
               $('#'+insert).siblings('.imgContext').addClass('disabled')
                      $("#"+insert).html( ['<div class="imgMoreLabel"><img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/></div>'].join(''))
               	$('#'+insert).siblings('.delete').addClass('active')
               };
           })(f);
 
           reader.readAsDataURL(f);
       }
}       
function borrarArchivo(e){
	var $input = $(this).parent().attr('for')
	$('#'+$input).val('')
	e.stopPropagation()
	e.preventDefault()
	$(this).removeClass('active').siblings('.imgContext').removeClass('disabled')
	$(this).siblings().find('.imgPrimaryLabel').html('')
	$(this).siblings().find('.imgMoreLabel').html('')

}  
      $('#imgPrimary').change(archivo);
      $('.moreImgLoad').change(archivo2);
      $('.delete').click(borrarArchivo);