$(document).ready(function(){
    // 建立 Leaflet 地圖
    var mymap = L.map('mapid');
    
    // 設定經緯度座標
    mymap.setView(new L.LatLng(24.96812, 121.26707), 17);
    
    // 設定圖資來源
    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm = new L.TileLayer(osmUrl, {minZoom: 15, maxZoom: 30});
    mymap.addLayer(osm);
    
    //區塊
    var B_1 = L.polygon(B1[0],{color:transColor(B1[1]), fillColor: transColor(B1[1]), fillOpacity:0.5}).addTo(mymap);
    var B_6 = L.polygon(B6[0],{color:transColor(B6[1]), fillColor: transColor(B6[1]), fillOpacity:0.5}).addTo(mymap);
    var B_3 = L.polygon(B3[0],{color:transColor(B3[1]), fillColor: transColor(B3[1]), fillOpacity:0.5}).addTo(mymap);
    var B_lib = L.polygon(lib[0],{color:transColor(lib[1]), fillColor: transColor(lib[1]), fillOpacity:0.5}).addTo(mymap);
    var B_2 = L.polygon(B2[0],{color:transColor(B2[1]), fillColor: transColor(B2[1]), fillOpacity:0.5}).addTo(mymap);
    var B_7 = L.polygon(B7[0],{color:transColor(B7[1]), fillColor: transColor(B7[1]), fillOpacity:0.5}).addTo(mymap);
    var _base1 = L.polygon(base1[0],{color:transColor(base1[1]), fillColor: transColor(base1[1]), fillOpacity: 0.5}).addTo(mymap);
    var _base2 = L.polygon(base2[0],{color:transColor(base2[1]), fillColor: transColor(base2[1]), fillOpacity: 0.5}).addTo(mymap);
    var _tennis = L.polygon(tennis[0],{color:transColor(tennis[1]), fillColor: transColor(tennis[1]), fillOpacity: 0.5}).addTo(mymap);
    var _dorm = L.polygon(dorm[0],{color:transColor(dorm[1]), fillColor: transColor(dorm[1]), fillOpacity: 0.5}).addTo(mymap);
    var _basket = L.polygon(basket[0],{color:transColor(basket[1]), fillColor: transColor(basket[1]), fillOpacity: 0.5}).addTo(mymap);

    //標點
    var _main = L.marker(main[0], {icon: transIcon(main[1])}).addTo(mymap);
    var _side = L.marker(side[0], {icon: transIcon(side[1])}).addTo(mymap);
    var _learning = L.marker(learning[0], {icon: transIcon(learning[1])}).addTo(mymap);
    var _circle = L.marker(circle[0], {icon: transIcon(circle[1])}).addTo(mymap);
    var _dormMain = L.marker(dormMain[0], {icon: transIcon(dormMain[1])}).addTo(mymap);

    //資訊
    var L1="<strong>目前位置："
    var L2="<br><strong>人口總數：</strong>";
    var L3="<br><strong>擁擠程度：</strong>"
    B_1.bindPopup(L1+B1[2]+L2+B1[1]+L3+transCrowd(B1[1]));
    B_6.bindPopup(L1+B6[2]+L2+B6[1]+L3+transCrowd(B6[1]));
    B_3.bindPopup(L1+B3[2]+L2+B3[1]+L3+transCrowd(B3[1]));
    B_lib.bindPopup(L1+lib[2]+L2+lib[1]+L3+transCrowd(lib[1]));
    B_2.bindPopup(L1+B2[2]+L2+B2[1]+L3+transCrowd(B2[1]));
    B_7.bindPopup(L1+B7[2]+L2+B7[1]+L3+transCrowd(B7[1]));
    _base1.bindPopup(L1+base1[2]+L2+base1[1]+L3+transCrowd(base1[1]));
    _base2.bindPopup(L1+base2[2]+L2+base2[1]+L3+transCrowd(base2[1]));
    _tennis.bindPopup(L1+tennis[2]+L2+tennis[1]+L3+transCrowd(tennis[1]));
    _dorm.bindPopup(L1+dorm[2]+L2+dorm[1]+L3+transCrowd(dorm[1]));
    _basket.bindPopup(L1+basket[2]+L2+basket[1]+L3+transCrowd(basket[1]));

    _main.bindPopup(L1+main[2]+L2+main[1]+L3+transCrowd(main[1]));
    _side.bindPopup(L1+side[2]+L2+side[1]+L3+transCrowd(side[1]));
    _learning.bindPopup(L1+learning[2]+L2+learning[1]+L3+transCrowd(learning[1]));
    _circle.bindPopup(L1+circle[2]+L2+circle[1]+L3+transCrowd(circle[1]));
    _dormMain.bindPopup(L1+dormMain[2]+L2+dormMain[1]+L3+transCrowd(dormMain[1]));
})