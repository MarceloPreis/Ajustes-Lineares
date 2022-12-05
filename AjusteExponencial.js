class AjusteExponencial extends Ajuste {
    constructor(x = [], y = []) {
        if (x.length != y.length) alert("As Variáveis precisam ter número de elemntos iguais")

        super(x, y)
        y = y.map(i => {
            return Math.log(i).toFixed(2)
        })

        this.n = x.length
        this.sumX = this.somatorio(x)
        this.sumY = this.somatorio(y)
        this.sumXY = this.somatorioXY(x, y)
        this.sumXQuadrado = this.somatorioQuadrado(x)
        var resultados = this.calcular()
        this.a = resultados[0]
        this.b = resultados[1]
    }

    mostrarResultado() {
        var div = document.getElementById("resultados")

        var text = ""
        text += "∑x = " + this.sumX + "<br/>"
        text += "∑z = " + this.sumY + "<br/>"
        text += "∑x.z = " + this.sumXY + "<br/>"
        text += "∑x2 = " + this.sumXQuadrado + "<br/>"
        text += "a = " + this.a + "<br/>"
        text += "b = " + this.b + "<br/>"
        text += "Fórmula = y=" + Math.pow(Math.E, this.a).toFixed(this.toFixed) + " * " + "e" + this.b + "x"

        div.innerHTML = text
    }
}