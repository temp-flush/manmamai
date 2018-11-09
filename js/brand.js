$(function () {
    var str = location.search.slice(1);
    var id = str.split('=')[1];
    var cateid;
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrand',
        dataType: 'json',
        data: {
            brandtitleid: id
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('categorytpl', info);
            $('.category_title').html(htmlstr);
            cateid=$('.category_title a').data('id');
        }
    })
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: 0,
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('navtpl', info);
            console.log(htmlstr);
            $('section.nav').html(htmlstr);
        }
    })
})