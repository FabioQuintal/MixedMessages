const phases = {
    day: ["The day dawned sunny, ", "The day dawned rainy, ", "The day dawned cloudy, "],
    thought: ["but it may change.", "i would love it to stay that way.", "this is indifferent.", "listen to the birds singing!", "let's rock!"],
    action: ["I will make today a unique day!", "I need a coffee urgently!", "Strength to fight and faith to win, let's go for another day!", "What i'm gonna learn today?"]
}

const randomIndex = num => {
    return Math.floor(Math.random() * num);
}

const generatePhases = () => {
    let randomPhase=[]
    for(let i in phases){
    let num = randomIndex(phases[i].length)
        switch(i) {
            case 'day':
                randomPhase.push(phases[i][num])
                break
            case 'thought':
                randomPhase.push(phases[i][num])
                break
            case 'action':
                randomPhase.push(phases[i][num])
                break
            default:
                console.log('It will not happen')
        }
    }
    return randomPhase.join(" ")
}

console.log(generatePhases())