// Hamburger Menu
$(document).ready(function() {
    $(".menu").click(function() {
        $(this).toggleClass("active");
        $(".navi").toggleClass("active");
    });

    // Zoomies
    $('.image-container').hover(
        function() {
            $(this).find('.zoom-image').css('transform', 'scale(1.5)');
            $(this).css('transform', 'scale(2.2)');
            $(this).css('box-shadow', '0 10px 20px rgba(0, 0, 0, 0.3)');
        },
        function() {
            $(this).find('.zoom-image').css('transform', 'scale(1)');
            $(this).css('transform', 'scale(1)');
            $(this).css('box-shadow', 'none');
        }
    );
});

// g maps
let map;

async function initMap() {
    // home address
    const position = { lat: 34.195, lng: -118.449 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // van nuys
    map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // home marker
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Home",
    });
}

window.initMap = initMap;
