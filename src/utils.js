function randint(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function calcTotal(operations) {
    let totalMain = 0
    let totalSub = 0
    let dep = 0

    for (const val of operations) {
        let increase

        if (val[val.length - 1] === '+') {
            increase = 1
        } else {
            increase = -1
        }

        if (val[0] === 'm') {
            totalMain += increase
        } else if (val[0] === 's') {
            totalSub += increase
        } else {
            dep++
        }
    }

    return {
        totalMain,
        totalSub,
        dep,
    }
}

function combinationProcess(clothes, num) {
    if (clothes[num].length > 1) {
        const index = randint(0, clothes[num].length - 1)
        const element = clothes[num][index]

        return element
    } else return clothes[num][0]
}

function getRecommendations(userAdv, typeNum) {
    const result = []

    if (userAdv[0] === 'n') {
        result.push(combinationProcess(CLOTHES_OUTER, typeNum))
        result.push(combinationProcess(CLOTHES_INNER, typeNum))
        result.push(combinationProcess(CLOTHES_UNDER, typeNum))
    } else {
        let outer, inner, under

        if (typeNum > 1 && typeNum < 4) {
            outer = randint(typeNum - 1, typeNum + 1)
            inner = randint(typeNum - 1, typeNum + 1)
            under = randint(typeNum - 1, typeNum + 1)
        } else if (typeNum === 1) {
            outer = randint(typeNum, typeNum + 1)
            inner = randint(typeNum, typeNum + 1)
            under = randint(typeNum, typeNum + 1)
        } else {
            outer = randint(typeNum - 1, typeNum)
            inner = randint(typeNum - 1, typeNum)
            under = randint(typeNum - 1, typeNum)
        }

        result.push(combinationProcess(CLOTHES_OUTER, outer))
        result.push(combinationProcess(CLOTHES_INNER, inner))
        result.push(combinationProcess(CLOTHES_UNDER, under))
    }

    return result
}

export function getResult(operations) {
    const { totalMain, totalSub, dep } = calcTotal(operations)

    let typeNum

    if (totalMain > -7 && totalMain <= -3) typeNum = 0
    else if (totalMain > -3 && totalMain < 0) typeNum = 1
    else if (totalMain >= 0 && totalMain < 4) typeNum = 2
    else typeNum = 3

    if (totalSub > 0) userAdv = 'go_type'
    else userAdv = 'no_type'

    return {
        keywords: {
            main: KEYWORDS_MAIN[totalMain + 7],
            sub: KEYWORDS_SUB[totalSub + 5],
            dep: KEYWORDS_DEP[dep],
        },
        recommendations: getRecommendations(userAdv, typeNum),
    }
}
