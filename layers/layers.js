var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_satelit_1 = new ol.layer.Tile({
            'title': 'satelit',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AR_IndeksBahayaLongorDusun_2 = new ol.format.GeoJSON();
var features_AR_IndeksBahayaLongorDusun_2 = format_AR_IndeksBahayaLongorDusun_2.readFeatures(json_AR_IndeksBahayaLongorDusun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_IndeksBahayaLongorDusun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_IndeksBahayaLongorDusun_2.addFeatures(features_AR_IndeksBahayaLongorDusun_2);
var lyr_AR_IndeksBahayaLongorDusun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_IndeksBahayaLongorDusun_2, 
                style: style_AR_IndeksBahayaLongorDusun_2,
                popuplayertitle: "AR_Indeks Bahaya Longor Dusun",
                interactive: true,
    title: 'AR_Indeks Bahaya Longor Dusun<br />\
    <img src="styles/legend/AR_IndeksBahayaLongorDusun_2_0.png" /> <br />\
    <img src="styles/legend/AR_IndeksBahayaLongorDusun_2_1.png" /> Menengah<br />\
    <img src="styles/legend/AR_IndeksBahayaLongorDusun_2_2.png" /> Rendah<br />\
    <img src="styles/legend/AR_IndeksBahayaLongorDusun_2_3.png" /> Tinggi<br />'
        });

lyr_OpenStreetMap_0.setVisible(false);lyr_satelit_1.setVisible(true);lyr_AR_IndeksBahayaLongorDusun_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_satelit_1,lyr_AR_IndeksBahayaLongorDusun_2];
lyr_AR_IndeksBahayaLongorDusun_2.set('fieldAliases', {'Kelas_Inde': 'Kelas_Inde', 'Luas__ha_': 'Luas__ha_', });
lyr_AR_IndeksBahayaLongorDusun_2.set('fieldImages', {'Kelas_Inde': 'TextEdit', 'Luas__ha_': 'TextEdit', });
lyr_AR_IndeksBahayaLongorDusun_2.set('fieldLabels', {'Kelas_Inde': 'no label', 'Luas__ha_': 'no label', });
lyr_AR_IndeksBahayaLongorDusun_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});