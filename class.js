class People {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        matrix[y][x] == 1;
    }
}
class Covid_19 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                    
                }
            }

        }
    return result;
    }
    mul() {
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let covid = new Covid_19(x, y);
            matrix[y][x] = 2;
            covidArr.push(covid);

            this.energy = 20;
        } 
        else {
            console.error('there is no way to multiply');
        }
    }
    eat() {
        let found = this.chooseCell(1);
        let exact = random(found);

        if (exact) {
            this.energy += 7;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < peopleArr.length; i++) {
                if (peopleArr[i].x == x && peopleArr[i].y == y) {
                    peopleArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 2;

            this.x = x;
            this.y = y;

            if (this.energy > 30) {
                this.mul();
            }
        } 
        else {
            this.move();
        }
    }
    move() {
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 2;

            this.x = x;
            this.y = y;

            this.energy-=3

            if (this.energy < 0) {
                this.die()
            }
        }
        else {
            this.energy--
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        for (let i = 0; i < covidArr.length; i++) {
            if (covidArr[i].x == this.x && covidArr[i].y == this.y) {
                covidArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 1;
    }
}

class Vaccine{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                    
                }
            }

        }
        return result;
    }
    mul() {
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let vaccine = new Vaccine(x, y);
            matrix[y][x] = 3;
            vaccineArr.push(vaccine);

            this.energy = 20;
        }
        else {
            console.error('there is no way to multiply');
        }
    }
    eat() {
        let found = this.chooseCell(2);
        let exact = random(found);

        if (exact) {
            this.energy += 15;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < covidArr.length; i++) {
                if (covidArr[i].x == x && covidArr[i].y == y) {
                    covidArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 3;

            this.x = x;
            this.y = y;

            if (this.energy > 30) {
                this.mul();
            }
        } else {
            this.move();
        }
    }
    move() {
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 3;

            this.x = x;
            this.y = y;

            this.energy-=2
        }
        }
}








