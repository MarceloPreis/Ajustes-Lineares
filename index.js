function executar() {
    var ajuste = document.getElementById("ajuste").value

    if (ajuste == "polinomial") {
        var x = getPolinomialValues(x)
    } else {
        var x = document.getElementById("x0").value.split(" ")
        x = x.map(i => {
            return parseFloat(i)
        })
    }

    var y = document.getElementById("y").value.split(" ")
    y = y.map(i => {
        return parseFloat(i)
    })


    switch (ajuste) {
        case "linear":
            const ajusteLinear = new AjusteLInear(x, y)
            ajusteLinear.mostrarResultado()
            break

        case "exponencial":
            const ajusteExponecial = new AjusteExponencial(x, y)
            ajusteExponecial.mostrarResultado()
            break

        case "polinomial":
            const ajustePolinomial = new AjustePolinomial(x, y)
            ajustePolinomial.mostrarResultado()
            break
    }
}

function getPolinomialValues() {
    var qtdX = document.getElementById("qtdX").value
    var x = []

    for (var i = 0; i < qtdX; i++) {
        var value = document.getElementById("x" + i).value.split(" ")
        value.map(item => {
            return parseFloat(item)
        })
        x[i] = value
    }
    
    return x
}

function addInput(qtd) {
    var div = document.getElementById("section-x")

    for (child of div.children) {
        child.remove();
    }

    for (var i = 0; i < qtd; i++) {
        var input = document.createElement("input")
        input.type = "text"
        input.placeholder = "Valores para x" + i
        input.id = "x" + i

        div.appendChild(input)
    }
}

function polinomialMode() {
    var ajuste = document.getElementById("ajuste").value
    if (ajuste == "polinomial") {
        var div = document.getElementById("section-qtd")
        var input = document.createElement("input")
        input.type = "number"
        input.id = "qtdX"
        div.appendChild(input)

        input = document.createElement("button")
        input.innerText = "Confirmar"
        input.onclick = function () {
            var qtd = document.getElementById("qtdX").value
            addInput(qtd)
        }
        div.appendChild(input)

    }
}