# Instalar y cargar la biblioteca raster
#install.packages("raster")
library(raster)

# Ruta de la carpeta que contiene los archivos raster (geotif)
#ruta_carpeta <- "ruta_de_la_carpeta"
ruta_carpeta <- "D:/Spatial_DB/4U_Project/chirps/Monthly/chirps_2000_01"

# Obtener la lista de archivos GeoTIFF en la carpeta
archivos_raster <- list.files(ruta_carpeta, pattern = ".tif$", full.names = TRUE)

# Crear un stack con los archivos raster
stack_raster <- stack(archivos_raster)

# Calcular el valor medio del stack
raster_medio <- mean(stack_raster)

# Guardar el raster medio en un nuevo archivo GeoTIFF
#ruta_salida <- "ruta_del_archivo_salida.tif"
ruta_salida <- "D:/Spatial_DB/4U_Project/chirps/Monthly/chirps_2000_01.tif"

writeRaster(raster_medio, filename = ruta_salida, format = "GTiff")
