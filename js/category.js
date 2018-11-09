$(function () {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlstr = template('categorytpl', info);
            $('.category_title').html(htmlstr);
        }
    })
    $('.category_title').on('click', '.first', function () {
        var id = $(this).data('id');
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategory',
            data: {
            titleid:id
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlstr = template('contenttpl', info);
                $('.category-content').html(htmlstr);
            }
        })
        if( $(this).siblings().hasClass('active')){
            $(this).siblings().removeClass('active')
        }else{
            $(this).siblings().addClass('active').parent().siblings().find('.category-content').removeClass('active');
        }
    })
   
})