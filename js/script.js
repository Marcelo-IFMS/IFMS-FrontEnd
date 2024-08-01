/*
elabora em 25 de junho de 2024
script principal do frontend que acessa 
os itens dos menus comas suas respectivas págians html
Marcelo perez
*/
//
function menu(item){ 
    $( "#conteudo" ).load( "paginas/"+item+".html").fadeTo(200,0.8);
}

















/* 

function menu(item) {
    var href = "paginas/"+item + ".html";
    $.ajax({
        url: href,
        dataType: 'html',
        success: function (html) {
            $('#conteudo').html(html);
        }
    })
} */












/* 
$(document).on("click", "a", function () {
    var href = $(this)[0].attributes[1].value;
    $.ajax({
        url: href,
        dataType: 'html',
        success: function (html) {
            $('#conteudo').html(html)
        }
    })
    return false;
}); */