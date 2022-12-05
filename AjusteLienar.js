class AjusteLInear extends Ajuste{
    constructor(x = [], y = []) {
        if (x.length != y.length) alert("As Variáveis precisam ter número de elemntos iguais")

        super(x, y)
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
        text += "n = " + this.n + "<br/>"
        text += "∑x = " + this.sumX + "<br/>"
        text += "∑y = " + this.sumY + "<br/>"
        text += "∑x.y = " + this.sumXY + "<br/>"
        text += "∑x2 = " + this.sumXQuadrado + "<br/>"
        text += "a = " + this.a + "<br/>"
        text += "b = " + this.b + "<br/>"
        text += "Fórmula = y = " + this.a + " + " + this.b + "x"
        div.innerHTML = text
    }
}