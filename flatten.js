// https://ramdajs.com/docs/#flatten
// input: [1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const flatten = (arrayOrElement) => {
    const flattenedArray = []
    if (Array.isArray(arrayOrElement)) {
        for (const item of arrayOrElement) {
            flattenedArray.push(...flatten(item))
        }
    } else {
        flattenedArray.push(arrayOrElement)
    }
    console.log("returning flattenedArray = ", flattenedArray)
    return flattenedArray
}
