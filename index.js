import { readFileSync } from "fs";

/**
 * This function will return an object with keys from header of csv and values as array
 * @param {string} filePath Path of the csv file
 * @param {string} [encoding = 'utf-8'] - Encoding of the file 
 * @returns {Object} Object containing key value pair where keys are header of csv and values are array
 */
export const readCsv = (filePath,encoding) => {
    const result = {}
    const dataFile = readFileSync(filePath,{encoding:encoding||'utf-8'})
    const dataRow = dataFile.split('\r\n')
    const cell = []
    dataRow.forEach(dt => cell.push(dt.split(',')))
    cell[0].forEach(el => result[el] = [])
    cell.forEach((data,index) => {
        if (index==0) {
            return
        }
        data.forEach((data,index) => {
            result[cell[0][index]].push(data)
        })
    })
    return result
}