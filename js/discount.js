$(function () {
    var id=location.search.slice(1);
    var proid=id.split('=')[1];
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getdiscountproduct',
        dataType: 'json',
        data: {
            productid : proid
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('protpl', info);
            $('.pic_title').html(htmlstr);
            var htmlstr2 = template('comment', info);
            $('.com_con').html(htmlstr2);
            
        }
    })
})