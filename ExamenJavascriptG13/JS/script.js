$('#info').hide();

//récupérer et afficher les infos d'un media

$('#listAlphabet').listnav();
$('#').click(function() {
    show(#info)
});
/*$('#demoSix').listnav({
    filterSelector: '.last-name',
    includeNums: false,
    removeDisabled: true,
    allText: 'Complete Cast of Star Trek TNG'
});*/

//ajouter un media

$("#listAlphabet").on("click", function () {
    $("#myList").append($("<li>").attr('id', 'ElN1').attr('class', 'myEl').text("rrrr"));
});
$("#myList").on("click", ".myEl", function(event){
    alert($("#ElN1").attr('id'));
});

//

//modifier les infos

//supprimer le média de la liste

//afficher alphabétiquement

//afficher par le type

//afficher (si prêté est coché) avec les infos comme le nom de la personne