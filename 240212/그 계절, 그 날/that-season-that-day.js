const fs = require('fs')
const [y, m, d] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const days = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const leapDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const getSeason = (month) => {
    if (month >= 3 && month <= 5) return 'Spring'
    if (month >= 6 && month <= 8) return 'Summer'
    if (month >= 9 && month <= 11) return 'Fall'
    return 'Winter'
}

const isLeapYear = (year) => {
    if (year % 4 !== 0) return false
    if (year % 100 === 0) {
        if (year % 400 === 0) return true
        return false
    }
    return true
}

const checkSeason = () => { 
    const lastDay = isLeapYear(y) ? leapDays[m-1] : days[m-1]
    if (d <= lastDay) return getSeason(m)
    return -1
}

console.log(checkSeason())