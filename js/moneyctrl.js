$(function () {
    var currentPage=0;
    var maxPage;
    render();
    function render(currentPage) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getmoneyctrl',
            dataType: 'json',
            data:{
                pageid:currentPage
            },
            success: function (info) {
                console.log(info);
                var htmlstr = template('protpl', info);
                $('.pro_box').html(htmlstr);
            }
        })
    }

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        data: {
            pageid: 0
        },
        success: function (info) {
            console.log(info);
            info.max = Math.ceil(info.totalCount / info.pagesize);
            maxPage=info.max;
            var htmlstr = template('opttpl', info);
            $('.fy').html(htmlstr);
        }
    })


    $('select.fy').on('input',function(){
        var options=$("select.fy option:selected"); 
        currentPage=options.val()-1;
        console.log(currentPage)
        render(currentPage);
    })

    $('a.current').click(function(){
        if(currentPage<=0){
            return false;
        }
        currentPage--;
        $("select").val(currentPage+1);
        render(currentPage);
    })
    $('a.prev').click(function(){
        if(currentPage>=maxPage-1){
            return false;
        }
        currentPage++;
        $("select").val(currentPage+1);
        render(currentPage);
    })
})
