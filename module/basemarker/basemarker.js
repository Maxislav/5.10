define(function () {
    return function (html) {
        var arraypoints;
        var item = $(document.createElement('div'));
        item.html(html);
        var viewport = item.find('.overview');
        var scrollbar = item.find('.scrollbar1')
        item.attr('class', 'sprite-points');
        $('body').append(item);
        item.css({
            height: $(window).height()-20
        })
        //item.append(html)

        var myIcon = L.icon({
            iconUrl: 'img/5.10.png',
            iconSize: [30, 45],
            iconAnchor: [15, 45],
            popupAnchor: [0, -45]
        });


        $.ajax({
            url: 'php/getmarker.php',
            type: 'POST',

            success: function (d) {
                arraypoints = JSON.parse(d);
                setMarker(arraypoints)
            },
            error: function (a, b) {
                console.log(b)
            }
        })
        function setMarker(points) {
            for (var i = 0; i < points.length; i++) {
                setRow(points[i])
            }
            scrollbar.tinyscrollbar();
        }

        function setRow(point) {
            var row = $(document.createElement('div'));
            var latlng = [point.lat, point.lng];

            var title = $(document.createElement('div'));
            title.html(point.name).attr('class', 'title');
            var content = $(document.createElement('div'));
            content.html(point.popup).attr('class', 'content');
            row.append(title).append(content).attr('class','row');

            row.hover(function () {
                    map.panTo(latlng)
                }
            ).click(function(){
                    map.setZoom(14)
                });
            viewport.append(row);
            L.marker(latlng, {icon: myIcon}).bindPopup(point.popup).addTo(map);

        }

    }
})