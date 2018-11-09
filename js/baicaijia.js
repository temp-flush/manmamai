$(function () {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlstr = template('nav', info);
            $('.ul-wapper').html(htmlstr);
            var wrapper = document.getElementById('wrapper');
            var liwidth=$('.ul-wapper li')[0].offsetWidth;
            $('.ul-wapper').css('width',liwidth*$('.ul-wapper li').length)
            console.log(liwidth);
            console.log(wrapper)
            var myScroll = new IScroll(wrapper,{
                scrollX: true,
                scrollY: false,
                scrollbars:true

            });
        }
    })

    var id = 0;
    render(id);
    function render(id) {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            dataType: 'json',
            data: {
                titleid: id
            },
            success: function (info) {
                console.log(info);
                var htmlstr = template('protpl', info);
                $('.pro_box').html(htmlstr);
            }
        })
    }

    
    $('.ul-wapper').on('click','a',function(){
        var id=$(this).data('id');
        render(id)
    })
})