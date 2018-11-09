$(function () {
    var str = location.search.slice(1);
    if(str.indexOf('&')==-1){
    var id = str.split('=')[1];
    }else{
    var id=str.split('&')[0].split('=')[1];
    var pagesize=str.split('&')[1].split('=')[1];
    }
    var pageid = 1;
    var maxPage;
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: id,
            pagesize:pagesize
        },
        success: function (info) {
            console.log(info);
            var htmlstr = template('category', info);
            $('.nav').html(htmlstr);
        }
    })
    render();
    function render(categoryid, pagesize) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: id,
                pageid: pageid
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlstr = template('pro_main', info);
                $('.pro_box').html(htmlstr)
            }
        })
    }

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductlist',
        data: {
            categoryid: id,
            pageid: pageid
        },
        dataType: 'json',
        success: function (info) {
            maxPage = Math.ceil(info.totalCount / info.pagesize);
            info.maxPage=maxPage;
            var htmlstr = template('pro_page', info);
            $('.fy').html(htmlstr)
        }
    })

    $('.fy').on('input',function(){
        pageid=$(this).val();
        render(id,pageid);
    })

    $('a.current').click(function(){
        if(pageid<=1){
            return false;
        }
        pageid--;
        console.log(pageid);
        render(id,pageid);
        $('.fy').val(pageid);
    })

    $('a.prev').click(function(){
        if(pageid>=maxPage){
            return false;
        }
        pageid++;
        render(id,pageid);
        $('.fy').val(pageid);
        console.log(pageid);
    })

})