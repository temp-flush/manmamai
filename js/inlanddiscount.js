$(function () {
    setTimeout(function () {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getinlanddiscount',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlstr = template('protpl', info);
                $('.pro_box').html(htmlstr);
            }
        })
    },1600)

    $('.loading div ').each(function(index,ele){
        $(this).css('transform','rotate('+(45*index)+'deg)')
        var that=this;
        setInterval(function(){
            $(that).css('opacity',1/8*(index+1));
        },200*index)

    })

})