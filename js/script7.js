$('.guide_inner_tab li a').click(function(){
    $('.active').removeClass();
    $(this).parent().addClass('active');

    let test = $(this).data('where');
    console.log('test:?', test);

    $('.show').removeClass('show');
    $(test).addClass('show');
});
