""" Sección 4: Ejercicios Básicos """

"""
Programa que pregunte el nombre del usuario y un número entero.
Imprimir en líneas diferentes en nombre tantas veces lo indique el número 
"""

nombre = input("Escribe tu nombre: ")
numero = int(input("Escribe un número: "))

# Contatenando salto de línea
print((nombre + "\n") * numero)

print()

# ciclo while
aux = numero
while(aux > 0):
    print(nombre)
    aux -= 1

print()

# ciclo for
for iterator in range(numero):
    print(nombre) 