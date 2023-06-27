export const bubbleSort = (array) => {
    const arrayForSort = [...array]
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(arrayForSort[j] < arrayForSort[j + 1]) {
                [arrayForSort[j],arrayForSort[j + 1]] = [arrayForSort[j + 1],arrayForSort[j]]
            }
        }
    }
    return arrayForSort
}