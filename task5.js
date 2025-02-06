function triangle(num, mode = "left") {
    const modes = ["left", "right", "isosceles"];
    if (!modes.includes(mode)) {
        throw new Error("Invalid mode! Please choose 'left', 'right', or 'isosceles'.");
    }
    function printLeftTriangle(num) {
        for (let i = 1; i <= Math.abs(num); i++) {
            console.log('#'.repeat(i));
        }
    }
    function printRightTriangle(num) {
        for (let i = 1; i <= Math.abs(num); i++) {
            console.log(' '.repeat(Math.abs(num) - i) + '#'.repeat(i));
        }
    }
    function printIsoscelesTriangle(num) {
        const absNum = Math.abs(num);
        for (let i = 1; i <= absNum; i++) {
            const spaces = ' '.repeat(absNum - i);
            const hashes = '#'.repeat(2 * i - 1);
            console.log(spaces + hashes);
        }
    }
    if (num > 0) {
        switch (mode) {
            case "left":
                printLeftTriangle(num);
                break;
            case "right":
                printRightTriangle(num);
                break;
            case "isosceles":
                printIsoscelesTriangle(num);
                break;
        }
    } else if (num < 0) {
        switch (mode) {
            case "left":
                for (let i = 1; i <= -num; i++) {
                    console.log('#'.repeat(-num - i + 1));
                }
                break;
            case "right":
                for (let i = 1; i <= -num; i++) {
                    console.log(' '.repeat(i - 1) + '#'.repeat(-num - i + 1));
                }
                break;
            case "isosceles":
                for (let i = 1; i <= -num; i++) {
                    const spaces = ' '.repeat(i - 1);
                    const hashes = '#'.repeat(2 * (-num - i + 1) - 1);
                    console.log(spaces + hashes);
                }
                break;
        }
    } else {
        console.log("Please provide a non-zero number.");
    }
}
module.exports = { triangle }
