class Ajuste {
    constructor(x, y){
        this.toFixed = 3
    }

    somatorio(x = []) {
        var sum = 0
        x.map(i => {
            sum += parseFloat(i)
        })

        return sum.toFixed(this.toFixed)
    }

    somatorioX(x = []) {
        var sum = 0
        x.map(i => {
            sum += parseFloat(i)
        })

        return sum.toFixed(this.toFixed)
    }

    somatorioXY(x = [], y = []) {
        var sum = 0;
        for (var i = 0; i < this.n; i++) {
            sum += (parseFloat(x[i]) *  parseFloat(y[i]))
        }

        return sum.toFixed(this.toFixed)
    }

    somatorioQuadrado(x = []) {
        var sum = 0
        x.map(i => {
            sum += Math.pow(i, 2)
        })

        return sum.toFixed(this.toFixed)
    }

    calcular() {
        var b = ((this.n * this.sumXY - this.sumX * this.sumY) / (this.n * this.sumXQuadrado - (Math.pow(this.sumX, 2)))).toFixed(this.toFixed)

        var a = ((this.sumY - (this.sumX * b)) / this.n).toFixed(this.toFixed)

        return [a, b]
    }
}