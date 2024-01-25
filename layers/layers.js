var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_griffHSfootprint_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "griffHS-footprint_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/griffHSfootprint_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9733491.790818, 5090987.669960, -9733253.473793, 5091385.987816]
                            })
                        });
var lyr_LowelHighSchool1stFloor_modified_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "LowelHighSchool-1stFloor_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LowelHighSchool1stFloor_modified_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9728770.885900, 5055269.294719, -9728422.775437, 5055597.370048]
                            })
                        });
var lyr_GriffHighSchool2ndfloor_modified_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GriffHighSchool-2nd floor_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GriffHighSchool2ndfloor_modified_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9733462.854094, 5091001.486640, -9733263.348319, 5091349.956727]
                            })
                        });
var lyr_GriffHighSchool1stFloor_modified_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "GriffHighSchool-1stFloor_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GriffHighSchool1stFloor_modified_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9733557.092714, 5090997.283887, -9733259.555574, 5091372.103402]
                            })
                        });
var lyr_ThreeCreek1stFloorA_modified_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "ThreeCreek-1st Floor-A_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThreeCreek1stFloorA_modified_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9729322.399964, 5053682.288866, -9729155.283375, 5053832.617488]
                            })
                        });
var lyr_OakHill1stfloor_modified_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Oak Hill 1st floor_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OakHill1stfloor_modified_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9732559.682269, 5054299.207720, -9732412.444974, 5054445.302376]
                            })
                        });
var format_Outputpointlayer_7 = new ol.format.GeoJSON();
var features_Outputpointlayer_7 = format_Outputpointlayer_7.readFeatures(json_Outputpointlayer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpointlayer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpointlayer_7.addFeatures(features_Outputpointlayer_7);
var lyr_Outputpointlayer_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outputpointlayer_7, 
                style: style_Outputpointlayer_7,
                interactive: true,
                title: '<img src="styles/legend/Outputpointlayer_7.png" /> Output point layer'
            });
var format_Outputpolygonlayer_8 = new ol.format.GeoJSON();
var features_Outputpolygonlayer_8 = format_Outputpolygonlayer_8.readFeatures(json_Outputpolygonlayer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpolygonlayer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpolygonlayer_8.addFeatures(features_Outputpolygonlayer_8);
var lyr_Outputpolygonlayer_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outputpolygonlayer_8, 
                style: style_Outputpolygonlayer_8,
                interactive: true,
                title: '<img src="styles/legend/Outputpolygonlayer_8.png" /> Output polygon layer'
            });

lyr_OSMStandard_0.setVisible(true);lyr_griffHSfootprint_modified_1.setVisible(true);lyr_LowelHighSchool1stFloor_modified_2.setVisible(true);lyr_GriffHighSchool2ndfloor_modified_3.setVisible(true);lyr_GriffHighSchool1stFloor_modified_4.setVisible(true);lyr_ThreeCreek1stFloorA_modified_5.setVisible(true);lyr_OakHill1stfloor_modified_6.setVisible(true);lyr_Outputpointlayer_7.setVisible(true);lyr_Outputpolygonlayer_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_griffHSfootprint_modified_1,lyr_LowelHighSchool1stFloor_modified_2,lyr_GriffHighSchool2ndfloor_modified_3,lyr_GriffHighSchool1stFloor_modified_4,lyr_ThreeCreek1stFloorA_modified_5,lyr_OakHill1stfloor_modified_6,lyr_Outputpointlayer_7,lyr_Outputpolygonlayer_8];
lyr_Outputpointlayer_7.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Outputpolygonlayer_8.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Outputpointlayer_7.set('fieldImages', {'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_Outputpolygonlayer_8.set('fieldImages', {'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_Outputpointlayer_7.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_Outputpolygonlayer_8.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_Outputpolygonlayer_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});