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
var format_zapm_2020t3_v4_1 = new ol.format.GeoJSON();
var features_zapm_2020t3_v4_1 = format_zapm_2020t3_v4_1.readFeatures(json_zapm_2020t3_v4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zapm_2020t3_v4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zapm_2020t3_v4_1.addFeatures(features_zapm_2020t3_v4_1);
var lyr_zapm_2020t3_v4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zapm_2020t3_v4_1, 
                style: style_zapm_2020t3_v4_1,
                interactive: false,
    title: 'zapm_2020t3_v4<br />\
    <img src="styles/legend/zapm_2020t3_v4_1_0.png" /> 0<br />\
    <img src="styles/legend/zapm_2020t3_v4_1_1.png" /> deploye<br />\
    <img src="styles/legend/zapm_2020t3_v4_1_2.png" /> en cours de deploiement<br />\
    <img src="styles/legend/zapm_2020t3_v4_1_3.png" /> planifie<br />\
    <img src="styles/legend/zapm_2020t3_v4_1_4.png" /> <br />'
        });
var format_PCAUVERGNE42CTriqualifPCPN_2 = new ol.format.GeoJSON();
var features_PCAUVERGNE42CTriqualifPCPN_2 = format_PCAUVERGNE42CTriqualifPCPN_2.readFeatures(json_PCAUVERGNE42CTriqualifPCPN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCAUVERGNE42CTriqualifPCPN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCAUVERGNE42CTriqualifPCPN_2.addFeatures(features_PCAUVERGNE42CTriqualifPCPN_2);
var lyr_PCAUVERGNE42CTriqualifPCPN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCAUVERGNE42CTriqualifPCPN_2, 
                style: style_PCAUVERGNE42CTriqualifPCPN_2,
                interactive: true,
                title: '<img src="styles/legend/PCAUVERGNE42CTriqualifPCPN_2.png" /> PC AUVERGNE 42C Trié qualif PC PN'
            });
var format_PCPNAlpes_3 = new ol.format.GeoJSON();
var features_PCPNAlpes_3 = format_PCPNAlpes_3.readFeatures(json_PCPNAlpes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCPNAlpes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCPNAlpes_3.addFeatures(features_PCPNAlpes_3);
var lyr_PCPNAlpes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCPNAlpes_3, 
                style: style_PCPNAlpes_3,
                interactive: true,
                title: '<img src="styles/legend/PCPNAlpes_3.png" /> PCPN Alpes'
            });
var format_departement_2020t4_v3_4 = new ol.format.GeoJSON();
var features_departement_2020t4_v3_4 = format_departement_2020t4_v3_4.readFeatures(json_departement_2020t4_v3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departement_2020t4_v3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departement_2020t4_v3_4.addFeatures(features_departement_2020t4_v3_4);
var lyr_departement_2020t4_v3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departement_2020t4_v3_4, 
                style: style_departement_2020t4_v3_4,
                interactive: false,
                title: '<img src="styles/legend/departement_2020t4_v3_4.png" /> departement_2020t4_v3'
            });

