$(function () {
    var str = location.search.slice(1);
    var cateid = str.split('&')[0];
    var id=cateid.split('=')[1];
    var proid=str.split('&')[1];
    var pid=proid.split('=')[1];
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: id
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('category', info);
            $('.nav').html(htmlstr);
        }
    })
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid:pid
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('progory', info);
            $('.product_name').html(htmlstr);
            var htmlstr2 = template('plgory', info);
            $('.pl_title').html(htmlstr2);

        }
    })
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid:pid
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('comgory', info);
            $('.comment_content ul').html(htmlstr);
        }
    })
})