library(raster)

# Ruta al archivo ADF
#ruta_archivo_adf <- "ruta/al/archivo.adf"
ruta_archivo_adf <- "C:/Users/Usuario/Downloads/tmin_12-20230524T233334Z-001/tmin_12"


# Leer el archivo ADF como un raster
raster_adf <- raster(ruta_archivo_adf)

# Visualizar la capa
plot(raster_adf)


# Cargar shapefile área del quimbo
area_quimbo<-shapefile("C:/Users/Usuario/Downloads/Area_Quimbo/Area_Quimbo.shp")

# Cortar por el área del Quimbo
raster_adf<-crop(raster_adf,area_quimbo)

# Visualizar la capa cortada
plot(raster_adf)

# Ruta de salida para el archivo GeoTIFF
#ruta_salida_geotiff <- "ruta/de/salida/geotiff.tif"
ruta_salida_geotiff <- "C:/Users/Usuario/Downloads/tmin_12.tif"

# Guardar el raster como un archivo GeoTIFF
writeRaster(raster_adf, filename = ruta_salida_geotiff, format = "GTiff",overwrite=TRUE)
