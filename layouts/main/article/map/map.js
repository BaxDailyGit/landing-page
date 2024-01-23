var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.27918, 127.0487), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    };

// 지도를 생성한다
var map = new kakao.maps.Map(mapContainer, mapOption);


// 커스텀 오버레이를 생성하고 지도에 표시한다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    content: '<div style="padding: 10px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center">수원에서 거주중 :)</div>\n',
    position: new kakao.maps.LatLng(37.27918, 127.0487), // 커스텀 오버레이를 표시할 좌표
    xAnchor: 0, // 컨텐츠의 x 위치
    yAnchor: 0 // 컨텐츠의 y 위치
});

// 지도에 원을 표시한다
var circle = new kakao.maps.Circle({
    map: map, // 원을 표시할 지도 객체
    center : new kakao.maps.LatLng(37.27918, 127.0487), // 지도의 중심 좌표
    radius : 5000, // 원의 반지름 (단위 : m)
    fillColor: '#408c3c', // 채움 색
    fillOpacity: 0.4, // 채움 불투명도
    strokeWeight: 1, // 선의 두께
    strokeColor: '#408c3c', // 선 색
    strokeOpacity: 1, // 선 투명도
    strokeStyle: 'solid' // 선 스타일
});