lyr_OSMStandard_0.setVisible(true);lyr_zapm_2020t3_v4_1.setVisible(true);lyr_PCAUVERGNE42CTriqualifPCPN_2.setVisible(true);lyr_PCPNAlpes_3.setVisible(true);lyr_departement_2020t4_v3_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_zapm_2020t3_v4_1,lyr_PCAUVERGNE42CTriqualifPCPN_2,lyr_PCPNAlpes_3,lyr_departement_2020t4_v3_4];
lyr_zapm_2020t3_v4_1.set('fieldAliases', {'CodeOI': 'CodeOI', 'lgtZAPM': 'lgtZAPM', 'lgtMadPM': 'lgtMadPM', 'taux': 'taux', 'couv': 'couv', 'INSEE_COM': 'INSEE_COM', '92': '92', 'fe': 'fe', 'fi': 'fi', '0P': '0P', 'ct': 'ct', 'nu': 'nu', 'INSEE_DEP': 'INSEE_DEP', 'NOM_COM': 'NOM_COM', 'NOM_DEP': 'NOM_DEP', 'NOM_IRIS': 'NOM_IRIS', 'RefPM': 'RefPM', 'EtatPM': 'EtatPM', 'aire': 'aire', });
lyr_PCAUVERGNE42CTriqualifPCPN_2.set('fieldAliases', {'CENTRE': 'CENTRE', 'ZONE': 'ZONE', 'PC': 'PC', 'INSEE': 'INSEE', 'COMMUNE': 'COMMUNE', 'RIVOLI': 'RIVOLI', 'LIBELLE VOIE': 'LIBELLE VOIE', 'DESC': 'DESC', 'DESC_1': 'DESC_1', 'DESC_2': 'DESC_2', 'DESC_3': 'DESC_3', 'DESC_4': 'DESC_4', 'DESC_5': 'DESC_5', 'X': 'X', 'Y': 'Y', });
lyr_PCPNAlpes_3.set('fieldAliases', {'CENTRE': 'CENTRE', 'ZONE': 'ZONE', 'CODE PC': 'CODE PC', 'TYPE PC': 'TYPE PC', 'DESC': 'DESC', 'DESC_1': 'DESC_1', 'DESC_2': 'DESC_2', 'DESC_3': 'DESC_3', 'DESC_4': 'DESC_4', 'COMMENTAIRES': 'COMMENTAIRES', 'X': 'X', 'Y': 'Y', });
lyr_departement_2020t4_v3_4.set('fieldAliases', {'ID': 'ID', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'Dpt': 'Dpt', 'Reg': 'Reg', 'TNCC': 'TNCC', 'ftth': 'ftth', 'Locaux': 'Locaux', 'taux': 'taux', 'couv': 'couv', });
lyr_zapm_2020t3_v4_1.set('fieldImages', {'CodeOI': 'TextEdit', 'lgtZAPM': 'TextEdit', 'lgtMadPM': 'TextEdit', 'taux': 'TextEdit', 'couv': 'TextEdit', 'INSEE_COM': 'TextEdit', '92': 'TextEdit', 'fe': 'TextEdit', 'fi': 'TextEdit', '0P': 'TextEdit', 'ct': 'TextEdit', 'nu': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOM_IRIS': 'TextEdit', 'RefPM': 'TextEdit', 'EtatPM': 'TextEdit', 'aire': 'TextEdit', });
lyr_PCAUVERGNE42CTriqualifPCPN_2.set('fieldImages', {'CENTRE': 'TextEdit', 'ZONE': 'TextEdit', 'PC': 'TextEdit', 'INSEE': 'Range', 'COMMUNE': 'TextEdit', 'RIVOLI': 'TextEdit', 'LIBELLE VOIE': 'TextEdit', 'DESC': 'TextEdit', 'DESC_1': 'TextEdit', 'DESC_2': 'TextEdit', 'DESC_3': 'TextEdit', 'DESC_4': 'TextEdit', 'DESC_5': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_PCPNAlpes_3.set('fieldImages', {'CENTRE': 'TextEdit', 'ZONE': 'TextEdit', 'CODE PC': 'TextEdit', 'TYPE PC': 'TextEdit', 'DESC': 'TextEdit', 'DESC_1': 'TextEdit', 'DESC_2': 'TextEdit', 'DESC_3': 'TextEdit', 'DESC_4': 'TextEdit', 'COMMENTAIRES': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_departement_2020t4_v3_4.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'Dpt': 'TextEdit', 'Reg': 'TextEdit', 'TNCC': 'TextEdit', 'ftth': 'TextEdit', 'Locaux': 'TextEdit', 'taux': 'TextEdit', 'couv': 'TextEdit', });
lyr_zapm_2020t3_v4_1.set('fieldLabels', {'CodeOI': 'no label', 'lgtZAPM': 'no label', 'lgtMadPM': 'no label', 'taux': 'no label', 'couv': 'no label', 'INSEE_COM': 'no label', '92': 'no label', 'fe': 'no label', 'fi': 'no label', '0P': 'no label', 'ct': 'no label', 'nu': 'no label', 'INSEE_DEP': 'no label', 'NOM_COM': 'no label', 'NOM_DEP': 'no label', 'NOM_IRIS': 'no label', 'RefPM': 'no label', 'EtatPM': 'no label', 'aire': 'no label', });
lyr_PCAUVERGNE42CTriqualifPCPN_2.set('fieldLabels', {'CENTRE': 'no label', 'ZONE': 'no label', 'PC': 'no label', 'INSEE': 'no label', 'COMMUNE': 'no label', 'RIVOLI': 'no label', 'LIBELLE VOIE': 'no label', 'DESC': 'no label', 'DESC_1': 'no label', 'DESC_2': 'no label', 'DESC_3': 'no label', 'DESC_4': 'no label', 'DESC_5': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PCPNAlpes_3.set('fieldLabels', {'CENTRE': 'no label', 'ZONE': 'no label', 'CODE PC': 'no label', 'TYPE PC': 'no label', 'DESC': 'no label', 'DESC_1': 'no label', 'DESC_2': 'no label', 'DESC_3': 'no label', 'DESC_4': 'no label', 'COMMENTAIRES': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_departement_2020t4_v3_4.set('fieldLabels', {'ID': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'Dpt': 'inline label', 'Reg': 'no label', 'TNCC': 'no label', 'ftth': 'no label', 'Locaux': 'no label', 'taux': 'no label', 'couv': 'no label', });
lyr_departement_2020t4_v3_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});