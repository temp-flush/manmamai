$(function () {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlstr = template('menutpl', info);
            $('.menu_box').html(htmlstr);
        }
    })
    $('.menu_box').on('click', 'a[href="#.html"]', function (e) {
        e.preventDefault();
        if ($(this).parent().nextAll().hasClass('active')) {
            $(this).parent().nextAll().removeClass('active');
            $(this).parent().nextAll().css('transition','all .5s');
        }else {
            $(this).parent().nextAll().addClass('active');
            $(this).parent().nextAll().css('transition','none');
        }
    })
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlstr=template('protpl',info);
            $('.pro_box').html(htmlstr);
        }
    })
})