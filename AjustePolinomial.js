class AjustePolinomial extends Ajuste {
    constructor(x, y) {
        super(x, y)
        this.n = x[0].length
        this.qtdX = x.length

        this.sumX = this.somatoriosEmX(x)
        this.sumXQuadrado = this.somatoriosEmXQuadrado(x)
        this.sumXX = this.somatorioEmXX(x)
        this.sumXY = this.somatoriosEmXY(x, y)
        this.sumY = this.somatorio(y)

    }

    somatoriosEmX(x) {
        var sum = this.criarArrayZerado(this.qtdX)

        for (var i = 0; i < this.qtdX; i++) {
            sum[i] = this.somatorio(x[i])
        }

        return sum
    }

    somatoriosEmXQuadrado(x) {
        var sum = this.criarArrayZerado(this.qtdX)

        for (var i = 0; i < this.qtdX; i++) {
            sum[i] = this.somatorioQuadrado(x[i])
        }

        return sum
    }

    somatorioEmXX(x) {
        var sum = []
        for (var i = 0; i < this.qtdX; i++) {
            if (!(x[i + 1] == null)) {
                sum.push(this.somatorioXY(x[i], x[i + 1]))
            }
        }

        return sum
    }

    somatoriosEmXY(x, y) {
        var sum = []
        for (var i = 0; i < this.qtdX; i++) {
            sum[i] = this.somatorioXY(x[i], y)
        }

        return sum
    }

    mostrarResultado() {
        var div = document.getElementById("resultados")

        var text = ""
        text += "n = " + this.n + "<br/>"
        for (var i = 0; i < this.sumX.length; i++) {
            text += "∑x" + i + " = " + this.sumX[i] + "<br/>"
        }

        for (var i = 0; i < this.sumXX.length; i++) {
            text += "∑x" + i + "x" + (i + 1) + " = " + this.sumXX[i] + "<br/>"
        }

        for (var i = 0; i < this.sumXQuadrado.length; i++) {
            text += "∑x" + i + " quadrado = " + this.sumXQuadrado[i] + "<br/>"
        }

        for (var i = 0; i < this.sumXY.length; i++) {
            text += "∑x" + i + "y = " + this.sumXY[i] + "<br/>"
        }

        text += "∑y = " + this.sumY + "<br/>"
        div.innerHTML = text

    }

    criarArrayZerado(tam) {
        var arr = new Array(tam)
        arr.map(i => {
            return 0
        })

        return arr
    }
}