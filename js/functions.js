function saludo() {

    alert("Hola mundo esto es JS")

}

function suma() {

    var A;
    var B;
    var C;
    var D;
    var E;
    var F;

    alert("Este sistema determina el resultado de la suma, resta, multiplicacion y division de dos valores ingresados.");

    A = parseInt(prompt("Por favor inrgrese el primer valor: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor: "));

    C = A + B;
    D = A - B;
    E = A * B;
    F = A / B;

    alert("El resultado de la suma es: " + C);
    alert("El resultado de la resta es: " + D);
    alert("El resultado de la multiplicacion es: " + E);
    alert("El resultado de la division es: " + F);
    
}

function cuadrado() {

    var X;
    var R;

    alert("Este sistema determina el cuadrado de un numero.")

    X = parseInt(prompt("Por favor ingrese el valor a pontenciar: "));

    R = X * X;

    alert("El valor del numero potenciado es: "+ R)

}


function nummayor() {

    var n1;
    var n2;

    alert("Este sistema determina el mayor de dos numeros ingresados por el usuario.")

    n1 = parseInt(prompt("Por favor ingrese el primer valor: "));
    n2 = parseInt(prompt("Por favor ingrese el segundo valor: "));

    if (n1 > n2) {

        alert("El numero mayor es: "+ n1)
    } 
    else {

            alert("El numero mayor es: "+ n2)
        }
}


function nummenor(){

    var A;
    var B;
    var C;

    alert("Este sistema determina el menor de tres numeros ingresados por el usuario.");

    A = parseInt(prompt("Porfavor ingrese el primer numero: "));
    B = parseInt(prompt("Por favor ingrese el segundo numero: "));
    C = parseInt(prompt("Por favor ingrese el tercer numero: "));

    if (A == B && B == C) {

        alert("Los numeros son iguales.")
    } 
    else if (A < B && A < C) {

        alert("El numero menor de los 3 es: "+ A)
     }
     else if (B < C) {

        alert("El numero menor es: "+ B)
     }
     else {

            alert("El numero menor es: "+ C)
     }

}


function pulgadas(){

    var P;
    var CM;
    var M;
    var KM;

    alert("Este sistema convierte pulgadas en cm, m y km.")

    P = parseInt(prompt("Por favor ingrese un valor en pulgadas: "));

    CM = P * 2,54;
    M = CM / 100;
    KM = M / 1000;

    alert("Las "+ P +" pulgadas en centimetros es igual a: "+ CM + " cm.")
    alert("Las "+ P +" pulgadas en metros es igual a: "+ M + " m.")
    alert("Las "+ P +" pulgadas en kilometros es igual a: "+ KM + " km.")
}



function prommateria(){

    var C1;
    var C2;
    var C3;
    var C4;
    var C5;
    var PM;

    alert("Este sistema determina el promedio de una materia.")

    C1 = parseInt(prompt("Por favor ingrese su primera calificacion: "));
    C2 = parseInt(prompt("Por favor ingrese su segunda calificacion: "));
    C3 = parseInt(prompt("Por favor ingrese su tercera calificacion: "));
    C4 = parseInt(prompt("Por favor ingrese su cuarta calificacion: "));
    C5 = parseInt(prompt("Por favor ingrese su quinta calificacion: "));

    PM = (C1 + C2 + C3 + C4 + C5) / 5

    if (PM <= 29){

        alert("Su promedio es: "+ PM + " no aprobaste la materia.")
    }
        else {

            alert("Su promedio es: "+ PM + " aprobaste la materia.")
        }

}


function areatriangulo(){

    var A;
    var B;
    var H;

    alert("Este sistema determina el area de un triangulo.")

    B = parseInt(prompt("Por favor ingrese el valor de la base del triangulo: "))
    H = parseInt(prompt("Por favor ingrese el valor de la altura del triangulo: "))

    A = (B * H) / 2

    alert("El area del triangulo es: "+ A)
}


function ventamanzanas(){

        var K;
        var T;
        var TD;
        var TN;

        alert("Este sistema permite saber cuanto debe pagar un cliente el kilo de manzana, sabiendo que el kilo vale: $4.500.");

        K = parseInt(prompt("Digite cuantos kilos de manzana compró: "));

        if (K <= 2){

            T = K * 4500;
            alert("El valor de "+ K + " kilos es: "+ TN);
            alert("El descuento es del 0%, el total a pagar es: "+ T);
        }
            else if (K >= 3 && K <= 5){

                TN = K *4500;
                TD = TN * 10/100;
                T = TN - TD;
                alert("El valor de "+ K + " kilos es: "+ TN);
                alert("El descuento es del 10% que es igual a: $"+ TD);
                alert("El total a pagar es: "+ T);
             }
                else if (K >= 6 && K < 10){

                    TN = K * 4500;
                    TD = TN * 15/100;
                    T = TN - TD;
                    alert("El valor de "+ K + " kilos es: "+ TN);
                    alert("El descuento es del 15%, que es igual a: $"+ TD);
                    alert("El total a pagar es: "+ T);
                }
                    else if (K >= 10){

                        TN = K * 4500;
                        TD = TN * 20/100;
                        T = TN - TD;
                        alert("El valor de "+ K + " kilos es: "+ TN);
                        alert("El descuento es del 20%, que es igual a: $"+ TD);
                        alert("El total a pagar es: "+ T);
                    }
}


function capital(){

    var C;
    var A;
    var G;
    var M;
    var T;
    var P;

    alert("Este sistema determina cuanto seran las ganancias de la inversion en un banco, segun el numero de años, teniendo en cuenta que el banco paga un interes del 2% mensual");

    C = parseInt(prompt("Digite el monto a invertir: "));
    A = parseInt(prompt("Digite la cantidad de años para saber sus ganancias: "));
    
    M = A *12;
    P = M + 2,3;
    G = C * P / 100;
    T = G + C;

    alert("Las ganancias generadas en "+ A + " años por un porcentaje de 2.3% son de: $"+ G);
    alert("El total para ese monto es de: $"+ T)
}


function edad(){

    var E;
    var A;
    var B;
    var C;

    alert("Este sistema determina en que año nacio una persona segun su edad.")

    E= parseInt(prompt("Por favor ingrese su edad actual: "));
    C= parseInt(prompt("Usted tiene "+ E +" años ya cumplidos en el año actual?"));

    if (C == "Si" && C == "si"){

        B = 2022;
        A = B - E;
        alert("Usted nació en el año: "+ A)
    }
        else {
            B = 2021;
            A = B - E;
            alert("Usted nacio en el año: "+ A) 
        }
}


function paroimpar(){

    var N;
    var R;

    alert("Este sistema determina si un numero es par o impar.")

    N = parseInt(prompt("Por favor ingrese un numero: "))

    R = N % 2;

    if (R == 0){

        alert("El numero "+ N + " es par.")
    }
        else {

            alert("El numero "+ N +" es impar.")
         }
}
