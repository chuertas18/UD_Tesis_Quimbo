/* Código para la descarga de Factores abióticos GEE
   Versión 1.0
   Autor: Claudia Huertas
   Curso: Taller Machine learning
   Descripción: Este código que se ejecuta en Google Earth Engine (GEE)
   permite la descarga de imágenes de entrada en los modelos de machine learning
*/

// Código para la descarga de Factores abióticos
// Define la ubicación y tamaño del rectángulo que delimita el área de interés
var rectangle = ee.Geometry.Rectangle(-75.78, 2.23, -75.24, 2.85);

// Define el período de tiempo para el que se descargará los datos
var startDate = ee.Date('2019-03-25');
var endDate = ee.Date('2022-12-01');

// Carga los datos de elevación
var elevation = ee.Image('USGS/SRTMGL1_003')
    .clip(rectangle);

// Sentinel-2
// Selecciona la colección Sentinel-2 y filtra por fecha y cobertura de nubes
// Buscar imagenes Sentinel 2
var rev_s2 = ee.ImageCollection("COPERNICUS/S2_SR")
.filterDate(startDate, endDate)
.filterBounds(rectangle)
.filterMetadata("CLOUDY_PIXEL_PERCENTAGE", "Less_Than", 20);

// Extraer imagen
var i1 = ee.Image("COPERNICUS/S2_SR/20190603T130259_20190603T130255_T24LUQ");

// Ver caracteristicas coleccion sentinel 2
print(rev_s2);



// GEDI L2A Raster Canopy Top Height 
/*
var qualityMask = function(im) {
  return im.updateMask(im.select('quality_flag').eq(1))
      .updateMask(im.select('degrade_flag').eq(0));
};
*/
var gedi_ch = ee.ImageCollection('LARSE/GEDI/GEDI02_A_002_MONTHLY')
//.filterDate(startDate, endDate)
.filterBounds(rectangle)
//.map(qualityMask)
.select('rh98')
.map(function(image){return image.clip(rectangle)});

var gediVis = {
  min: 1,
  max: 60,
  palette: 'darkred,red,orange,green,darkgreen',
};




// Crea un mapa y añade las capas de elevación, temperatura, precipitación, bosque y no bosque
Map.setCenter(-75.78, 2.23, 10);
Map.addLayer(elevation, {min:0, max:3000}, 'Elevación');
Map.addLayer(gedi_ch, gediVis, 'rh98');


// Descarga de datos
Export.image.toDrive({
image: gedi_ch.select("rh98"),
description: "GEDI_CH",
folder: "GEE_Folder",
scale: 25,
region: rectangle,
maxPixels: 1e13,
crs: "EPSG:4326"
});




// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B2"),
  description: "S2_B2",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});


// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B3"),
  description: "S2_B3",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});



// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B4"),
  description: "S2_B4",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});


// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B5"),
  description: "S2_B5",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});


// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B6"),
  description: "S2_B6",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});


// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B7"),
  description: "S2_B7",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B8"),
  description: "S2_B8",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B8A"),
  description: "S2_B8A",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});


// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B11"),
  description: "S2_B11",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

// Exportar imagen a Drive
Export.image.toDrive({
  image: col_s2.select("B12"),
  description: "S2_B12",
  folder: "GEE_Folder",
  scale: 20,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});