$(function () {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcoupon',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlstr = template('nav', info);
            $('.nav_box').html(htmlstr);
        }
    })
})