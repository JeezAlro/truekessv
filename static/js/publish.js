$('.contentCategorie').click(selectCategorie)
$('.selectSub').click(selectSub)
$('#backSelect').click(backSelection)
$('#back').click(back)

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