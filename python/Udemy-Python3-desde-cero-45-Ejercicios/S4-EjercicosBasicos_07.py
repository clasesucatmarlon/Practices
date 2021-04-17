""" Sección 4: Ejercicios Básicos """

"""
Programa que pregunte el costo de un producto y calcular su IVA (21%).
Luego mostrar el monto sin y con IVA y precio total  
"""

precio = float(input("Precio del producto: "))

iva = precio * 0.21
totalPagar = precio + iva



print("El precio del producto es: ", precio)
print("El IVA (21%) del producto es: ", iva)
print("Total a pagar es: ", totalPagar)
