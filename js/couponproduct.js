$(function () {
    var id=location.search.slice(1);
    id=decodeURI(id);
    var couponId=id.split('&')[0].split('=')[1];
    var couponName=id.split('&')[1].split('=')[1];
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        dataType: 'json',
        data:{
            couponid:couponId
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('pro', info);
            $('.pic_content ul').html(htmlstr);
            $('.mm_header h3').text(couponName+'优惠券')
        }
    })
})