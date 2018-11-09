$(function () {
    var id;
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrandtitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlstr = template('categorytpl', info);
            $('.category_title').html(htmlstr);
            id=$('.category_title a').data('cate');
            console.log(id);
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