let arr1 = [
    { id: 2, name: "Shuja" },
    { id: 3, name: "Hamza" },
    { id: 4, name: "umer" },
    { id: 5, name: "ali" },
]
let arr2 = [
    { id: 4, name: "Asad" },
    { id: 3, name: "Asad" },
    { id: 4, name: "ME" },
    { id: 6, name: "ME" },
]

const length2 = arr2.length;

const isFind = (element, array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (element.id === array[i].id) {
            return true;
        }
    }
    return false;
}

const removeSameElelmts = (array1, array2) => {
    const length1 = array1.length;
    let filteredArray = [];
    let indexIncrement = 0;
    for (let i = 0; i < length1; i++) {
        if (!isFind(array1[i], array2)) {
            filteredArray[indexIncrement] = array1[i]
            indexIncrement++
        }
    }
    return filteredArray;
}

const filterArray = removeSameElelmts(arr1, arr2);
console.log(filterArray);
