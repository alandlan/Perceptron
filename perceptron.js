function sign(num){
    return num >= 0 ? 1 : 0;
}

class Perceptron {
    weigths = [];
    lr = 0.01;

    constructor(numberWeigths) {
        this.weights = new Array(numberWeigths);

        for(let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1)
        }
    } 

    guess(input){
        let sum = 0;

        for(let i = 0; i < this.weigths.length; i++){
            sum += input[i] * this.weigths[i];
        }

        const output = sign(sum);
        return output;
    }

    train(input, target){
        const guess = this.guess(input);

        const error = target - guess;

        for(let i=0; i < this.weigths.length; i++){
            this.weigths[i] += error * input[i] * this.lr;
        }
    }

    guessY(x) {
        const w0 = this.weights[0];
        const w1 = this.weights[1];
        const w2 = this.weights[2];
    
        return -(w2 / w1) - (w0 / w1) * x;
    }
}