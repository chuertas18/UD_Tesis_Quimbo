# Cargar paquete 'markovchainR' (debe estar instalado previamente)
#https://cran.r-project.org/web/packages/markovchain/index.html
library(markovchain)

# Definir los estados y crear una cadena de Markov
estados <- c("bosque", "arbustales", "pastos")
cadena <- new("markovchain", states = estados)

# Crear una matriz de transición
#     datos históricos de transiciones entre los estados para estimar las probabilidades de transición. 
# Con los datos pasados de los mapas de cobertura y uso de la tierra, puedes calcular 
# las frecuencias de las transiciones observadas y luego convertirlas en probabilidades.
# Por ejemplo, si tienes registros de los mapas de cobertura para varios períodos de tiempo, 
# puedes contar cuántas veces ocurre una transición específica (por ejemplo, de "bosque" a "arbustales") 
# y dividirlo por el número total de transiciones desde el estado inicial. Esto te dará una estimación 
# empírica de la probabilidad de transición.
matriz_transicion <- matrix(c(
  0.7, 0.2, 0.1,    # Probabilidades de transición desde "bosque"
  0.3, 0.4, 0.3,    # Probabilidades de transición desde "arbustales"
  0.1, 0.3, 0.6     # Probabilidades de transición desde "pastos"
), nrow = 3, byrow = TRUE)

# Establecer la matriz de transición en la cadena de Markov
markovchainFit(cadena, transitionMatrix = matriz_transicion)

# Calcular la distribución inicial
distribucion_inicial <- c(0.4, 0.3, 0.3)  # Porcentajes de "bosque", "arbustales" y "pastos"

# Establecer la distribución inicial en la cadena de Markov
markovchainFit(cadena, name = "cadena", distribution = distribucion_inicial)

# Simular cambios en la cobertura
num_periodos <- 5  # Número de periodos a simular
resultados <- rmarkovchain(n = num_periodos, object = cadena)

# Imprimir los resultados
print(resultados)
