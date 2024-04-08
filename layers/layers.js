var wms_layers = [];

var lyr_eudem25_3035_nitaly_hillshade_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "eudem25_3035_nitaly_hillshade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/eudem25_3035_nitaly_hillshade_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [723806.582476, 5416921.799596, 1561068.403213, 5960679.190079]
                            })
                        });

        var lyr_StadiaStamenTerrainBackgroundkeyed_1 = new ol.layer.Tile({
            'title': 'Stadia Stamen Terrain Background [keyed]',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tiles-eu.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}@2x.png?api_key=986f65ab-84b6-44e3-9a01-984d6401ce30'
            })
        });
var format_Reg01012023_WGS84_2 = new ol.format.GeoJSON();
var features_Reg01012023_WGS84_2 = format_Reg01012023_WGS84_2.readFeatures(json_Reg01012023_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reg01012023_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reg01012023_WGS84_2.addFeatures(features_Reg01012023_WGS84_2);
var lyr_Reg01012023_WGS84_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reg01012023_WGS84_2, 
                style: style_Reg01012023_WGS84_2,
                popuplayertitle: "Reg01012023_WGS84",
                interactive: false,
                title: '<img src="styles/legend/Reg01012023_WGS84_2.png" /> Reg01012023_WGS84'
            });
var format_ForestislandsKML_3 = new ol.format.GeoJSON();
var features_ForestislandsKML_3 = format_ForestislandsKML_3.readFeatures(json_ForestislandsKML_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestislandsKML_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestislandsKML_3.addFeatures(features_ForestislandsKML_3);
var lyr_ForestislandsKML_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestislandsKML_3, 
                style: style_ForestislandsKML_3,
                popuplayertitle: "Forest islands KML",
                interactive: true,
                title: 'Forest islands KML'
            });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var group_Foreground = new ol.layer.Group({
                                layers: [lyr_GoogleLabels_4,],
                                fold: "open",
                                title: "Foreground"});
var group_Background = new ol.layer.Group({
                                layers: [lyr_eudem25_3035_nitaly_hillshade_0,lyr_StadiaStamenTerrainBackgroundkeyed_1,],
                                fold: "open",
                                title: "Background"});

lyr_eudem25_3035_nitaly_hillshade_0.setVisible(true);lyr_StadiaStamenTerrainBackgroundkeyed_1.setVisible(true);lyr_Reg01012023_WGS84_2.setVisible(true);lyr_ForestislandsKML_3.setVisible(true);lyr_GoogleLabels_4.setVisible(true);
var layersList = [group_Background,lyr_Reg01012023_WGS84_2,lyr_ForestislandsKML_3,group_Foreground];
lyr_Reg01012023_WGS84_2.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ForestislandsKML_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Reg01012023_WGS84_2.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ForestislandsKML_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Reg01012023_WGS84_2.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'DEN_REG': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ForestislandsKML_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ForestislandsKML_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});