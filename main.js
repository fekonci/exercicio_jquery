$(document).ready(function () {
    $('form').on('submit', function(e) {
        e.preventDefault()
        const newTarefa = $('#nova-tarefa').val()
        const novaTarefa = $('<li></li>');
        $(`<a href="#">${newTarefa}</a>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ol')
        $('li').click(function(){
            $(this).addClass('item-risco')
        })
    })
})
