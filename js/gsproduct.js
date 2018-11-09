$(function () {
    var shopid = 0;
    var areaid = 0;
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getgsshop',
        success: function (info) {
            console.log(info);
            var htmlstr = template('protpl', info);
            $('.secNav').html(htmlstr);
            $('.secNav li:nth-child(1) i').addClass('active');
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getgsshoparea',
        data: {
            shopid: shopid,
            areaid: areaid
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('protpl2', info);
            $('.thirNav').html(htmlstr);
            $('.thirNav li:nth-child(1) i').addClass('active');
        }
    })
    $('.nav>ul>li a').on('click', function () {
        if ($(this).data('id') == 1) {
            $('.secNav').toggleClass('active').siblings().removeClass('active');
        }
        if ($(this).data('id') == 2) {
            $('.thirNav').toggleClass('active').siblings().removeClass('active');
        }
        if ($(this).data('id') == 3) {
            $('.forNav').toggleClass('active').siblings().removeClass('active');
        }
    })
    render(shopid, areaid);
    function render(shopid, areaid) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getgsproduct',
            data: {
                shopid: shopid,
                areaid: areaid
            },
            success: function (info) {
                console.log(info);
                var htmlstr = template('protpl3', info);
                $('.pro_box').html(htmlstr);
            }
        })
    }
    $('.nav').on('click', '.minibar a', function () {
        $(this).next().addClass('active').parent().siblings().find('i').removeClass('active');
        if ($(this).parent().parent().hasClass('secNav')) {
            shopid = $(this).data('id');
            $('.firNav li:nth-child(1) a').text($(this).text())
            render(shopid, areaid);
        }
        if ($(this).parent().parent().hasClass('thirNav')) {
            areaid = $(this).data('id');
            $('.firNav li:nth-child(2) a').text($(this).text().slice(0, 2))
            render(shopid, areaid);
        }
        $(this).parent().parent().toggleClass('active');
    })
})