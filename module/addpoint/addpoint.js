define(function(){
    return function(html){
        var s = this;
        var el = null;
        function init(success){
            el = $(document.createElement('div'))
            el.attr('class', 'addpoint');
            el.html(html);
            events();
            $('body').append(el);
            success();

        }
        this.show = function(){
            if(!el){
                init(s.show);
                return
            }
            el.css({
                display: 'block'
            }).fadeTo(222,1);
        }
        function hide(){
            el.fadeTo(222,0,function(){
                el.css({
                    display: 'none'
                })
            })


        }
        function events(){
            el.find('.close').click(function(){
                hide();
            })

        }
    }
})