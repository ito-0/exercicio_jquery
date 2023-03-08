$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit' , function(e) {
        e.preventDefault()
        const novaTarefa = $('#nova-tarefa').val()
        const novoItem = $('<li style="display: none"></li>')
        $('<span>').text(novaTarefa).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#nova-tarefa').val('')
    })
})

$('ul').on('click', 'li', function() {
    $(this).toggleClass('feito')
})